
const Component = () => {
    return(
<div class="wrap">
        {/* header */}
        <header className="headerWrap">
            <h1 className="headerTitle">Golf AI Analysis</h1>
            <button className="navBtn">메뉴</button>
        </header>

        {/* content */}

            <div className="contentWrap contentWrap1">
              <div className="contentBox h153">

              </div>
              <div className="contentBox h145">

              </div>
              <div className="contentBox h120">

              </div>
              <div className="contentBox h90">

              </div>
            
        {/* button */}
         
                <button type="button" className="btn black"><p>로그인</p></button>

              <br/><br/>

                <button type="button" className="btn gray"><p>회원가입</p></button>

        <br/><br/>
        {/* image */}
            <div className="imageWrap">
                <h3 className="h3Title1">프로리스트</h3>
                <ul className="imageContent">  
                    {/*listBox*/}
                    <li className="imageList">
                       <div className="imageBox"></div>
                            <h4 className="textName">Tiger Woods</h4>
                            <div className="textSub">
                             <button type="button" className="heartBtn"><span className="ico icoHeart"></span>100개</button>
                             <p className="day">22.03.06</p>
                            </div>
                        
                    </li> 
                    {/*listBox*/}
                    <li className="imageList">
                       <div className="imageBox"></div>
                            <h4 className="textName">Tiger Woods</h4>
                            <div className="textSub">
                             <button type="button" className="heartBtn"><span className="ico icoHeartOff"></span>100개</button>
                             <p className="day">22.03.06</p>
                            </div>
                     
                    </li>                    
                    {/*listBox*/}
                    <li className="imageList">
                       <div className="imageBox"></div>
                            <h4 className="textName">Tiger Woods</h4>
                            <div className="textSub">
                             <button type="button" className="heartBtn"><span className="ico icoHeart"></span>100개</button>
                             <p className="day">22.03.06</p>
                            </div>
                     
                    </li> 
                    {/*listBox*/}
                    <li className="imageList">
                       <div className="imageBox"></div>
                            <h4 className="textName">Tiger Woods</h4>
                            <div className="textSub">
                             <button type="button" className="heartBtn"><span className="ico icoHeartOff"></span>100개</button>
                             <p className="day">22.03.06</p>
                            </div>
                     
                    </li>          
                </ul>                             
            </div>
    </div>
</div>
    )
}



export default Component;