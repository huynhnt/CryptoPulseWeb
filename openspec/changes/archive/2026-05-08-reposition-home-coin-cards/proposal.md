# Đề xuất: Thay đổi vị trí và cập nhật ảnh cho thẻ nổi (Floating Coin Cards) trên Trang chủ

## Vấn đề (Problem)
Trong component `HeroSection` tại file `src/pages/Home/Home.jsx`, hiện tại có hai thẻ hiển thị thông tin Bitcoin và Ethereum được đặt với thuộc tính `absolute` và nằm đè lên góc của biểu đồ `StockChart`. Việc này dẫn đến 2 vấn đề:
1. **Lỗi UX do che khuất thao tác**: Thẻ Ethereum đè lên toàn bộ thanh công cụ (toolbar: zoom, pan) của biểu đồ ApexCharts ở góc trên cùng bên phải. Thẻ Bitcoin che khuất một phần trục toạ độ ở góc dưới cùng bên trái.
2. **Thiếu hình ảnh thực tế**: Cả hai thẻ đều đang dùng đường link placeholder (`/api/placeholder/40/40`) khiến ảnh đại diện của coin (AvatarImage) không hiển thị được.

## Giải pháp (Solution)
1. **Thay thế hình ảnh**: Cập nhật đường link `src` của `<AvatarImage>` thành link ảnh logo chuẩn của Bitcoin và Ethereum từ `CoinGecko`.
2. **Sắp xếp lại vị trí**: Thay đổi toạ độ của hai thẻ này (thay vì vắt ngang góc biểu đồ) bằng cách kéo chúng lơ lửng sang phần không gian trống bên cạnh trái của biểu đồ (khoảng giữa biểu đồ và đoạn text bên cạnh), đảm bảo không đè lên không gian tương tác (toolbar và nhãn trục) của biểu đồ.
