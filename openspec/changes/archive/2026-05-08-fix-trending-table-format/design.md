# Design: Fix Trending Table — Volume, Market Cap & Số Format Đồng Bộ

## Kiến trúc hiện tại

```
CoinGecko API
   ├── /coins/markets  →  { total_volume: 12345678, market_cap: 98765432 }  ← số thuần
   └── /coins/trending →  { data: { total_volume: "$1.23B", market_cap: "$456M" } } ← string
          ↓
   Redux Reducer
   ├── coinList / top50  → lưu số trực tiếp
   └── trading           → lưu string → BUG: Intl.NumberFormat("$1.23B") = NaN
          ↓
   AssetTable.jsx
   └── Intl.NumberFormat("en-US").format(value) → hiển thị số với dấu phân cách hàng nghìn
```

## Thiết kế mới

### 1. Hàm helper parse compact string → number

```js
// src/Util/formatNumber.js (file mới hoặc thêm vào Util hiện có)

/**
 * Parse chuỗi tiền tệ compact của CoinGecko về số thực.
 * Ví dụ: "$1.23B" → 1230000000, "$456.78M" → 456780000
 */
export function parseCompactCurrency(str) {
  if (typeof str === "number") return str;
  if (!str || typeof str !== "string") return 0;
  const clean = str.replace(/[$,\s]/g, "");
  const multipliers = { K: 1e3, M: 1e6, B: 1e9, T: 1e12 };
  const match = clean.match(/^([\d.]+)([KMBT]?)$/i);
  if (!match) return 0;
  const num = parseFloat(match[1]);
  const mult = multipliers[match[2].toUpperCase()] || 1;
  return num * mult;
}

/**
 * Format số sang dạng compact có ký hiệu tiền tệ.
 * Ví dụ: 1230000000 → "$1.23B"
 */
export function formatCompactCurrency(value) {
  const num = typeof value === "string" ? parseCompactCurrency(value) : value;
  if (!num || isNaN(num)) return "N/A";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2,
  }).format(num);
}
```

### 2. Cập nhật Reducer — Trending

```js
// src/Redux/Coin/Reducer.js
// Thêm import parseCompactCurrency
import { parseCompactCurrency } from "../../Util/formatNumber";

case FETCH_TRADING_COINS_SUCCESS:
  return {
    ...state,
    trading: action.payload.coins.map((c) => ({
      id: c.item.id,
      name: c.item.name,
      symbol: c.item.symbol,
      image: c.item.large || c.item.thumb,
      current_price: c.item.data?.price || 0,
      // Parse string "$1.23B" thành số thực để đồng nhất với coinList/top50
      total_volume: parseCompactCurrency(c.item.data?.total_volume),
      market_cap: parseCompactCurrency(c.item.data?.market_cap),
      market_cap_change_percentage_24h:
        c.item.data?.price_change_percentage_24h?.usd || 0,
    })),
    loading: false,
    error: null,
  };
```

### 3. Cập nhật AssetTable — Format đồng bộ

```jsx
// src/pages/Home/AssetTable.jsx
import { formatCompactCurrency } from "../../Util/formatNumber";

// Thay thế toàn bộ Intl.NumberFormat inline:
<TableCell>{formatCompactCurrency(item.total_volume)}</TableCell>
<TableCell>{formatCompactCurrency(item.market_cap)}</TableCell>
```

### 4. Đồng bộ Watchlist

Kiểm tra `src/pages/Watchlist/Watchlist.jsx` — nếu đang dùng `Intl.NumberFormat` trực tiếp, thay bằng `formatCompactCurrency`.

## Kết quả mong đợi

| Tab | VOLUME | MARKET CAP |
|---|---|---|
| All | $1.23B | $456.78M |
| Top 50 | $1.23B | $456.78M |
| Trending | $1.23B | $456.78M |

## Không thay đổi

- Cột PRICE vẫn hiển thị `$` + số thực (giữ nguyên).
- Cột 24H vẫn hiển thị `%`.
- Layout, routing, API calls.
