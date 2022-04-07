
const Component = () => {
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
        {/* button */}
        
            <div class="btnWrap">
                <input className="input"></input>
                <br/><br/>
                
                <button type="button" className="btn black"><p>로그인</p></button>
                
                <br/><br/>
                
                <button type="button" className="btn gray"><p>회원가입</p></button>
         </div>

        <br/><br/>
        {/* image */}
            <div className="imageWrap">
                <h3 className="h3Title1">프로리스트</h3>
                <ul className="imageContent">  
                    {/*listBox*/}
                    <li className="imageList">
                       <div className="imageBox">
                           <span className="imgWrap"></span>
                       </div>
                        <div className="textBox">
                            <h4 className="textName">JON RAHM</h4>
                            <div className="textSub">
                             <button type="button" className="heartBtn"><span className="ico icoHeart"></span>100개</button>
                             <p className="day">22.03.06</p>
                            </div>
                       </div>
                    </li>
                    {/*listBox*/}
                    <li className="imageList">
                       <div className="imageBox"></div>
                        <div className="textBox">
                            <h4 className="textName">Tiger Woods</h4>
                            <div className="textSub">
                             <button type="button" className="heartBtn"><span className="ico icoHeart"></span>100개</button>
                             <p className="day">22.03.06</p>
                            </div>
                       </div>
                    </li>                     
                    {/*listBox*/}
                    <li className="imageList">
                       <div className="imageBox"></div>
                        <div className="textBox">
                            <h4 className="textName">JON RAHM</h4>
                            <div className="textSub">
                             <button type="button" className="heartBtn"><span className="ico icoHeart"></span>100개</button>
                             <p className="day">22.03.06</p>
                            </div>
                       </div>
                    </li>    
                    {/*listBox*/}
                    <li className="imageList">
                       <div className="imageBox"></div>
                        <div className="textBox">
                            <h4 className="textName">Tiger Woods</h4>
                            <div className="textSub">
                             <button type="button" className="heartBtn"><span className="ico icoHeart"></span>100개</button>
                             <p className="day">22.03.06</p>
                            </div>
                       </div>
                    </li>          
                </ul>                             
            </div>
    </div>
</div>
    )
}



export default Component;