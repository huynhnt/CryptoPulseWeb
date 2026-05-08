---
name: react-redux-feature
description: Tự động khởi tạo cấu trúc thư mục và các file mẫu cho một tính năng mới theo chuẩn React-Redux Architecture trong ứng dụng CryptoPulse Web.
---

# React Redux Feature Skill

Sử dụng skill này khi bạn cần bắt đầu xây dựng một tính năng (feature) mới cho ứng dụng CryptoPulse Web Frontend.

## Cấu trúc thư mục mục tiêu
Mỗi tính năng mới sẽ được tạo dựa trên sự phân tách giữa Redux state management và UI presentation:
- **Redux State**: `src/Redux/<FeatureName>/`
  - `ActionTypes.js`: Định nghĩa các hằng số action (e.g., `FETCH_DATA_REQUEST`).
  - `Action.js`: Các Action Creators (sử dụng Redux Thunk cho các lời gọi API bất đồng bộ).
  - `Reducer.js`: Reducer xử lý logic state của tính năng.
- **UI Components**: `src/pages/<FeatureName>/` hoặc `src/components/<FeatureName>/`
  - `<FeatureName>.jsx`: Trang/Component chính.

## Quy trình thực hiện

1. **Phân tích yêu cầu**: Xác định tên tính năng và các endpoint API liên quan (nếu có gọi tới Backend).
2. **Tạo thư mục**: Tạo thư mục cho Redux và Page.
3. **Gen code mẫu**:
    - Tạo `ActionTypes.js` chứa các trạng thái của HTTP Request.
    - Tạo `Action.js` chứa các hàm async (import axios hoặc instance API chung).
    - Tạo `Reducer.js` với initial state và switch-case cho các action types.
    - Bổ sung/Đăng ký reducer mới vào root reducer tại `src/Redux/Store.js`.
    - Tạo `<FeatureName>.jsx` ở thư mục `pages/` hoặc `components/`, dùng `useSelector` để lấy state và `useDispatch` để dispatch action.
4. **Tiêu chuẩn UI**:
    - Sử dụng **TailwindCSS** kết hợp với các component từ **shadcn/radix-ui** (nếu có).
    - Áp dụng dark theme / màu chủ đạo của dự án.
    - Cấu trúc file phải tuân thủ chuẩn ES Modules (import/export).

## Ví dụ lệnh tạo nhanh (PowerShell)
```powershell
$f="Wallet"; mkdir "src/Redux/$f", "src/pages/$f"
```

## Lưu ý
- Đảm bảo khai báo route mới tại component điều hướng chính (như `App.jsx` hoặc router definition) sau khi tạo xong Page.
- Đảm bảo xử lý đầy đủ luồng UI cho các trạng thái: `loading`, `success`, `error`.
