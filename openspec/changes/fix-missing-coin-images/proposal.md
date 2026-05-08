# Đề xuất: Sửa lỗi không hiển thị ảnh Coin & Tab Trending

## Vấn đề
Hiện tại, hình ảnh của các đồng coin không hiển thị trên các component `AssetTable.jsx` và `Watchlist.jsx` do lỗi CSS (thẻ `<Avatar>` sử dụng class `z-index` âm là `-z-50`, đẩy hình ảnh ra phía sau background của bảng).

Ngoài ra, tab "Trending" trên trang Home đang hiển thị sai danh sách vì hiển thị lại danh sách "Top 50". Nguyên nhân là Redux store chưa xử lý action `FETCH_TRADING_COINS_SUCCESS`, khiến component bị fallback về state `coin.top50`.

## Giải pháp đề xuất
1. **Sửa lỗi hiển thị ảnh:** Xóa class `-z-50` khỏi các component `<Avatar>` trong `AssetTable.jsx` và `Watchlist.jsx` để hình ảnh hiển thị đúng thứ tự hiển thị (stacking context).
2. **Sửa logic hiển thị tab Trending:**
   - Thêm `trading: []` vào `initialState` trong file `src/Redux/Coin/Reducer.js`.
   - Thêm case `FETCH_TRADING_COINS_SUCCESS` trong `Reducer.js` để cập nhật danh sách trending vào `state.trading`.
   - Cập nhật `Home.jsx` để truyền đúng `coin.trading` vào `<AssetTable />` khi người dùng chọn tab "Trending", thay vì fallback về `coin.top50`.

## Mục tiêu
- Người dùng có thể nhìn thấy rõ icon/hình ảnh của các đồng coin ở tất cả các bảng (All, Top 50, Trending, Watchlist).
- Tab Trending hiển thị chính xác các đồng coin trending được trả về từ Backend.

## Ngoài phạm vi (Non-Goals)
- Không thiết kế lại toàn bộ giao diện bảng.
- Không thay đổi cách gọi API hoặc cấu trúc dữ liệu từ Backend.
