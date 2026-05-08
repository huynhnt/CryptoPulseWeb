# Các công việc: Sửa lỗi không hiển thị ảnh Coin & Tab Trending

- [x] 1. **Sửa CSS cho thẻ `<Avatar>` trong `AssetTable.jsx`**
  - File: `src/pages/Home/AssetTable.jsx`
  - Hành động: Xóa bỏ `className="-z-50"` khỏi component `<Avatar>`.
  
- [x] 2. **Sửa CSS cho thẻ `<Avatar>` trong `Watchlist.jsx`**
  - File: `src/pages/Watchlist/Watchlist.jsx`
  - Hành động: Xóa bỏ `className="-z-50"` khỏi component `<Avatar>`.

- [x] 3. **Cập nhật Reducer Coin để xử lý danh sách Trending**
  - File: `src/Redux/Coin/Reducer.js`
  - Hành động:
    - Thêm `trading: []` vào `initialState`.
    - Thêm case cho `FETCH_TRADING_COINS_SUCCESS` để cập nhật `state.trading`, kết hợp việc map dữ liệu JSON bị lồng ghép sâu (`item`) từ backend API thành format chuẩn của Coin.

- [x] 4. **Cập nhật `Home.jsx` để hiển thị State Trending**
  - File: `src/pages/Home/Home.jsx`
  - Hành động: Thay đổi prop `coins` truyền vào `<AssetTable>` sao cho khi `category === "trading"`, sẽ truyền `coin.trading` thay vì lấy nhầm `coin.top50`.
