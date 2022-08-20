import React, {Component} from 'react';

class Connected extends Component {
    render() {
        return (
            <>
            {
                this.props.connected_data.map((item, index) => {
                    return (
                    <td key={index} height="64" valign="middle" align="center"
                        style={{textAlign:"right", verticalAlign:"middle", width:"56px"}}>
                        <a href={item.url}
                           target="_blank" title={this.props.gameInfo.officialName + " " +item.category}
                           style={{display:"inline-block",width:"36px",height:"36px",color:"#fff", border:"none",outline:"none",textDecoration:"none"}}>
                            <img width="36" height="36"
                                 src={"https://file.valofe.com/Valofe_file/web/email/images/common/fa-"+ item.category +".png"}
                                 alt={item.category}/>
                        </a>
                    </td>
                    )
                })
            }
            </>
        );
    }
}

export default Connected;