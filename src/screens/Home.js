import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div>
      HOME!!
      <div>
        <Link to="/event">Event list</Link>
        <Link to="/banner">banner list</Link>
      </div>
    </div>
  );
}
