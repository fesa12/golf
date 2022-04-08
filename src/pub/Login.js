const Login = () => {
  return (
    <div className="wrap">
      {/* header */}
      <header className="headerWrap">
        <h1 className="headerTitle">로그인</h1>
        <button className="navBtn">메뉴</button>
      </header>
      <div className="contentWrap contentWrap1">
        <fieldset>
          <div class="mailBox">
            <label for="mailInput">이메일</label>
            <input id="mailInput" type="text" placeholder="이메일"></input>
          </div>
          <div class="pwBox">
            <label for="pwInput">비밀번호</label>
            <input id="pwInput" type="password" placeholder="비밀번호"></input>
          </div>
        </fieldset>
        <div class="userBox">
          <div class="keepCheckBox">
            <input type="radio" id="keepCheck"></input>
            <label for="keepCheck">자동 로그인</label>
          </div>
          <div class="findBox">
            <a href="#n">비밀번호 찾기</a>
            <a href="#n">회원가입</a>
          </div>
        </div>
        <button type="button" className="btn black">
          로그인
        </button>
      </div>
    </div>
  );
};
export default Login;
