# Implementation Tasks: Format Currency Values

- [x] 1. **Định dạng trục Y trên Biểu đồ (StockChart)**
  - File: `src/pages/StockDetails/StockChart.jsx`
  - Hành động: Cập nhật đối tượng `options` trong state, bổ sung cấu hình `yaxis.labels.formatter` để tự động định dạng con số thành rút gọn (K, M, B) nếu giá trị quá lớn.

- [x] 2. **Định dạng dữ liệu trong bảng AssetTable**
  - File: `src/pages/Home/AssetTable.jsx`
  - Hành động:
    - Bọc `item.total_volume` và `item.market_cap` trong hàm hiển thị số ngắn gọn (`Intl.NumberFormat(..., {notation: "compact"})`).
    - Bọc `item.current_price` trong hàm hiển thị tiền tệ (thêm `$`).

- [x] 3. **Định dạng dữ liệu trong bảng Watchlist**
  - File: `src/pages/Watchlist/Watchlist.jsx`
  - Hành động: Tương tự như trên đối với các cột `total_volume`, `market_cap` và `current_price`.

- [x] 4. **Cập nhật màu sắc chữ cho nhãn trục Y trên biểu đồ**
  - File: `src/pages/StockDetails/StockChart.jsx`
  - Hành động: Bổ sung `style: { colors: "#fff" }` vào phần `yaxis.labels` để màu chữ sáng hơn, phù hợp với giao diện nền tối.

- [x] 5. **Chỉnh sửa lại định dạng Volume và Market Cap trong AssetTable**
  - File: `src/pages/Home/AssetTable.jsx`
  - Hành động: Thay đổi `Intl.NumberFormat` cho `total_volume` và `market_cap` để loại bỏ `notation: "compact"`, chỉ sử dụng định dạng phân cách hàng nghìn tiêu chuẩn (`Intl.NumberFormat("en-US")`).

- [x] 6. **Chỉnh sửa lại định dạng Volume và Market Cap trong Watchlist**
  - File: `src/pages/Watchlist/Watchlist.jsx`
  - Hành động: Thay đổi `Intl.NumberFormat` cho `total_volume` và `market_cap` để loại bỏ `notation: "compact"`, chỉ sử dụng định dạng phân cách hàng nghìn tiêu chuẩn (`Intl.NumberFormat("en-US")`).
