import NavMember from "@/assets/images/img-nav-member.png";

const Navigation = () => {
  return (
    <>
      <nav className="navWrap">
        <header>
          <img src={NavMember} alt={""} />
          <p>홍길동님</p>
          {/* <button>로그인하기</button> */}
        </header>
        <ul className="navList">
          <li>
            <p className="first gaa">Golf AI Analysis</p>
            <ul>
              <li>
                <button>목록보기</button>
              </li>
              <li>
                <button>보조선 그리기</button>
              </li>
            </ul>
          </li>
          <li>
            <p className="first swing">프로스윙</p>
            <ul>
              <li>
                <button>프로 리스트</button>
              </li>
              <li>
                <button>프로스윙 목록</button>
              </li>
            </ul>
          </li>
          <li>
            <button className="first compare">스윙영상 비교</button>
          </li>
          <li>
            <button className="first rank">랭킹</button>
          </li>
          <li>
            <p className="first commu">커뮤니티</p>
            <ul>
              <li>
                <button>1:1문의</button>
              </li>
              <li>
                <button>커뮤니티</button>
              </li>
            </ul>
          </li>
        </ul>
        <button className="navSetting">Setting</button>
        <button className="navClose">Close</button>
      </nav>
      <div className="dim"></div>
    </>
  );
};
export default Navigation;
