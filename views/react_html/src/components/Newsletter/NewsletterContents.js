import React, { Component } from "react";
import "./Fonts.css";
import GameList from "./GameList";
import Pharagraph1 from "./Pharagraph1";
import Pharagraph2 from "./Pharagraph2";
import Connected from "./Connected";
import FooterEN from "./FooterEn";
import FooterKO from "./FooterKo";
import FooterJP from "./FooterJp";

// **********************  GameList update  ********************** //
import gameList from "./data/game_list/202208.json";
//import gameList from './data/game_list/202205-kr.json'; // vfun-kr
// ./ GameList update

// ****************** game newsletter update ****************** //
/*import sample from './data/sample.json'*/
/*import bless_unleashed_may_update from "./data/2022/blessU-May_update-en.json";*/
import bless_unleashed_return from "./data/2022/blessU-return-cn.json";
// ./ game newsletter update

class NewsletterContents extends Component {
  constructor(props) {
    super(props);
    var gameListJsonData = gameList; // GameList

    /*var jsonData = sample;*/
    /*var jsonData = bless_unleashed_may_update;*/
    var jsonData = bless_unleashed_return;

    this.state = {
      game_data: jsonData.game,
      themeStyle_data: jsonData.themeStyle,
      pharag1_data: jsonData.pharag1,
      pharag2_data: jsonData.pharag2,
      connected_data: jsonData.connected,
      //vfunGames_data: jsonData.vfunGames,
      vfunGames_data: gameListJsonData.vfunGames,
      footerLang_data: jsonData.footerLang,
    };
  }

  // 추출
  fnExtract() {
    const newsLetterHtml = document.getElementById("newsLetter").innerHTML;
    const textBox = document.getElementById("extractBox");
    textBox.value = newsLetterHtml.replace(/(?:\r\n|\r|\n)/g, "<br />"); // 일반 const 변수값으로 할 땐 치환 가능
    textBox.value = newsLetterHtml.replace(/&quot;/g, "'"); // 폰트 설정 중 " ->  &quot; -> '
    textBox.select();
    document.execCommand("copy");
  }

