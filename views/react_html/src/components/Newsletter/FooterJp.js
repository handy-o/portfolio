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
                        style={{borderCollapse:"collapse",margin:"0",padding:"0 0.5rem",border:"none",textAlign:"center",lineHeight:"1.6",fontWeight:"normal",color:"#87878f",fontSize:"11px",wordBreak:"normal",fontFamily :"'Raleway', 'ヒラギノ角ゴ ProN' , 'Hiragino Kaku Gothic ProN' , '游ゴシック' , '游ゴシック体' , YuGothic , 'Yu Gothic' , 'メイリオ' , Meiryo , 'ＭＳ ゴシック' , 'MS Gothic' , HiraKakuProN-W3 , 'TakaoExゴシック' , TakaoExGothic , 'MotoyaLCedar' , 'Droid Sans Japanese' , sans-serif"}}>
                        VFUNはユーザーの皆様のプライバシーを尊重します。<br/>詳細は弊社の
                        <a href="http://vfun.stella.dev.valofe.com/customer/privacy?service_code=vfun&amp;language=jp"
                           target="_blank" className="em_text_footer"
                           style={{display:"inline",textDecoration:"underline",margin:"0",padding:"0",border:"none",textAlign:"left",lineHeight:"1.6",fontWeight:"normal",color:"#ababb5",fontSize:"11px",wordBreak:"break-all",fontFamily :" 'Raleway', 'ヒラギノ角ゴ ProN' , 'Hiragino Kaku Gothic ProN' , '游ゴシック' , '游ゴシック体' , YuGothic , 'Yu Gothic' , 'メイリオ' , Meiryo , 'ＭＳ ゴシック' , 'MS Gothic' , HiraKakuProN-W3 , 'TakaoExゴシック' , TakaoExGothic , 'MotoyaLCedar' , 'Droid Sans Japanese' , sans-serif;"}}>
                            個人情報取扱方針 </a>
                        をご参照ください。
                        <br/>
                        今後VFUNから送信する広告性メールの配信を希望されない方は
                        <a href="http://vfun.stella.dev.valofe.com/membership/myinfo" target="_blank"
                           className="em_text_footer"
                           style={{display:"inline",textDecoration:"underline",margin:"0",padding:"0",border:"none",textAlign:"left",lineHeight:"1.6",fontWeight: "normal",color:"#ababb5",fontSize:"11px",wordBreak:"break-all",fontFamily : " 'Raleway', 'ヒラギノ角ゴ ProN' , 'Hiragino Kaku Gothic ProN' , '游ゴシック' , '游ゴシック体' , YuGothic , 'Yu Gothic' , 'メイリオ' , Meiryo , 'ＭＳ ゴシック' , 'MS Gothic' , HiraKakuProN-W3 , 'TakaoExゴシック' , TakaoExGothic , 'MotoyaLCedar' , 'Droid Sans Japanese' , sans-serif;"}}>
                            こちら </a>
                        をクリックしてください。
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