import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <h1>공사콕 콘텐츠 메인 페이지</h1>
      <div>
        <Link to="/event">이벤트 리스트</Link>
      </div>
      <div>
        <Link to="/banner">공사콕 앱배너 리스트</Link>
      </div>
      <div>
        <Link to="/promotion">공사콕 프로모션 페이지</Link>
      </div>
    </div>
  );
}