  render() {
    // 상단 게임명
    const gameInfo = {
      officialName: this.state.game_data[0].officialName,
      officialURL: this.state.game_data[0].officialURL,
    };
    // 배경색, 구분석 색
    const themeStyle = {
      backgroundColor: this.state.themeStyle_data[0].backgroundColor,
      borderColor: this.state.themeStyle_data[0].borderColor,
      fontFamily: this.state.themeStyle_data[0].fontFamily,
    };
    // 언어별 폰트 예시
    const themeFont = {
      langDefault: "'Raleway', 'MS Gothic', sans-serif",
      langEn: "'Raleway', sans-serif",
      langKo: "'Noto Sans CJK KR', sans-serif",
      langJp: "'Noto Sans CJK KR', sans-serif",
      langCn: "'Noto Sans TC', sans-serif",
    };

    return (
      <>
        <div id="wrapper">
          <p style={{ margin: "0", height: "5rem", background: "#e1e1e1" }} />
          <div id="newsLetter" style={themeStyle}>
            <table
              className="em_full_wrap"
              style={{
                margin: "0 auto",
                tableLayout: "fixed",
                width: "100%",
                borderSpacing: "0",
                borderCollapse: "collapse",
                wordBreak: "break-all",
                backgroundColor: "#e1e1e1",
              }}
            >
              {/* top */}
              <thead>
                <tr>
                  <th align="center" valign="top" height="24"></th>
                </tr>
                <tr>
                  <th align="center" style={{ padding: "0" }}>
                    <table
                      className="header-section"
                      style={{
                        width: "700px",
                        margin: "0 auto",
                        backgroundColor: "#54545e",
                      }}
                      width="700"
                      bgcolor="#54545e"
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tbody>
                        <tr>
                          <td colSpan="2" height="16" />
                        </tr>
                        <tr>
                          <td
                            style={{
                              width: "50%",
                              padding: "0 20px",
                              textAlign: "left",
                              verticalAlign: "middle",
                            }}
                          >
                            <a
                              href="https://vfun.valofe.com"
                              target="_blank"
                              style={{
                                display: "inline-block",
                                textDecoration: "none",
                                color: "#0d1121",
                              }}
                            >
                              <img
                                className="em_logo"
                                src="https://file.valofe.com/Valofe_file/web/email/images/vfun-logo-white.png"
                                border="0"
                                width="104"
                                height="36"
                                style={{
                                  margin: "0",
                                  padding: "0",
                                  border: "none",
                                }}
                              />
                            </a>
                          </td>
                          <td
                            style={{
                              width: "50%",
                              padding: "0 20px",
                              textAlign: "right",
                              verticalAlign: "middle",
                            }}
                          >
                            <a
                              href={gameInfo.officialURL}
                              target="_blank"
                              title={gameInfo.officialName}
                              style={{
                                textDecoration: "none",
                                textAlign: "right",
                                letterSpacing: "-0.5px",
                                fontFamily: "'Basic', sans-serif",
                                fontSize: "20px",
                                fontWeight: "normal",
                                color: "#93939d",
                              }}
                            >
                              {gameInfo.officialName}
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td height="10" />
                        </tr>
                      </tbody>
                    </table>
                  </th>
                </tr>
              </thead>
              {/* ./ top */}
              <tbody>
                {/* 1단 */}
                {
                  {
                    true: (
                      <Pharagraph1
                        pharag1_data={this.state.pharag1_data}
                        themeStyle={themeStyle}
                        gameInfo={gameInfo}
                      />
                    ),
                  }[this.state.pharag1_data[0].exist]
                }

                {/* ./ 1단 */}

                {/* 2단 */}
                {
                  {
                    true: (
                      <Pharagraph2
                        pharag2_data={this.state.pharag2_data}
                        //bannerlist={bannerlist}
                        // banner1_url="http://localhost:63342/valofe_html/mail/vfun/images/template/sub-banner.jpeg"
                        // banner1_alt="2단 배너1"
                        // banner1_link="게시글링크1"
                        // banner1_title="2단 타이틀1"
                        // banner1_titleColor="#186995"
                        // banner1_desc={"2단 설명1 텍스트 텍스트 \n 줄바꾸고 <span>스팬태그</span> 텍스트텍스트"}  /* 줄 바꿈 시에 {}로 감싸고 <br>태그 대신  \n 사용 */
                        // banner1_descColor="#186995"
                        // banner1_btnColor="#f4f4f4"

                        // banner2_url="http://localhost:63342/valofe_html/mail/vfun/images/template/sub-banner.jpeg"
                        // banner2_alt="2단 배너2"
                        // banner2_link="게시글링크2"
                        // banner2_title="2단 타이틀2"
                        // banner2_titleColor="#186995"
                        // banner2_desc={"2단 설명2 텍스트 \n 텍스트"}  /* 줄 바꿈 시에 {}로 감싸고 <br>태그 대신  \n 사용 */
                        // banner2_descColor="#186995"
                        // banner2_btnColor="#f4f4f4"

                        themeStyle={themeStyle}
                        gameInfo={gameInfo}
                      />
                    ),
                  }[this.state.pharag2_data[0].exist]
                }
                {/* ./ 2단 */}
              </tbody>

              <tfoot>
                <tr>
                  <td align="center" style={{ padding: "0" }}>
                    <table
                      className="sub-section"
                      style={{
                        tableLayout: "fixed",
                        borderSpacing: "0",
                        borderCollapse: "collapse",
                        wordBreak: "break-all",
                        width: "700px",
                        backgroundColor: `${themeStyle.backgroundColor}`,
                      }}
                      width="700"
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                    >
                      <tbody>
                        <tr style={{ borderBottom: "1px solid #eee" }}>
                          <td
                            style={{
                              width: "220px",
                              verticalAlign: "middle",
                              backgroundColor: "#f7f7f7",
                            }}
                            align="center"
                          >
                            <span
                              className="em_text"
                              style={{
                                display: "inline-block",
                                paddingLeft: "0",
                                fontSize: "13px",
                                letterSpacing: "2px",
                                fontWeight: "bold",
                                height: "36px",
                                lineHeight: "36px",
                              }}
                            >
                              STAY CONNECTED
                            </span>
                          </td>
                          <td
                            style={{
                              width: "480px",
                              backgroundColor: "#f7f7f7",
                            }}
                          >
                            <table
                              style={{
                                tableLayout: "fixed",
                                width: "100%",
                                borderSpacing: "0",
                                borderCollapse: "collapse",
                                wordBreak: "break-all",
                              }}
                            >
                              <tbody>
                                <tr>
                                  <td width="*" />
                                  {/* 고정 홈 */}
                                  <td
                                    height="64"
                                    valign="middle"
                                    align="center"
                                    style={{
                                      textAlign: "right",
                                      verticalAlign: "middle",
                                      width: "56px",
                                    }}
                                  >
                                    <a
                                      href={gameInfo.officialURL}
                                      target="_blank"
                                      title={
                                        gameInfo.officialName + " homepage"
                                      }
                                      style={{
                                        display: "inline-block",
                                        width: "36px",
                                        height: "36px",
                                        color: "#fff",
                                        border: "none",
                                        outline: "none",
                                        textDecoration: "none",
                                      }}
                                    >
                                      <img
                                        width="36"
                                        height="36"
                                        src="https://file.valofe.com/Valofe_file/web/email/images/common/fa-h.png"
                                        alt="homepage"
                                      />
                                    </a>
                                  </td>
                                  {/* 고정 홈 */}

                                  <Connected
                                    connected_data={this.state.connected_data}
                                    gameInfo={gameInfo}
                                  />
                                  {/*<Connected
                                                                        category="ncafe"    //네이버카페
                                                                        url=""
                                                                        gameInfo={gameInfo}
                                                                    />*/}
                                  <td width="30" />
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>

                        <tr>
                          <td
                            colSpan="2"
                            align="left"
                            valign="top"
                            style={{
                              position: "relative",
                              verticalAlign: "middle",
                              backgroundColor: "#f7f7f7",
                              height: "68px",
                              lineHeight: "68px",
                              fontSize: "13px",
                              letterSpacing: "2px",
                              fontWeight: "bold",
                              textAlign: "left",
                              paddingLeft: "40px",
                            }}
                          >
                            VFUN GAMES
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan="2"
                            height="20"
                            style={{
                              borderCollapse: "collapse",
                              background: "#fff",
                            }}
                          ></td>
                        </tr>
                        <tr>
                          <td
                            colSpan="2"
                            align="center"
                            valign="top"
                            style={{
                              width: "100%",
                              margin: "0",
                              padding: "0",
                              borderCollapse: "collapse",
                              border: "none",
                              lineHeight: "1.2",
                              fontWeight: "normal",
                              backgroundColor: "#fff",
                            }}
                          >
                            <table
                              align="center"
                              boroder="0"
                              cellSpacing="0"
                              cellPadding="0"
                              style={{
                                tableLayout: "fixed",
                                width: "100%",
                                borderSpacing: "0",
                                borderCollapse: "collapse",
                                wordBreak: "break-all",
                              }}
                            >
                              <tbody>
                                <GameList
                                  vfunGames_data={this.state.vfunGames_data}
                                />
                              </tbody>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td
                            colSpan="2"
                            height="20"
                            style={{
                              borderCollapse: "collapse",
                              background: "#fff",
                            }}
                          ></td>
                        </tr>

                        {/* 푸터_copyright  */}
                        <tr>
                          <td
                            className="em_text_footer"
                            colSpan="2"
                            style={{
                              width: "100%",
                              margin: "0",
                              padding: "0",
                              borderCollapse: "collapse",
                              border: "none",
                              textAlign: "left",
                              lineHeight: "1.7",
                              fontWeight: "normal",
                              color: "#fff",
                              backgroundColor: "#54545e",
                            }}
                          >
                            {
                              {
                                en: <FooterEN />,
                                ko: <FooterKO />,
                                jp: <FooterJP />,
                                tw: <footer>중국</footer>,
                              }[this.state.footerLang_data.lang]
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="top" height="24" />
                </tr>
              </tfoot>
            </table>
          </div>
          <p style={{ margin: "0", height: "20px", background: "#e1e1e1" }} />

          <div id="extract">
            <button
              onClick={(e) => this.fnExtract(e)}
              style={{ padding: "5px 10px" }}
            >
              추출하여 복사하기
            </button>
            <textarea
              name=""
              id="extractBox"
              cols="30"
              rows="100"
              readOnly
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default NewsletterContents;
