# Thiết kế: Cập nhật vị trí và hình ảnh Thẻ Nổi (Floating Cards)

## 1. Thiết kế thay thế Hình ảnh (Image Replacement)
- Thay đổi đường dẫn ảnh cho thẻ **Bitcoin**:
  - `src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png"`
- Thay đổi đường dẫn ảnh cho thẻ **Ethereum**:
  - `src="https://assets.coingecko.com/coins/images/279/standard/ethereum.png"`

## 2. Thiết kế thay đổi Vị trí (Layout Adjustments)
Sử dụng các class tiện ích của Tailwind CSS để kéo hai thẻ nổi sang phần không gian bên trái biểu đồ (không gian nối giữa text và biểu đồ). Thuộc tính `z-10` được giữ lại/thêm vào để đảm bảo hiển thị đúng layer.

- **Thẻ Bitcoin (Đang ở vị trí dưới bên trái - che mất nhãn biểu đồ)**:
  - Hiện tại: `absolute -bottom-6 -left-6 ...`
  - Đề xuất mới: `absolute top-1/2 -left-12 -translate-y-1/2 -translate-x-4 ...` (Đẩy ra viền trái ở giữa). Tuy nhiên để đơn giản hoá việc dàn trang (tránh overlap nhau), ta sẽ đẩy Bitcoin xuống dưới trái và Ethereum lên trên trái một cách an toàn.
  - Vị trí mới cho **Bitcoin**: `absolute bottom-12 -left-12 z-10 ...` (Dịch lên trên một chút so với bottom để không lấn xuống X-axis, và kéo mạnh sang trái để không lấn vào biểu đồ).

- **Thẻ Ethereum (Đang ở vị trí trên bên phải - che mất toolbar)**:
  - Hiện tại: `absolute -top-6 -right-6 ...`
  - Vị trí mới cho **Ethereum**: `absolute top-12 -left-16 z-10 ...` (Đẩy sang hẳn viền trái, hơi cao lên trên để tạo sự mất cân đối nhẹ (asymmetrical) đầy tính nghệ thuật).

*Lưu ý: Vị trí có thể được tinh chỉnh nhẹ (như `left-[-5rem]`) nếu không gian thực tế có thể rộng hẹp tùy màn hình, nhưng ưu tiên đẩy hẳn ra rìa ngoài biểu đồ.*
