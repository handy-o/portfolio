import React, { Component,Fragment } from 'react';

class Pharagraph2 extends Component {
    setNewline = (banner_desc) => {
        return <span>
            {
                banner_desc.split("\n").map((txt,index) => (
                    <Fragment key={index}>
                        {/*{txt}*/}
                        <span dangerouslySetInnerHTML={{ __html: txt}}/>
                        <br />
                    </Fragment>
                ))
            }
        </span>;
    };
    render() {
        //console.log(this.props.pharag2_data, 'this.props.pharag2_data')
        return (
            <tr>
                <td align="center" valign="top" style={{ padding: "0", margin: "0" }}>

            <table className="sub-section" style={{ tableLayout: "fixed", width: "700px", backgroundColor: `${this.props.themeStyle.backgroundColor}` }} width="700" border="0" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <td style={{ width:"320px",height: "20px" }}></td>
                        <td style={{ width:"320px",height: "20px" }}></td>
                        <td style={{ width:"20px",height: "20px" }}></td>
                    </tr>
                    {/* 서브 배너 */}
                    <tr>
                        {
                            //this.props.bannerlist.map((item, index) => {
                            this.props.pharag2_data.map((item, index) => {
                                return (
                                    <td key={index} style={{ width: "320px", paddingLeft: "20px", borderCollapse: "collapse", border: "none", textAlign: "left" }}>
                                        <a href={item.link} target="_blank">
                                            <img src={item.url}
                                                alt={item.alt} />
                                        </a>
                                    </td>
                                )
                            })
                        }
                        <td style={{ width: "20px"}}/>
                    </tr>

                    <tr>
                        <td colSpan="3" style={{ height: "20px" }} />
                    </tr>
                </thead>

                <tbody>
                    {/* 서브 타이틀 */}
                    <tr>
                        {
                            //this.props.bannerlist.map((item, index) => {
                            this.props.pharag2_data.map((item, index) => {
                                return (
                                    <td key={index} style={{ width: "320px", paddingLeft: "40px", borderCollapse: "collapse", border: "none", textAlign: "left", verticalAlign: "top" }}>
                                        <span style={{ whiteSpace: "pre-line", fontWeight: "bold", fontSize: "17px", letterSpacing: "-0.2px", fontFamily: `${this.props.themeStyle.fontFamily}`, color: `${item.title_color}` }}>
                                            {item.title}
                                        </span>
                                    </td>
                                )
                            })
                        }
                        <td style={{ width: "20px"}}/>
                    </tr>
                    {/*<tr>
                        <td colSpan="3" style={{ height: "20px" }} />
                    </tr>*/}
                    <tr>
                        {
                            //this.props.bannerlist.map((item, index) => {
                            this.props.pharag2_data.map((item, index) => {
                                return (
                                    <td key={index} style={{ width: "320px", paddingLeft: "40px", borderCollapse: "collapse", border: "none", textAlign: "left", lineHeight: "1.7", verticalAlign: "top" }}>
                                        <p style={{ whiteSpace: "pre-line", fontWeight: "normal", letterSpacing: "-0.2px", fontFamily: `${this.props.themeStyle.fontFamily}`, fontSize: "13px", color: `${item.descColor}` }}>
                                            {
                                                this.setNewline(item.desc)
                                            }
                                        </p>
                                    </td>
                                )
                            })
                        }
                        <td style={{ width: "20px"}}/>
                    </tr>
                    <tr>
                        <td colSpan="3" style={{ height: "20px" }} />
                    </tr>
                    <tr>
                        {
                            //this.props.bannerlist.map((item, index) => {
                            this.props.pharag2_data.map((item, index) => {
                                return (
                                    <td key={index} style={{ width: "320px", paddingLeft: "40px", borderCollapse: "collapse", border: "none", textAlign: "left" }}>
                                        <a href={item.link} target="_blank" title={item.title}
                                            style={{ display: "inline-block", padding: "8px 24px", color: "#fff", fontFamily: "Raleway, sans-serif", fontWeight: "bold", fontSize:"13px", textTransform: "uppercase", background: `${item.btnColor}`, textDecoration: "none" }}>
                                            {item.btnText} {/* detail blessU-return-cn 부터 적용 */}
                                        </a>
                                    </td>
                                )
                            })
                        }
                        {/* <td style={{ width: "320px", paddingLeft: "40px", borderCollapse: "collapse", border: "none", textAlign: "left" }}>
                            <a href={this.props.banner1_link} target="_blank" title={this.props.banner1_title}
                                style={{ display: "inline-block", padding: "8px 24px", color: "#fff", fontFamily: "Raleway, sans-serif", fontWeight: "bold", textTransform: "uppercase", background: "#54545e", textDecoration: "none" }}>
                                Detail
                            </a>
                        </td>
                        <td width="20" style={{ width: "20px" }} />
                        <td style={{ width: "320px", paddingLeft: "40px", borderCollapse: "collapse", border: "none", textAlign: "left" }}>
                            <a href={this.props.banner2_link} target="_blank" title={this.props.banner2_title}
                                style={{ display: "inline-block", padding: "8px 24px", color: "#fff", fontFamily: "Raleway, sans-serif", fontWeight: "bold", textTransform: "uppercase", background: "#54545e", textDecoration: "none" }}>
                                Detail
                            </a>
                        </td> */}
                        <td style={{ width: "20px"}}/>
                    </tr>
                    <tr>
                        <td colSpan="3" style={{ height: "20px" }} />
                    </tr>
                    <tr>
                        <td colSpan="3" height="10" style={{ borderCollapse: "collapse", borderBottom: "1px solid", borderBottomColor: `${this.props.themeStyle.borderColor}` }} />
                    </tr>
                </tbody>
            </table>

                </td>
            </tr>
        );
    }
}

export default Pharagraph2;