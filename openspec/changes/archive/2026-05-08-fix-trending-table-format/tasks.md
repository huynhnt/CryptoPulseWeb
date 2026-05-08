# Danh sách Công việc (Tasks)

- [x] 1. **Tạo hàm helper `formatNumber.js`**
  - Vị trí: `src/Util/formatNumber.js`
  - Hành động: Tạo file mới với 2 hàm:
    - `parseCompactCurrency(str)`: Parse chuỗi kiểu `"$1.23B"` về số thực.
    - `formatCompactCurrency(value)`: Format số (hoặc string compact) sang `"$1.23B"` dùng `Intl.NumberFormat` với `notation: "compact"`.

- [x] 2. **Cập nhật Reducer — parse Trending data**
  - Vị trí: `src/Redux/Coin/Reducer.js`
  - Hành động: Import `parseCompactCurrency` và áp dụng vào `FETCH_TRADING_COINS_SUCCESS` để parse `total_volume` và `market_cap` từ string sang số.

- [x] 3. **Cập nhật AssetTable — dùng `formatCompactCurrency`**
  - Vị trí: `src/pages/Home/AssetTable.jsx`
  - Hành động: Import và thay thế `Intl.NumberFormat("en-US").format(...)` bằng `formatCompactCurrency(...)` cho cột VOLUME và MARKET CAP.

- [x] 4. **Cập nhật Watchlist — đồng bộ format**
  - Vị trí: `src/pages/Watchlist/Watchlist.jsx`
  - Hành động: Import và thay thế `Intl.NumberFormat("en-US").format(...)` bằng `formatCompactCurrency(...)` cho cột VOLUME và MARKET CAP (dòng 66-67).

- [x] 5. **Kiểm tra và xác nhận**
  - Mở tab All, Top 50, Trending và kiểm tra VOLUME và MARKET CAP hiển thị đúng dạng compact (`$1.23B`).
  - Đảm bảo Trending không còn hiển thị trống / NaN.

- [x] 6. **Format cột 24H cho Trending — làm tròn 2 chữ số thập phân**
  - Vị trí: `src/Redux/Coin/Reducer.js`
  - Hành động: Đảm bảo `market_cap_change_percentage_24h` trong Trending được làm tròn và đồng nhất (`.toFixed(2)`) giống All/Top50.
  - Thêm hàm `formatPercent(value)` vào `formatNumber.js` để dùng chung.

- [x] 7. **Thêm ký hiệu `$` vào cột PRICE — tất cả 3 bảng**
  - Vị trí: `src/pages/Home/AssetTable.jsx`, `src/pages/Watchlist/Watchlist.jsx`
  - Hành động: Đảm bảo cột PRICE hiển thị `$` + số cho mọi trường hợp.
  - Trending: `current_price` từ API là string `"$0.023"` (đã có `$`) → cần kiểm tra và tránh hiện `$$0.023`.
  - All/Top50: `current_price` là số thuần → format `$` + số bình thường.
  - Tạo hàm `formatPrice(value)` trong `formatNumber.js` để xử lý cả 2 trường hợp.
