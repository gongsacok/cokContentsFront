import { Link } from "react-router-dom";

export default function ListBanner() {
  return (
    <div>
      <h1>배너 리스트</h1>
      <div>
        <h2>B2C 배너 리스트</h2>
        <Link to="b2c1">B2C첫번째 배너</Link>
        <Link to="b2c2">B2C두번째 배너</Link>
        <Link to="b2c3">B2C세번째 배너</Link>
      </div>
      <div>
        <h2>B2B 배너 리스트</h2>
        <Link to="b2b1">B2B첫번째 배너</Link>
        <Link to="b2b2">B2B두번째 배너</Link>
        <Link to="b2b3">B2B세번째 배너</Link>
      </div>
    </div>
  );
}
