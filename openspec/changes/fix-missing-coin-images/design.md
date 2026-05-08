# Thiết kế: Sửa lỗi không hiển thị ảnh Coin & Tab Trending

## Cập nhật Kiến trúc
Không có sự thay đổi nào về mặt kiến trúc cốt lõi. Đây chỉ là một bản vá UI nhỏ và bổ sung một phần State còn thiếu trong Redux.

## Cập nhật Components

### 1. `src/pages/Home/AssetTable.jsx`
- Tìm đến thẻ `<Avatar>` bọc `<AvatarImage>`.
- Xóa bỏ thuộc tính `className="-z-50"` để tránh việc hình ảnh bị đẩy ra phía sau lớp nền của bảng.

### 2. `src/pages/Watchlist/Watchlist.jsx`
- Tương tự như trên, tìm đến component `<Avatar>`.
- Xóa bỏ thuộc tính `className="-z-50"`.

## Cập nhật Quản lý State (Redux)

### 1. `src/Redux/Coin/Reducer.js`
- **Initial State**: Thêm `trading: []` vào `initialState`.
- **Switch Cases**: 
  - Thêm `case FETCH_TRADING_COINS_REQUEST:` (có thể gộp chung với `FETCH_COIN_LIST_REQUEST`).
  - Thêm `case FETCH_TRADING_COINS_SUCCESS:` để ánh xạ `action.payload.coins` vào `state.trading`. Lưu ý: API trả về Trending coins dưới dạng `{ coins: [...] }` và mỗi item lại lồng thêm một object `item` bên trong. 
  - Thêm `case FETCH_TRADING_COINS_FAILURE:` (có thể gộp chung với `FETCH_COIN_LIST_FAILURE`).

### 2. `src/pages/Home/Home.jsx`
- Cập nhật cách truyền tham số (props) cho component `<AssetTable>`:
  ```javascript
  <AssetTable
    category={category}
    coins={
      category === "all"
        ? coin.coinList
        : category === "top50"
        ? coin.top50
        : coin.trading
    }
  />
  ```

### 3. Đồng bộ chuẩn dữ liệu Trending cho `AssetTable`
API CoinGecko `/search/trending` trả về JSON theo dạng:
```json
{
  "coins": [
    {
      "item": {
        "id": "nillion",
        "name": "Nillion",
        "symbol": "NIL",
        "thumb": "...",
        "data": { "price": "$0.5" }
      }
    }
  ]
}
```
Tuy nhiên `AssetTable` lại đang mong đợi các thuộc tính chuẩn: `id`, `image`, `symbol`, `name`, `total_volume`, `market_cap`, `market_cap_change_percentage_24h`, `current_price`.
Để `<AssetTable>` không bị lỗi khi render dữ liệu:
- Trong `Reducer.js`, map lại kết quả của danh sách trending coin để đưa vào chuẩn dữ liệu chung:
  `id: c.item.id`, `name: c.item.name`, `symbol: c.item.symbol`, `image: c.item.thumb`, `current_price: c.item.data.price`.
