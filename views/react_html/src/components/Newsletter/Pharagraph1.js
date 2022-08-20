import React, {Component} from 'react';

class Pharagraph1 extends Component {
    render() {
        return (
            <>
            {
                this.props.pharag1_data.map((item, index) => {
                    return (

            <tr key={index}>
                <td align="center" style={{ padding: "0", margin: "0" }}>
                    <table className="main-section" style={{width:"700px", backgroundColor: `${this.props.themeStyle.backgroundColor}`}} width="700" cellPadding="0" cellSpacing="0">
                        <tbody>
                        <tr>
                            <td height="25" align="center" valign="top" width="700" className="em_main_table" style={{width:"700px"}}/>
                        </tr>
                        <tr>
                            <td align="center">
                                <a href={item.link} target="_blank">
                                    <img src={item.imgURL} alt={item.title} style={{width: "660px"}}/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td height="25" align="center" valign="top" width="700" className="em_main_table" style={{width:"700px"}}/>
                        </tr>
                        <tr>
                            <td key={index} align="center" style={{padding:"0 20px"}}>
                                <span style={ {whiteSpace: "pre-line", color : `${item.titleColor}`, fontFamily:`${this.props.themeStyle.fontFamily}`, fontWeight: "bold", fontSize: "22px" }}
                                      dangerouslySetInnerHTML={{ __html:  item.title }}>
                                    {/*{item.title}*/}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td height="25" align="center" valign="top" width="700" className="em_main_table" style={{width:"700px"}}/>
                        </tr>
                        <tr>
                            <td style={{width:"660px",padding:"0 20px",borderCollapse:"collapse",border:"none",textAlign:"center",verticalAlign:"middle",lineHeight: "1.7",
                                 fontFamily:`${this.props.themeStyle.fontFamily}`,fontWeight: "500", fontSize:"15px", color : `${item.descColor}`}}

                                dangerouslySetInnerHTML={{ __html:  item.desc }}>

                            </td>
                        </tr>
                        <tr>
                            <td height="25" align="center" valign="top" width="700" className="em_main_table" style={{width:"700px"}}/>
                        </tr>
                        <tr>
                            <td style={{textAlign:"center"}}>
                                <a href={item.link} target="_blank"
                                   title={item.btnText}
                                   style={{display:"inline-block", padding:"12px 30px", minWidth: "120px", color:"#fff",textDecoration: "none", fontFamily:`${this.props.themeStyle.fontFamily}`,fontWeight: "bold", fontSize:"16px",
                                      backgroundColor:`${item.btnBgColor}` ,backgroundImage:`${item.btnBgColorGrd}` }} >
                                    {item.btnText}
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td height="40" style={{borderCollapse:"collapse"}}/>
                        </tr>
                        <tr>
                            <td height="25" style={{borderCollapse: "collapse"}}/>
                        </tr>
                        <tr>
                            <td height="1" style={{borderCollapse:"collapse",borderTop:"1px solid", borderTopColor: `${this.props.themeStyle.borderColor}`}}/>
                        </tr>

                        </tbody>
                    </table>


                </td>
            </tr>
                    )
                })
            }
            </>
        );
    }
}

export default Pharagraph1;