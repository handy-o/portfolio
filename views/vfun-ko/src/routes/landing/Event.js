import React from 'react'

import MobileHeader from '../../components/common/MobileHeader'
import CombineMenu from '../../components/combine_menu/CombineMenu'
import Footer from '../../components/combine_menu/Footer'
import EventContents from '../../components/landing/blackfriday/EventContents'

import setMetaTags from '../../components/Meta'



class Event extends React.Component {
    componentDidMount() {
        //document.title = HTML_TITLE_PREFIX + ' - Home'
        setMetaTags({
            title: "VFUN 블랙프라이데이 기념 이벤트",
            description: "룰렛이벤트! 출석체크하고 친구 초대&추천해서 룰렛돌리자~! 2021.12.02~2021.12.22",
            keywords: "VFUN-kr, VALOFE, VFUN, 블랙프라이데이 이벤트, 이벤트, VFUN 이벤트, 룰렛, 룰렛 이벤트, 룰렛 게임, 룰렛 티켓, 퍼니 이모티콘, 퍼니 이모티콘 이벤트, 매일 룰렛 돌리고 보너스 코인 받자!, 출석체크, 보유 티켓, 룰렛 당첨 내역 확인, 10% 할인 쿠폰, 꽝, 5만 보너스 코인, 친구 초대, 친구 추천, 추천코드, 친구 초대 달성 보상, 친구 추천 달성 보상, 이벤트 참여 방법, 신규 가입 달성 보상, 퍼니 이모티콘 6종",
            imageURL_fb: "https://file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/fb-1200x630-min.jpg",
            imageURL_tw: "https://file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/tw-520x254-min.jpg",
        })
    }
    render() {
        return (
            <div>
                <MobileHeader current_menu={'event'} />
                <CombineMenu />
                <div id="content" className="clearfix">

                    <EventContents />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Event
