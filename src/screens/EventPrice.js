export default function EventPrice() {
  const onAnchorClick = (e) => {
    e.preventDefault();
    window.location.href = "https://contents.gongsacok.com";
  };

  return (
    <div className="commonBox">
      <header>
        <img src="../assets/imgs/event_icon.png" alt="이벤트 로고" />
        <div>
          <h2 style={{ paddingBottom: "6px" }}>
            <span className="color_purple_text">와짱 </span>이벤트
            <span className="color_purple_text"> event</span>
          </h2>
          <span>
            ( 가성비, 사업자 솔루션
            <span className="color_purple_text"> 30% </span>파격 할인 )
          </span>
        </div>
      </header>
      <div className="commonContainer">
        <ul className="priceWrap">
          <li className="pricePiece">
            <img
              src="../assets/imgs/event_img1.png"
              alt="홈페이지 제작, 관리"
            />
            <div>
              <span>홈페이지 제작, 관리 ( PC형 )</span>
              <span>
                <span className="cancleText">
                  473,000원<span style={{ backgroundColor: "#b53bfd" }}></span>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
                <span>220,000원</span>
              </span>
              <span>( 홍보용 빌더 홈페이지 )</span>
            </div>
            <i>선택1</i>
          </li>

          <li className="pricePiece">
            <img src="../assets/imgs/event_img2.png" alt="블로그 제작" />
            <div>
              <span>블로그 제작 + 포스팅 1회</span>
              <span>+ 동영상 제작</span>
              <span>
                <span className="cancleText">
                  440,000원<span style={{ backgroundColor: "#6587f4" }}></span>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
                <span>330,000원</span>
              </span>
            </div>
            <i>선택2</i>
          </li>

          <li className="pricePiece">
            <img
              src="../assets/imgs/event_img3.png"
              alt="사업자 정보 블로그 포스팅"
            />
            <div>
              <span>블로그 포스팅 7회 작성</span>
              <span>
                <span className="cancleText">
                  330,000원<span style={{ backgroundColor: "#f17528" }}></span>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
                <span>220,000원</span>
              </span>
            </div>
            <i>선택3</i>
          </li>

          <li className="pricePiece" style={{ backgroundColor: "#e8deea" }}>
            <img
              src="../assets/imgs/event_img4.png"
              alt="홈페이지+동영상+블로그포스팅"
            />
            <div>
              <span>홈페이지 + 블로그 포스팅 1회</span>
              <span>+동영상 제작, 관리 업로드</span>
              <span>
                <span className="cancleText">
                  550,000원<span style={{ backgroundColor: "#4a963c" }}></span>
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
                <span>330,000원</span>
              </span>
            </div>
            <i>선택4</i>
          </li>
        </ul>
      </div>
      <div className="buttonWrap">
        <a style={{ borderColor: "#b53bfd" }} href="tel:1577-7942">
          1577-7942
        </a>
        <button style={{ borderColor: "#4a963c" }} onClick={onAnchorClick}>
          신청하기
        </button>
      </div>
    </div>
  );
}
