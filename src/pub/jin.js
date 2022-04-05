import "./scss/jin.scss";
const jin = () => {
    return (
    <div className="test-wrap">
        <header>
            <h2>로그인</h2>
            <nav>
                <span></span>
                <span></span>
                <span></span>
            </nav>
        </header>
        <div class="content">
            <fieldset>
                <div class="mailBox">
                    <label for="mail-input">이메일</label>
                    <input id="mail-input" type="text" placeholder="이메일"></input>
                </div>
                <div class="pwBox">
                    <label for="pw-input">비밀번호</label>
                    <input id="pw-input" type="password" placeholder="비밀번호"></input>
                </div>
            </fieldset>
            <div class="user-box">
                <div class="keep-check-box">
                    <input type="radio" id="keep-check"></input>
                    <label for="keep-check">자동 로그인</label>
                </div>
                <div class="find-box">
                    <a href="#n">비밀번호 찾기</a>
                    <a href="#n">회원가입</a>
                </div>
            </div>
            <button type="button">로그인</button>     
        </div>

    </div>
    );
};
export default jin;
