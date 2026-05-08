# Proposal: Fix Trending Table — Volume, Market Cap & Số Format Đồng Bộ

## Tóm tắt

Tab **Trending** trong bảng coin ở trang Home hiện tại không hiển thị giá trị cho cột **VOLUME** và **MARKET CAP**. Ngoài ra, định dạng số giữa các tab All, Top 50 và Trending không đồng nhất.

## Vấn đề

### 1. VOLUME & MARKET CAP của Trending bị trống
CoinGecko Trending API (`/coins/trending`) trả về `total_volume` và `market_cap` dưới dạng **chuỗi đã định dạng sẵn** (ví dụ: `"$1.23B"`), không phải số. Khi Reducer map sang state, giá trị string này được truyền vào `Intl.NumberFormat` → kết quả là `NaN` hoặc không hiển thị.

### 2. Format số không đồng nhất
- **All / Top 50**: Sử dụng `Intl.NumberFormat("en-US").format(number)` → hiện dạng `1,234,567,890`
- **Trending**: Data là string `"$1.23B"` — không có cách render nhất quán hiện tại

## Mục tiêu

1. **Fix hiển thị** VOLUME và MARKET CAP cho tab Trending (hiện đang trống).
2. **Đồng bộ format số** toàn bộ các tab (All, Top 50, Trending) sang dạng **compact** (`$1.23B`, `$456.78M`) bằng `Intl.NumberFormat` với `notation: "compact"`.

## Giải pháp — Option C

- **Trending Reducer**: Parse string `"$1.23B"` thành số thực bằng hàm helper trước khi lưu vào state.
- **AssetTable**: Cập nhật hàm format dùng `Intl.NumberFormat("en-US", { notation: "compact", compactDisplay: "short" })` thay cho format cũ.
- **Watchlist** (nếu có dùng format tương tự): Đồng bộ luôn.

## Phạm vi thay đổi

- `src/Redux/Coin/Reducer.js` — parse string → number cho Trending coins
- `src/pages/Home/AssetTable.jsx` — cập nhật hàm format số
- `src/pages/Watchlist/Watchlist.jsx` — đồng bộ format số (nếu áp dụng)

## Không thay đổi

- Cấu trúc API call, Redux actions, routing.
- Giao diện / layout của bảng.
