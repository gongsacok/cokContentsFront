import { useParams } from "react-router-dom";
export default function Event() {
  const { contid } = useParams();

  return <div>이벤트 번호 : {contid}</div>;
}
