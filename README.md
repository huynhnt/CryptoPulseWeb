# CryptoPulse Web

CryptoPulse Web là ứng dụng Frontend (Single Page Application) dành cho nền tảng giao dịch và theo dõi tiền điện tử. Dự án được xây dựng với mục tiêu mang lại trải nghiệm người dùng mượt mà, giao diện hiện đại (Premium UI) và hiệu suất cao.

## 🚀 Công nghệ sử dụng (Tech Stack)

Dự án sử dụng các công nghệ hiện đại nhất cho hệ sinh thái Frontend:
- **Core**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) (Build tool siêu tốc).
- **State Management**: [Redux](https://redux.js.org/) & [Redux Thunk](https://github.com/reduxjs/redux-thunk) (Xử lý state và side-effects/API).
- **Routing**: [React Router DOM v6](https://reactrouter.com/).
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) kết hợp với [Radix UI](https://www.radix-ui.com/) / shadcn-ui.
- **Animations**: [Framer Motion](https://www.framer.com/motion/).
- **Biểu đồ (Charts)**: [ApexCharts](https://apexcharts.com/).
- **Form & Validation**: React Hook Form + Zod / Yup.

## 📁 Cấu trúc thư mục

```text
src/
├── Admin/        # Các trang và component dành cho trang quản trị
├── Api/          # Cấu hình Axios và các lời gọi API tới Backend
├── Redux/        # Redux Store, Actions, Reducers cho từng tính năng
├── Util/         # Các hàm tiện ích (Format tiền, ngày tháng, helpers...)
├── assets/       # Hình ảnh, icon tĩnh
├── components/   # Các UI Component dùng chung (Button, Modal, Input...)
├── lib/          # Các thư viện tự viết hoặc cấu hình thư viện bên ngoài
└── pages/        # Các trang chính của ứng dụng (Home, Wallet, Profile...)
```

## ⚙️ Hướng dẫn cài đặt và chạy dự án

### Yêu cầu hệ thống
- Node.js (phiên bản 18.x hoặc 20.x trở lên).
- npm hoặc yarn.
- Đã chạy dự án `CryptoPulseBackend` (nếu cần kết nối API thực tế).

### Các bước cài đặt

**1. Clone hoặc tải dự án về máy, sau đó mở Terminal tại thư mục dự án (`CryptoPulseWeb`):**
```bash
cd d:\Working\AI\CryptoPulseWeb
```

**2. Cài đặt các gói thư viện (Dependencies):**
```bash
npm install
```

**3. Khởi động môi trường phát triển (Development Server):**
```bash
npm run dev
```

Sau khi chạy lệnh trên, ứng dụng sẽ khởi động tại `http://localhost:5173/` (hoặc cổng khác do Vite cấp).

### Các lệnh khác

- **Build cho môi trường Production:**
  ```bash
  npm run build
  ```
  *(Sẽ tạo ra thư mục `dist/` chứa các file tĩnh đã tối ưu).*

- **Xem trước bản Build (Preview):**
  ```bash
  npm run preview
  ```

- **Kiểm tra lỗi Code (Lint):**
  ```bash
  npm run lint
  ```

## 🧠 Tích hợp AI Workflow (OpenSpec)

Dự án này đã được tích hợp bộ công cụ **OpenSpec Agent** (tại thư mục `.agent/`). Khi phát triển tính năng mới, hãy sử dụng quy trình `/opsx-propose`, `/opsx-apply`, `/opsx-update` thông qua trợ lý AI để đảm bảo tài liệu và mã nguồn luôn đồng bộ.
