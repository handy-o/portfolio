import React, {Component} from 'react';

class GameList extends Component {
    render() {
        return (
            <>
                {
                    this.props.vfunGames_data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td style={{boxSizing:"border-box", width:"350px", padding:"5px 30px", borderCollapse:"collapse", boorder:"none", textAlign:"left", lineHeight:"1.7", fontWeight:"normal", textSizeAdjust:"100%", fontSize:"13px", verticalAlign:"top", wordBreak:"break-all"}}>
                                    <a href={item.link1} style={{color:"#292929",fontSize:"13px",fontWeight:"bold",textDecoration:"none"}} target="_blank">
                                        <img src={item.imgURL1}
                                             style={{borderRadius:"50%",verticalAlign:"middle",marginRight:"5px"}} alt={item.gameName1}/>
                                        <span style={{verticalAlign:"middle",color:"#292929",fontSize:"13px",fontWeight:"500",textDecoration:"500",fontFamily:"'Raleway', Arial, 'Tahoma', sans-serif"}}>{item.gameName1}</span>
                                    </a>
                                </td>
                                <td style={{boxSizing:"border-box", width:"350px", padding:"5px 30px", borderCollapse:"collapse", boorder:"none", textAlign:"left", lineHeight:"1.7", fontWeight:"normal", textSizeAdjust:"100%", fontSize:"13px", verticalAlign:"top", wordBreak:"break-all"}}>
                                    <a href={item.link2} style={{color:"#292929",fontSize:"13px",fontWeight:"bold",textDecoration:"none"}} target="_blank">
                                        <img src={item.imgURL2}
                                             style={{borderRadius:"50%",verticalAlign:"middle",marginRight:"5px"}} alt={item.gameName2}/>
                                        <span style={{verticalAlign:"middle",color:"#292929",fontSize:"13px",fontWeight:"500",textDecoration:"500",fontFamily:"'Raleway', Arial, 'Tahoma', sans-serif"}}>{item.gameName2}</span>
                                    </a>
                                </td>
                            </tr>
                        )
                    })
                }
            </>

        );
    }
}

export default GameList;