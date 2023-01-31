import { Link } from "react-router-dom";

export default function ListEvent() {
  return (
    <div>
      <h1>이벤트 리스트</h1>
      <div>
        <Link to="1">1번째 이벤트</Link>
        <Link to="2">2번째 이벤트</Link>
        <Link to="3">3번째 이벤트</Link>
      </div>
    </div>
  );
}
