import "../assets/images/btn-hamburger.png";

const Test = () => {
    return(
        <div class="wrap">
        {/* header */}
        <header className="headerWrap">
            <h1 className="headerTitle">Golf AI Analysis</h1>
            <button className="navBtn">메뉴</button>
        </header>

        {/* content */}
        <div className="content">
            <ul className="contentWrap">
                <li className="contentBox">

                </li>
                <li className="contentBox">

                </li>
            </ul>
        {/* login */}
        <div class="login">
         <input className="uiInput" id="loginInput"></input>
         <br/><br/>
         <div className="loginBtn gray"><p>로그인</p></div>
         <br/><br/>
         <div className="loginBtn black"><p>회원가입</p></div>
         </div>
         <ul className="image">
            <li className="imageBox">
                
            </li>
            <li className="imageBox">
         
         </li>
        </ul>
        </div>
        </div>
    )
}



export default Test;