import { useParams } from "react-router-dom";
export default function Banner() {
  const { contid } = useParams();
  console.log(contid);
  return <div>배너 번호 :{contid} </div>;
}
