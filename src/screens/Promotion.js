import VisualBox from "../common/component/PromotionVisualBox";
import UserMentionBox from "../common/component/PromotionUserMentionBox";
import AppScreenSliderBox from "../common/component/PromotionAppScreenSliderBox";

export default function Promotion() {
  return (
    <div>
      <VisualBox />
      <UserMentionBox />
      <AppScreenSliderBox />
    </div>
  );
}
