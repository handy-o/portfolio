import React, {Component} from 'react';
//import styled from "styled-components";


const styledTd = {
    boxSizing:"border-box",
    width:"350px",
    padding:"5px 30px",
    borderCollapse:"collapse",
    border:"none",
    textAlign:"left",
    lineHeight:"1.7",
    fontWeight:"normal",
    textSizeAdjust:"100%",
    fontSize:"13px",
    verticalAlign:"top",
    wordBreak:"break-all"
}
const styledLink = {
    color: "#292929",
    fontSize: "13px",
    fontWeight: "bold",
    textDecoration: "none"
}
const styledImg = {
    borderRadius:"50%",
    verticalAlign:"middle",
    marginRight:"5px"
}

const styledSpan = {
    verticalAlign: "middle",
    color: "#292929",
    fontSize: "13px",
    fontWeight: "500",
    textDecoration: "500",
    fontFamily: "'Raleway', Arial, 'Tahoma', sans-serif"
}
class GameList extends Component {
    render() {
        let i=0;
        let html_tr = [];
        let next = 0;
        console.log(this.props.vfunGames_data)

        for(i = 0; i < this.props.vfunGames_data.length-1; i=i+2) {
            html_tr.push(
                <tr>
                    <td style={styledTd}>
                        <a style={styledLink} href={this.props.vfunGames_data[i].link} target="_blank">
                            <img style={styledImg} src={this.props.vfunGames_data[i].imgURL} alt={this.props.vfunGames_data[i].gameName}/>
                            <span style={styledSpan}>{this.props.vfunGames_data[i].gameName}</span>
                        </a>
                    </td>
                    <td style={styledTd}>
                        <a style={styledLink}  href={this.props.vfunGames_data[i+1].link}  target="_blank">
                            <img style={styledImg} src={this.props.vfunGames_data[i+1].imgURL} alt={this.props.vfunGames_data[i+1].gameName}/>
                            <span style={styledSpan}>{this.props.vfunGames_data[i+1].gameName}</span>
                        </a>
                    </td>
                </tr>

            )
            // html_tr.push(i + '|')
            // html_tr.push(i+1 + '||')
            // html_tr.push(this.props.vfunGames_data[i].gameName)
            // html_tr.push(this.props.vfunGames_data[i+1].gameName + '|')
        }

        return <>{html_tr}</>
    }
}

export default GameList;