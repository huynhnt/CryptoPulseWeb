# Quy tắc kỹ thuật (Tech Stack Rules)

Quy định về kiến trúc và công nghệ sử dụng trong dự án CryptoPulseWeb.

## 1. Kiến trúc (Architecture)
- Dự án Frontend sử dụng **React.js** (qua Vite) và áp dụng kiến trúc tách biệt giữa UI và Logic.
    - **UI Layer**: Các Components (`src/components/`) và Pages (`src/pages/`).
    - **Logic & State Management**: Redux Store, Actions, Reducers (`src/Redux/`).
    - **Network Layer**: Quản lý các endpoint API (`src/Api/`).

## 2. Quản lý trạng thái (State Management)
- Sử dụng **Redux** kết hợp **Redux Thunk** để xử lý state toàn cục và các logic gọi API bất đồng bộ.
- Local state (ví dụ: state của form nhập liệu) quản lý bằng `useState` / `useReducer` thông thường.

## 3. Tiêu chuẩn UI/UX
- Luôn ưu tiên thiết kế **Premium**, thẩm mỹ cao (Sử dụng Glassmorphism, animations, gradients).
- Sử dụng **TailwindCSS** để styling.
- Sử dụng các components UI từ **Radix UI** / **shadcn-ui** đã được cài đặt sẵn để đảm bảo tính nhất quán và khả năng truy cập (A11y).
- **Animations**: Tích hợp `framer-motion` cho các hiệu ứng chuyển cảnh và vi tương tác (micro-interactions).
- **Responsive**: Đảm bảo UI luôn hiển thị tốt trên mọi kích thước màn hình.

## 4. Tích hợp API (API Integration)
- Khi phát triển các tính năng gọi API, LUÔN LUÔN tham chiếu tài liệu OpenAPI chính thức của Backend tại đường dẫn: `d:\Working\AI\CryptoPulseBackend\docs\api-backend.json`.
- Sử dụng tài liệu này để xác nhận chính xác các Endpoints, Parameters, Request Body, và cấu trúc Response Models nhằm đảm bảo đồng bộ hoàn toàn giữa ứng dụng và máy chủ.
- Xử lý tốt các trạng thái `loading`, `success`, `error` cho mỗi request.
