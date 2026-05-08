# Proposal: Format Currency Values

## Context
Hiện tại, giá trị trên biểu đồ (chart), cũng như các cột "VOLUME", "MARKET CAP" và "PRICE" trong các bảng danh sách coin chưa được định dạng thân thiện với người dùng. Cụ thể:
1. Giá trên biểu đồ nếu là con số lớn (nhiều số 0) sẽ rất khó đọc, cần chuyển sang định dạng viết tắt như K, M, B (Nghìn, Triệu, Tỷ).
2. Các cột Volume và Market Cap hiển thị số quá dài, cần định dạng có dấu phẩy hoặc viết tắt tương tự.
3. Cột Price đang hiển thị số đơn thuần mà không có đơn vị, cần thêm ký hiệu tiền tệ (ví dụ: `$`).

## Proposed Solution
- **Biểu đồ (StockChart):** Bổ sung thuộc tính `yaxis.labels.formatter` trong cấu hình của React ApexCharts để tự động định dạng các số lớn thành dạng K, M, B...
- **Bảng danh sách (AssetTable & Watchlist):** 
  - Tạo một hàm tiện ích (utility function) để format số hoặc sử dụng `Intl.NumberFormat`. 
  - Áp dụng hàm format này cho các giá trị `total_volume` và `market_cap`.
  - Bổ sung ký hiệu `$` phía trước các giá trị trong cột `current_price` (Price).

## Impact
- **Trải nghiệm người dùng (UX):** Giúp dữ liệu hiển thị gọn gàng, rõ ràng, dễ đọc hơn.
- **Tính chuyên nghiệp:** Thống nhất định dạng tiền tệ và các con số lớn xuyên suốt ứng dụng.

## Scope
- `src/pages/StockDetails/StockChart.jsx`
- `src/pages/Home/AssetTable.jsx`
- `src/pages/Watchlist/Watchlist.jsx`
- Tạo/Cập nhật file utils (nếu cần) để dùng chung hàm format số.
