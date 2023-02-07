import { Link } from "react-router-dom";

export default function ListEvent() {
  return (
    <div>
      <h1>이벤트 리스트</h1>
      <div>
        <Link to="eventprice">이벤트 가격</Link>
        <Link to="1">1번째 이벤트</Link>
      </div>
    </div>
  );
}
