import { Link } from "react-router-dom";

export default function ListBanner() {
  return (
    <div>
      <h1>배너 리스트</h1>
      <div>
        <h2>B2C 배너 리스트</h2>
        <Link to="1">B2C첫번째 배너</Link>
        <Link to="2">B2C두번째 배너</Link>
        <Link to="3">B2C세번째 배너</Link>
      </div>
      <div>
        <h2>B2B 배너 리스트</h2>
        <Link to="4">B2B첫번째 배너</Link>
        <Link to="5">B2B두번째 배너</Link>
        <Link to="6">B2B세번째 배너</Link>
      </div>
    </div>
  );
}
