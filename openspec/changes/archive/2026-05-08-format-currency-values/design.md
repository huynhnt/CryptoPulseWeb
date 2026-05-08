# Design: Format Currency Values

## Overview
Tính năng này tập trung vào việc định dạng lại cách hiển thị các con số lớn (Volume, Market Cap, Label biểu đồ) và tiền tệ (Price) trên giao diện.

## Architecture & Approach
Thay vì dùng thư viện nặng, chúng ta sẽ ưu tiên sử dụng API có sẵn của trình duyệt là `Intl.NumberFormat` để xử lý việc hiển thị tiền tệ và rút gọn các con số lớn (K, M, B).

1. **Hàm tiện ích (Utility Function)**:
   - Sẽ dùng trực tiếp inline cho các component đơn giản hoặc tạo tiện ích chung nếu sử dụng ở quá nhiều nơi. Tạm thời có thể áp dụng thẳng thông qua `Intl.NumberFormat` trong component cho nhanh gọn.

2. **Cập nhật biểu đồ (ApexCharts)**:
   - Thêm cấu hình `yaxis` vào `options` của `ReactApexChart` trong `StockChart.jsx`.
   - Sử dụng formatter function để chuyển đổi số lớn thành K, M.
   - Cập nhật màu sắc (color) cho nhãn của trục Y thành màu trắng (`#fff`) để dễ đọc hơn trên nền tối.

3. **Cập nhật Table (AssetTable & Watchlist)**:
   - Format cho `current_price`: `$` kết hợp dấu phẩy phân tách ngàn. Hoặc sử dụng `Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })`.
   - Format cho `total_volume` và `market_cap`: Sử dụng `Intl.NumberFormat('en-US')` để thêm dấu phân cách hàng nghìn, giữ nguyên giá trị đầy đủ (không dùng K, M, B).

## Data Model Changes
Không có thay đổi về Data Model. Việc định dạng chỉ xử lý ở View (tầng hiển thị).

## Dependencies
Không cần cài đặt thêm thư viện, sử dụng `Intl.NumberFormat` tích hợp sẵn trong JavaScript.
Sử dụng hàm của React ApexCharts cho formatter biểu đồ.
