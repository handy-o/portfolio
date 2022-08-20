import React, {Component} from 'react';

class FooterEN extends Component {
    componentDidMount() {
        // start footer copyright year
        const date = new Date();
        const thisYear = date.getFullYear();
        const yearTag = document.getElementsByClassName('year-of-copyrights');
        yearTag[0].innerHTML = thisYear;
        // end footer copyright year
    }


    render() {
        return (

            <table
                style={{width:"100%",margin:"0",padding:"0",border:"none",cellPadding:"0",cellSpacing:"0"}}>
                <tbody style={{width:"100%",border:"none",margin:"0",padding:"0"}}>
                <tr>
                    <td height="35" style={{borderCollapse:"collapse"}}/>
                </tr>
                <tr>
                    <td className="em_text_footer"
                        style={{borderCollapse:"collapse",margin:"0",padding:"0 0.5rem",border:"none",textAlign:"center",lineHeight:"1.6",fontWeight: "normal",color:"#87878f",fontSize:"11px"}}>
                        VALOFE는 회원님의 프라이버시를 존중합니다.
                        <br/>
                        자세한 내용은 당사의&nbsp;
                            <a href="http://member.valofe.com/common/center/unitedprivacy.html" target="_blank" className="em_text_footer" style={{display:"inline",textDecoration:"underline",margin:"0",padding:"0",border:"none",textAlign:"left",lineHeight:"1.6",fontWeight:"normal",color:"#ababb5",fontSize:"11px"}}>
                                  개인정보 처리방침
                            </a>&nbsp;을 참조하세요.
                        <br/>
                        {/*향후 VFUN에서 발송하는 홍보성 이메일 수신을 원하지 않으시면&nbsp;
                         <a href="https://member.valofe.com/mypage/mypage_user_info.asp"
                            target="_blank" className="em_text_footer"
                            style={{display:"inline",textDecoration:"underline",margin:"0",padding:"0",border:"none",textAlign:"left",lineHeight:"1.6",fontWeight:"normal",color:"#ababb5",fontSize:"11px"}}>
                             여기</a>&nbsp;를 클릭하세요.*/}
                    </td>
                </tr>
                <tr>
                    <td height="18"
                        style={{borderCollapse:"collapse",backgroundColor:"#54545e",borderBottom:"1px solid #4c4c57"}}/>
                </tr>
                <tr>
                    <td height="18"
                        style={{borderCollapse:"collapse",backgroundColor:"#54545e"}}/>
                </tr>
                <tr>
                    <td className="em_text_footer"
                        style={{width:"100%",borderCollapse:"collapse",margin:"0",padding:"0 40px",border:"none",textAlign:"center",lineHeight:"1.2",fontWeight:"normal",color:"#87878f",fontSize:"11px"}}>
                        ⓒ <span className="year-of-copyrights"></span> VALOFE Co., Ltd. All rights reserved.
                    </td>
                </tr>
                <tr>
                    <td height="28"
                        style={{borderCollapse:"collapse"}}>&nbsp;</td>
                </tr>
                <tr>
                    <td className="em_text_footer"
                        style={{width:"100%",height:"40px",margin:"0",padding:"0",borderCollapse:"collapse",border:"none",textAlign:"center",lineHeight:"1.2",fontWeight:"normal",color:"#fff"}}>
                        <a href="http://www.valofe.com/" target="_blank"
                           style={{display:"block",margin:"0",padding:"0",background:"none",border:"none",outline:"none",textDecoration:"none"}}>
                            <img
                                src="https://file.valofe.com/Valofe_file/web/email/images/common/logo-new-type-transp.png"
                                width="120" height="40"
                                alt="VALOFE footer logo"/>
                        </a>

                    </td>
                </tr>
                <tr>
                    <td height="22" style={{borderCollapse:"collapse"}}/>
                </tr>
                </tbody>
            </table>



        );
    }
}

export default FooterEN;