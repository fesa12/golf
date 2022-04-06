import { Link } from "react-router-dom";
import "@/assets/scss/guide.css";

const Guide = () => {
  return (
    <div className="guide_wrap">
      <nav className="leftmenu">
        <h1 className="title">Golf AI Analysis</h1>
        <ul>
          <li>
            <a href="#menu0">공통</a>
          </li>
        </ul>
      </nav>
      <div className="wrapper">
        <div className="contetns">
          {/* 공통 s */}
          <div className="link_notice" id="menu0">
            <h1>공통</h1>
            <table>
              <thead>
                <tr>
                  <th>대분류</th>
                  <th>중분류</th>
                  <th>화면명</th>
                  <th>구분</th>
                  <th>링크</th>
                  <th>작업일</th>
                  <th>상태</th>
                  <th>작업자</th>
                  <th>비고(GIT URL)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tit1">Navigation</td>
                  <td className="tit2"></td>
                  <td className="sbj"></td>
                  <td className="type"></td>
                  <td className="link" id="">
                    <Link target={"_blank"} to="/pub/Navigation">
                      /pub/Navigation
                    </Link>
                  </td>
                  <td className="wdate"></td>
                  <td className="status"></td>
                  <td className="writer"></td>
                  <td className="comment"></td>
                </tr>
                <tr>
                  <td className="tit1">Component</td>
                  <td className="tit2"></td>
                  <td className="sbj"></td>
                  <td className="type"></td>
                  <td className="link" id="">
                    <Link target={"_blank"} to="/pub/Component">
                      /pub/Component
                    </Link>
                  </td>
                  <td className="wdate"></td>
                  <td className="status"></td>
                  <td className="writer"></td>
                  <td className="comment"></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* 공통 e */}
          {/* 공통 s */}
          <div className="link_notice" id="menu0">
            <h1>공통</h1>
            <table>
              <thead>
                <tr>
                  <th>대분류</th>
                  <th>중분류</th>
                  <th>화면명</th>
                  <th>구분</th>
                  <th>링크</th>
                  <th>작업일</th>
                  <th>상태</th>
                  <th>작업자</th>
                  <th>비고(GIT URL)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tit1">jin</td>
                  <td className="tit2"></td>
                  <td className="sbj"></td>
                  <td className="type"></td>
                  <td className="link" id="">
                    <Link target={"_blank"} to="/pub/jin">
                      /pub/jin
                    </Link>
                  </td>
                  <td className="wdate"></td>
                  <td className="status"></td>
                  <td className="writer"></td>
                  <td className="comment"></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* 공통 e */}
          <div className="link_notice" id="menu0">
            <h1>공통</h1>
            <table>
              <thead>
                <tr>
                  <th>대분류</th>
                  <th>중분류</th>
                  <th>화면명</th>
                  <th>구분</th>
                  <th>링크</th>
                  <th>작업일</th>
                  <th>상태</th>
                  <th>작업자</th>
                  <th>비고(GIT URL)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="tit1">Header</td>
                  <td className="tit2"></td>
                  <td className="sbj"></td>
                  <td className="type"></td>
                  <td className="link" id="">
                    <Link target={"_blank"} to="/pub/Header">
                      /pub/Header
                    </Link>
                  </td>
                  <td className="wdate"></td>
                  <td className="status"></td>
                  <td className="writer"></td>
                  <td className="comment"></td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* 공통 e */}
        </div>
      </div>
    </div>
  );
};

export default Guide;
