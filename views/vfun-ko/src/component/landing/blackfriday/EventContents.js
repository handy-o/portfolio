import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import InfoContext from '../../../contexts/InfoContext'
import Roullet from './Roullet' // 2021 블프 랜딩 룰렛 js
import SwiperCore, { EffectFlip, Parallax, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import './BlackfridayEvents.scoped.scss'
import './RoulletCanvas.scoped.scss'
import 'swiper/components/effect-flip/effect-flip.scss'
import { CopyToClipboard } from 'react-copy-to-clipboard'

class EventContents extends React.Component {
    static contextType = InfoContext
    constructor(props, context) {
        super(props)
        SwiperCore.use([EffectFlip, Parallax, Autoplay])

        this.state = {
            isLoading: true,
            ssoinfo:
                context.state.ssoinfo === false
                    ? 'none'
                    : context.state.ssoinfo,
            userid:
                context.state.user_id === false
                    ? 'none'
                    : context.state.user_id,
            jumin: context.state.jumin === false ? 'none' : context.state.jumin,
            isLogin: context.state.is_login,
            isInviteTab1: true,
            isInviteTab2: false,
            isOpenEventPop: false,
            isTicketOwnPop: false,
            isRouletteGetPop: false,
            isInviteAchieve: false,
            isAttendPopOk: false, // 출석체크
            isGetRewards: false, // 보상받기
            isRouletteStartPop: false, // 룰렛 시작
            btnAttendActive: true,
            isNavOn: false,
            ticket_count: 0,
            AttendMsgTitle: '',
            AttendMsgDesc: '',
            rullet_history: [],
            invite_code: '',
            friend_invite_code: '',
            friend_recommand_list: [],
            friend_recommand_count: 0,
            friend_invite_reward: [false, false, false, false],
            winner_list: [],
            ticket_history: [],
            //blackfriday_data: jsonData.blackfridayData,

            //easingElastic : Easing.elastic(4),
        }
    }
    inputFriendInviteCode(e) {
        this.setState({ friend_invite_code: e.target.value })
    }
    handlePop(e) {
        if (this.state.isLogin) {
            if (
                this.state.friend_invite_code.replace(/(\s*)/g, '').length > 0
            ) {
                let data = { friend_invite_code: this.state.friend_invite_code }
                axios
                    .post(
                        process.env.REACT_APP_VFUN_API_DNS +
                            '/v1/VfunEvent/putFriendInviteCode',
                        JSON.stringify(data),
                        {
                            headers: {
                                'Content-Type':
                                    'application/json;charset=UTF-8',
                                ssoinfo: this.state.ssoinfo,
                                userid: this.state.userid,
                                jumin: this.state.jumin,
                            },
                        }
                    )
                    .then(res => {
                        if (parseInt(res.data.result_code) === 1) {
                            alert('친구를 추천하였습니다.')
                        } else if (parseInt(res.data.result_code) === -95) {
                            alert(
                                '이벤트 기간 내에 가입한 신규 회원만 참여할 수 있습니다.'
                            )
                        } else if (parseInt(res.data.result_code) === -94) {
                            alert('잘못된 추천코드 입니다.')
                        } else if (parseInt(res.data.result_code) === -93) {
                            alert('자기 자신을 추천할 수 없습니다.')
                        } else if (parseInt(res.data.result_code) === -92) {
                            alert('이미 친구를 추천하셨습니다.')
                        }
                    })
                    .catch(function(error) {
                        if (error.response.status >= 500) {
                            alert(
                                '시스템에서 오류가 발생했습니다.\n잠시후에 다시 시도해주세요.'
                            )
                        }
                    })
            } else {
                alert('친구의 초대코드를 입력해주세요.')
                this.setState({ friend_invite_code: '' })
            }
        } else {
            alert('로그인 후 참여 가능합니다.')
        }

        //this.setState({ isOpenEventPop: !this.state.isOpenEventPop })
    }
    handleTicketOwnPop(e) {
        if (this.state.isLogin) {
            console.log(e.target.dataset.status)
            if (e.target.dataset.status === 'open') {
                let data = { idx: 1 }
                axios
                    .post(
                        process.env.REACT_APP_VFUN_API_DNS +
                            '/v1/VfunEvent/getTicketHistory',
                        JSON.stringify(data),
                        {
                            headers: {
                                'Content-Type':
                                    'application/json;charset=UTF-8',
                                ssoinfo: this.state.ssoinfo,
                                userid: this.state.userid,
                                jumin: this.state.jumin,
                            },
                        }
                    )
                    .then(res => {
                        if (parseInt(res.data.result_code) === 1) {
                            this.setState({
                                isTicketOwnPop: !this.state.isTicketOwnPop,
                                ticket_history: res.data.ticket_history,
                            })
                            //console.log(res)
                        } else if (parseInt(res.data.result_code) === -93) {
                            alert('티켓 사용 내역이 없습니다.')
                        }
                    })
                    .catch(function(error) {
                        if (error.response.status >= 500) {
                            alert(
                                '시스템에서 오류가 발생했습니다.\n잠시후에 다시 시도해주세요.'
                            )
                        }
                    })
            } else {
                this.setState({
                    isTicketOwnPop: !this.state.isTicketOwnPop,
                })
            }
        } else {
            alert('로그인 후 참여 가능합니다.')
        }
        //this.setState({ isTicketOwnPop: !this.state.isTicketOwnPop })
    }
    handleRouletteGetPop(e) {
        if (this.state.isLogin) {
            if (e.target.dataset.status === 'open') {
                let data = { idx: 1 }
                axios
                    .post(
                        process.env.REACT_APP_VFUN_API_DNS +
                            '/v1/VfunEvent/getRulletHistory',
                        JSON.stringify(data),
                        {
                            headers: {
                                'Content-Type':
                                    'application/json;charset=UTF-8',
                                ssoinfo: this.state.ssoinfo,
                                userid: this.state.userid,
                                jumin: this.state.jumin,
                            },
                        }
                    )
                    .then(res => {
                        if (parseInt(res.data.result_code) === 1) {
                            this.setState({
                                isRouletteGetPop: !this.state.isRouletteGetPop,
                                rullet_history: res.data.rullet_history,
                            })
                            //console.log(res)
                        } else if (parseInt(res.data.result_code) === -95) {
                            alert('로그인 후 참여 가능합니다.')
                        }
                    })
                    .catch(function(error) {
                        if (error.response.status >= 500) {
                            alert(
                                '시스템에서 오류가 발생했습니다.\n잠시후에 다시 시도해주세요.'
                            )
                        }
                    })
            } else {
                this.setState({
                    isRouletteGetPop: !this.state.isRouletteGetPop,
                })
            }
        } else {
            alert('로그인 후 참여 가능합니다.')
        }

        //getRulletHistory
        //this.setState({ isRouletteGetPop: !this.state.isRouletteGetPop })
    }

    setFriendRecommandReward() {
        if (this.state.isLogin) {
            let data = { idx: 1 }
            axios
                .post(
                    process.env.REACT_APP_VFUN_API_DNS +
                        '/v1/VfunEvent/setFriendRecommandReward',
                    JSON.stringify(data),
                    {
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            ssoinfo: this.state.ssoinfo,
                            userid: this.state.userid,
                            jumin: this.state.jumin,
                        },
                    }
                )
                .then(res => {
                    if (parseInt(res.data.result_code) === 1) {
                        alert('티켓이 정상 지급 되었습니다.')
                        this.setState({
                            ticket_count: res.data.ticket_count,
                        })
                    } else if (res.data.result_code === -94) {
                        alert('친구를 추천해주세요.')
                    } else if (res.data.result_code === -93) {
                        alert(
                            '이미 ' +
                                res.data.recommand_user_id +
                                '님 을(를) 추천하셨습니다.'
                        )
                    } else if (res.data.result_code === -95) {
                        alert('로그인 후 참여 가능합니다.')
                    }
                })
                .catch(function(error) {
                    if (error.response.status >= 500) {
                        alert(
                            '시스템에서 오류가 발생했습니다.\n잠시후에 다시 시도해주세요.'
                        )
                    }
                })
        } else {
            alert('로그인 후 참여 가능합니다.')
        }
    }

    getAchieveResult() {
        let data = { idx: 1 }
        axios
            .post(
                process.env.REACT_APP_VFUN_API_DNS +
                    '/v1/VfunEvent/getRecommandList',
                JSON.stringify(data),
                {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        ssoinfo: this.state.ssoinfo,
                        userid: this.state.userid,
                        jumin: this.state.jumin,
                    },
                }
            )
            .then(res => {
                if (parseInt(res.data.result_code) === 1) {
                    let friend_invite_reward = [
                        res.data.reward_result[0],
                        res.data.reward_result[1],
                        res.data.reward_result[2],
                        res.data.reward_result[3],
                    ]

                    this.setState({
                        friend_recommand_list: res.data.friend_recommand_list,
                        friend_recommand_count:
                            res.data.friend_recommand_list.length,
                        friend_invite_reward: friend_invite_reward,
                    })
                } else {
                    this.setState({
                        friend_recommand_count: 0,
                    })
                }
            })
            .catch(function(error) {
                if (error.response.status >= 500) {
                    alert(
                        '시스템에서 오류가 발생했습니다.\n잠시후에 다시 시도해주세요.'
                    )
                }
            })
    }

    handleInviteAchievePop(e) {
        if (this.state.isLogin) {
            if (e.target.dataset.status === 'open') {
                let data = { idx: 1 }
                axios
                    .post(
                        process.env.REACT_APP_VFUN_API_DNS +
                            '/v1/VfunEvent/getRecommandList',
                        JSON.stringify(data),
                        {
                            headers: {
                                'Content-Type':
                                    'application/json;charset=UTF-8',
                                ssoinfo: this.state.ssoinfo,
                                userid: this.state.userid,
                                jumin: this.state.jumin,
                            },
                        }
                    )
                    .then(res => {
                        if (parseInt(res.data.result_code) === 1) {
                            let friend_invite_reward = [
                                res.data.reward_result[0],
                                res.data.reward_result[1],
                                res.data.reward_result[2],
                                res.data.reward_result[3],
                            ]

                            let isInviteAchieve = this.state.isInviteAchieve
                            if (e.target.dataset.command === 'show') {
                                isInviteAchieve = !isInviteAchieve
                            }
                            this.setState({
                                friend_recommand_list:
                                    res.data.friend_recommand_list,
                                friend_recommand_count:
                                    res.data.friend_recommand_list.length,
                                friend_invite_reward: friend_invite_reward,
                                isInviteAchieve: isInviteAchieve,
                            })
                        } else if (parseInt(res.data.result_code) === -95) {
                            alert('로그인 후 참여 가능합니다.')
                        } else {
                            this.setState({
                                friend_recommand_count: 0,
                                isInviteAchieve: !this.state.isInviteAchieve,
                            })
                        }
                    })
                    .catch(function(error) {
                        if (error.response.status >= 500) {
                            alert(
                                '시스템에서 오류가 발생했습니다.\n잠시후에 다시 시도해주세요.'
                            )
                        }
                    })
            } else {
                this.setState({
                    isInviteAchieve: !this.state.isInviteAchieve,
                })
            }
        } else {
            alert('로그인 후 참여 가능합니다.')
        }
    }

    /* 출석체크 버튼 클릭 시 */
    handleAttendPopOk(e) {
        if (this.state.isLogin) {
            if (e.target.dataset.status === 'open') {
                let data = { idx: 1 }
                axios
                    .post(
                        process.env.REACT_APP_VFUN_API_DNS +
                            '/v1/VfunEvent/setAttendanceInfo',
                        JSON.stringify(data),
                        {
                            headers: {
                                'Content-Type':
                                    'application/json;charset=UTF-8',
                                ssoinfo: this.state.ssoinfo,
                                userid: this.state.userid,
                                jumin: this.state.jumin,
                            },
                        }
                    )
                    .then(res => {
                        if (parseInt(res.data.result_code) === 1) {
                            if (res.data.attandance_info === false) {
                                this.setState({
                                    btnAttendActive: false,
                                    isAttendPopOk: !this.state.isAttendPopOk,
                                    AttendMsgTitle:
                                        '출석 보상 룰렛 티켓 지급 완료!',
                                    AttendMsgDesc:
                                        '내일도 출석체크에 참여하세요~',
                                    ticket_count: res.data.ticket_count,
                                })
                            } else {
                                this.setState({
                                    isAttendPopOk: !this.state.isAttendPopOk,
                                    AttendMsgTitle:
                                        '오늘은 이미 출석 체크 하셨습니다!',
                                    AttendMsgDesc:
                                        '내일 출석체크에 참여하세요~',
                                })
                            }
                        } else if (parseInt(res.data.result_code) === -95) {
                            alert('로그인 후 참여 가능합니다.')
                        }
                    })
                    .catch(function(error) {
                        if (error.response.status >= 500) {
                            alert(
                                '시스템에서 오류가 발생했습니다.\n잠시후에 다시 시도해주세요.'
                            )
                        }
                    })
            } else {
                this.setState({
                    isAttendPopOk: !this.state.isAttendPopOk,
                })
            }
        } else {
            alert('로그인 후 참여 가능합니다.')
        }

        //this.setState({ isAttendPopOk: !this.state.isAttendPopOk })
        //this.setState({ btnAttendActive: false }) // 출석체크 완료 시 id="aleadyGot" 추가
    } // 다시 클릭하면 텍스트가 변경되어야하는데...

    // 보상 받기
    handleGetRewards(e) {
        if (e.target.dataset.status === 'open') {
            let data = { reward_type: e.target.dataset.reward }
            axios
                .post(
                    process.env.REACT_APP_VFUN_API_DNS +
                        '/v1/VfunEvent/setFriendInviteReward',
                    JSON.stringify(data),
                    {
                        headers: {
                            'Content-Type': 'application/json;charset=UTF-8',
                            ssoinfo: this.state.ssoinfo,
                            userid: this.state.userid,
                            jumin: this.state.jumin,
                        },
                    }
                )
                .then(res => {
                    let friend_invite_reward = this.state.friend_invite_reward
                    if (parseInt(res.data.result_code) === 1) {
                        alert('룰렛티켓이 지급되었습니다.')
                        friend_invite_reward[
                            parseInt(e.target.dataset.reward)
                        ] = false
                    } else {
                        alert('이미 받은 보상입니다.')
                    }
                    console.log(friend_invite_reward)
                    this.setState({
                        ticket_count: res.data.ticket_count,
                        friend_invite_reward: friend_invite_reward,
                    })
                })
                .catch(function(error) {
                    if (error.response.status >= 500) {
                        alert(
                            '시스템에서 오류가 발생했습니다.\n잠시후에 다시 시도해주세요.'
                        )
                    }
                })
        } else {
            this.setState({ isGetRewards: !this.state.isGetRewards })
        }
    }
    // 룰렛 시작
    handleRouletteStartPop() {
        this.setState({ isRouletteStartPop: !this.state.isRouletteStartPop })
    }

    // 친구초대 / 친구추천 탭
    toggleInviteTab(num) {
        if (num === 1) {
            this.setState({ isInviteTab1: true })
            this.setState({ isInviteTab2: false })
        } else {
            this.setState({ isInviteTab2: true })
            this.setState({ isInviteTab1: false })
        }
    }

    // 섹션 이동
    goSec(n) {
        var eventId = document.getElementById('finEvent' + n)
        var topPos = eventId.getBoundingClientRect().top // 스크롤 이동거리 + 현재화면 기준 상대경로 값으로 절대경로를 구하는 방법
        var absoluteTop = window.pageYOffset + topPos // 스크롤 이동거리 + 현재화면 기준 상대경로 값으로 절대경로를 구하는 방법
        window.scrollTo({ top: absoluteTop - 120, behavior: 'smooth' })
    }
    fnNavOn(num) {
        if (num === 1) {
            document.getElementById('contNav1').classList.add('on')
            document.getElementById('contNav2').classList.remove('on')
        } else {
            document.getElementById('contNav2').classList.add('on')
            document.getElementById('contNav1').classList.remove('on')
        }
    }
    getWinnerTop4() {
        let data = { idx: 1 }
        axios
            .post(
                process.env.REACT_APP_VFUN_API_DNS +
                    '/v1/VfunEvent/getWinnerList',
                JSON.stringify(data),
                {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        ssoinfo: this.state.ssoinfo,
                        userid: this.state.userid,
                        jumin: this.state.jumin,
                    },
                }
            )
            .then(res => {
                if (parseInt(res.data.result_code) === 1) {
                    this.setState({ winner_list: res.data.winner_list })
                } else {
                    this.setState({ winner_list: [] })
                }
            })
            .catch(function(error) {
                if (error.response.status >= 500) {
                    alert(
                        '시스템에서 오류가 발생했습니다.\n잠시후에 다시 시도해주세요.'
                    )
                }
            })
    }
    getTicketCount() {
        let data = { idx: 1 }
        axios
            .post(
                process.env.REACT_APP_VFUN_API_DNS +
                    '/v1/VfunEvent/getTicketCount',
                JSON.stringify(data),
                {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        ssoinfo: this.state.ssoinfo,
                        userid: this.state.userid,
                        jumin: this.state.jumin,
                    },
                }
            )
            .then(res => {
                if (parseInt(res.data.result_code) === 1) {
                    let ticket_count = res.data.ticket_count
                    let btnAttendActive = true
                    if (res.data.attandance_info === true) {
                        btnAttendActive = false
                    }
                    this.setState({
                        ticket_count: ticket_count,
                        btnAttendActive: btnAttendActive,
                        invite_code: res.data.invite_code,
                    })
                }
            })
            .catch(function(error) {
                if (error.response.status >= 500) {
                    alert(
                        '시스템에서 오류가 발생했습니다.\n잠시후에 다시 시도해주세요.'
                    )
                }
            })
    }
    componentDidMount() {
        this.getWinnerTop4()
        if (this.state.isLogin) {
            this.getTicketCount()
        }
        this.getAchieveResult()
        this.handleScrollNav()
        window.addEventListener('scroll', this.handleScrollNav.bind(this), true)
    }
    handleScrollNav() {
        let winScrollTop = document.documentElement.scrollTop
        let sec1Height = document.getElementById('sec1').offsetHeight
        let contNav = document.getElementById('contNav')
        //console.log(sec1Height)

        if (winScrollTop >= sec1Height) {
            contNav.classList.add('fixed')
        } else {
            contNav.classList.remove('fixed')
        }

        let event1Top =
            window.pageYOffset +
            document.querySelector('#finEvent1').getBoundingClientRect().top
        let event2Top =
            window.pageYOffset +
            document.querySelector('#finEvent2').getBoundingClientRect().top
        let navUl = document.getElementById('contNav')
        let navLi = navUl.getElementsByTagName('li')
        for (var i = 0; i < navLi.length; i++) {
            navLi[i].classList.remove('on')
        }
        if (winScrollTop >= 0 && winScrollTop < event2Top - 140) {
            navLi[0].classList.add('on')
        } else if (winScrollTop >= event2Top - 140) {
            navLi[1].classList.add('on')
        }
    }
    //handleScroll();

    render() {
        return (
            <>
                <div id="blackFridayEvent2021">
                    <section id="sec1" className="main">
                        <div className="chr-wrap">
                            <img
                                src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/main/chr-main-min.png"
                                alt="character priest"
                                className="priest"
                            />
                            <img
                                src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/main/chr-main-funny-min.png"
                                alt="funny"
                                className="funny"
                            />
                            <img
                                src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/main/deco-balloon-min.png"
                                alt="balloon"
                                className="balloon"
                            />
                        </div>
                        <div className="row-w clearfix">
                            <div className="tit-wrap">
                                <img
                                    src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/main/title-vfun-min.png"
                                    alt="VFUN EVENT"
                                />
                                <br />
                                <div className="neon-box">
                                    {/*<img src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/main/title-main-off.png?23" alt="블랙프라이데이 기념 이벤트 2021.11.26 ~ 2021.12.16 24:00"/>*/}
                                    <div className="title-main ani-neon" />
                                </div>
                                <br />
                                {/*<img src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/main/title-bf-off.png" alt="BLACK FRIDAY" />*/}
                                <div className="title-sub ani-neon" />
                            </div>
                        </div>
                    </section>
                    <div id="contNav">
                        <div className="row-w">
                            <ul className="cont-nav clearfix">
                                {/*<li onClick={e => this.fnNavOn(e)} className="on"> <Link to="#" onClick={n => this.goSec(2)}>EVENT1 <br/><span>게시글 좋아요 받고,<br/>선물도 받자!</span></Link></li>*/}
                                <li
                                    id="contNav1"
                                    onClick={e => this.fnNavOn(1)}
                                >
                                    {' '}
                                    <Link to="#" onClick={n => this.goSec(1)}>
                                        EVENT1 <br />
                                        <span>
                                            룰렛 & 출석체크
                                            <br />
                                            이벤트
                                        </span>
                                    </Link>
                                </li>
                                <li
                                    id="contNav2"
                                    onClick={e => this.fnNavOn(2)}
                                >
                                    {' '}
                                    <Link to="#" onClick={n => this.goSec(2)}>
                                        EVENT2 <br />
                                        <span>
                                            룰렛 & 친구초대
                                            <br />
                                            이벤트
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* section#sec2 */}
                    <section id="sec3" className="roulette">
                        <div className="chr-wrap">
                            <img
                                src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/sec3/chr-l-min.png"
                                alt="컴뱃암즈 리로디드 여자 캐릭터"
                                className="ca_r1"
                            />
                            <img
                                src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/sec3/chr-r-min.png"
                                alt="컴뱃암즈 리로디드 여자 캐릭터2"
                                className="ca_r2"
                            />
                        </div>
                        <div className="row-w clearfix">
                            <div className="common-neon-wrap">
                                <div className="common-tit" id="finEvent1">
                                    <img
                                        src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/sec2/event-1.png"
                                        alt="EVENT 1"
                                        className="common-event-num"
                                    />
                                    <br />
                                    <img
                                        src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/sec3/event-2-tit-min.png"
                                        alt="매일 룰렛 돌리고 보너스 코인 받자!"
                                        className="common-event-tit"
                                    />
                                    <p>
                                        <span className="emphasis"> 2021-12-14 ~ 2021-12-23까지</span><br/>
                                        하루 한번, 출석체크하면 룰렛 티켓 <del>1회</del> <span className="emphasis">3회</span> 발급!
                                    </p>
                                </div>

                                <div className="roulette-wrap">
                                    <div className="winning-board ">
                                        <ul className="winning common-grey sliderContainer">
                                            <Swiper
                                                slidesPerView={1}
                                                effect={'flip'}
                                                autoplay={{
                                                    delay: 3000,
                                                    disableOnInteraction: false,
                                                    pauseOnMouseEnter: true,
                                                }}
                                                Parallax
                                            >
                                                {this.state.winner_list.length >
                                                0 ? (
                                                    this.state.winner_list.map(
                                                        (winner, index) => (
                                                            <SwiperSlide>
                                                                <li
                                                                    className="common-grey-inner"
                                                                    key={index}
                                                                >
                                                                    <span className="time">
                                                                        {winner.created_at.substring(
                                                                            0,
                                                                            10
                                                                        )}{' '}
                                                                        <span className="mb-hidden640">
                                                                            {winner.created_at.substring(
                                                                                11,
                                                                                16
                                                                            )}
                                                                        </span>
                                                                    </span>
                                                                    <span className="reward">
                                                                    {
                                                                        winner.user_id
                                                                    }
                                                                    </span>
                                                                    님이&nbsp;

                                                                    <span className="reward">
                                                                        {parseInt(
                                                                            winner.rullet_type
                                                                        ) === 1
                                                                            ? '5만 보너스코인'
                                                                            : '10% 보너스 쿠폰'}
                                                                    </span>
                                                                    에
                                                                    당첨되었습니다.
                                                                </li>
                                                            </SwiperSlide>
                                                        )
                                                    )
                                                ) : (
                                                    <SwiperSlide>
                                                        <li className="common-grey-inner">
                                                            <span className="time" />
                                                            <span className="reward">
                                                                5만 보너스
                                                                코인의 주인공은
                                                                누가 될까요?
                                                            </span>
                                                        </li>
                                                    </SwiperSlide>
                                                )}
                                            </Swiper>
                                        </ul>
                                    </div>
                                    <div className="btn-wrap clearfix">
                                        <div className="common-btn own-ticket">
                                            <Link
                                                to="#"
                                                onClick={e =>
                                                    this.handleTicketOwnPop(e)
                                                }
                                                data-status="open"
                                            >
                                                보유 티켓
                                                <br className="mb-show768" />
                                                <span
                                                    className="common-grey-inner ticket-num"
                                                    data-status="open"
                                                >
                                                    {this.state.ticket_count}
                                                </span>
                                                개
                                            </Link>
                                        </div>
                                        <div
                                            className="common-btn btn-attend red"
                                            onClick={e =>
                                                this.handleAttendPopOk(e)
                                            }
                                            id={
                                                this.state.btnAttendActive
                                                    ? ''
                                                    : 'alreadyGot'
                                            }
                                        >
                                            <Link to="#" data-status="open">
                                                출석{' '}
                                                <br className="mb-show768" />
                                                체크하기
                                            </Link>
                                        </div>
                                        <div className="common-btn btn-hisotry red">
                                            <Link
                                                to="#"
                                                onClick={e =>
                                                    this.handleRouletteGetPop(e)
                                                }
                                                data-status="open"
                                            >
                                                룰렛 당첨
                                                <br className="mb-show768" />{' '}
                                                내역 확인
                                            </Link>
                                        </div>
                                    </div>
                                    {/* ▼▼▼▼▼▼▼▼▼▼▼▼ 실제 룰렛 영역 ▼▼▼▼▼▼▼▼▼▼▼▼*/}
                                    <div className="roulette">
                                        <Roullet
                                            getTicketCount={e =>
                                                this.getTicketCount()
                                            }
                                            getWinnerTop4={e =>
                                                this.getWinnerTop4()
                                            }
                                        />
                                        <div className="wrap-loading display-none">
                                            <div className="loading-container">
                                                <div className="spinner__container spinner__effect--8">
                                                    <ul className="spinner">
                                                        <li className="spinner__square" />
                                                        <li className="spinner__square" />
                                                        <li className="spinner__square" />
                                                        <li className="spinner__square" />
                                                        <li className="spinner__square" />
                                                        <li className="spinner__square" />
                                                        <li className="spinner__square" />
                                                        <li className="spinner__square" />
                                                        <li className="spinner__square" />
                                                    </ul>
                                                </div>
                                                <span className="loading-txt">
                                                    Loading
                                                </span>
                                            </div>
                                        </div>

                                        {/*<script src="https://file.valofe.com/Valofe_file/web/common/js/jquery-1.12.4.min.js"></script>
                                        <script src="https://file.valofe.com/Valofe_file/web/common/js/jQueryRotate.js"></script>
                                        <script type="text/javascript" src="/static/js/8_roulette/layer-popup.js"></script>
                                        <script type="text/javascript" src="/static/js/8_roulette/awards.js"></script>
                                        <script>

                                        </script>*/}
                                    </div>
                                    {/* ▼▼▼▼▼▼▼▼▼▼▼▼ .// 실제 룰렛 영역 ▼▼▼▼▼▼▼▼▼▼▼▼*/}
                                    {/*<div className="winning common-grey winning-live">
                                        <h4>룰렛 실시간 당첨 현황</h4>
                                        <ul className="">
                                            <li className="common-grey-inner">
                                                <span className="time">11/30 15:00</span>
                                                ㅇㅇㅇㅇㅇㅇㅇ님이 <span className="reward">5만 보너스코인</span>에 당첨되었습니다.
                                            </li>
                                            <li className="common-grey-inner">
                                                <span className="time">11/30 15:00</span>
                                                ㅇㅇㅇㅇㅇㅇㅇ님이 <span className="reward">5만 보너스코인</span>에 당첨되었습니다.
                                            </li>
                                            <li className="common-grey-inner">
                                                <span className="time">11/30 15:00</span>
                                                ㅇㅇㅇㅇㅇㅇㅇ님이 <span className="reward">5만 보너스코인</span>에 당첨되었습니다.
                                            </li>
                                            <li className="common-grey-inner">
                                                <span className="time">11/30 15:00</span>
                                                ㅇㅇㅇㅇㅇㅇㅇ님이 <span className="reward">5만 보너스코인</span>에 당첨되었습니다.
                                            </li>
                                            <li className="common-grey-inner">
                                                <span className="time">11/30 15:00</span>
                                                ㅇㅇㅇㅇㅇㅇㅇ님이 <span className="reward">5만 보너스코인</span>에 당첨되었습니다.
                                            </li>
                                        </ul>
                                    </div>*/}
                                    <div className="common-notice common">
                                        <h4>참고사항!</h4>
                                        <ul>
                                            <li className="emphasis">
                                                룰렛 상품으로 지급된 보너스 쿠폰은 VCoin 충전 시 자동으로 적용됩니다.
                                            </li>
                                            <li className="emphasis">
                                                보너스 쿠폰은 중복 적용되지 않습니다. (구매당 1회 적용됨)
                                            </li>
                                            <li className="emphasis">
                                                보너스 쿠폰 사용내역은 [룰렛
                                                당첨 내역 확인]에서 확인하실 수
                                                있습니다.
                                            </li>
                                            <li className="emphasis">
                                                당첨된 보너스 쿠폰은 이벤트 기간
                                                내에만 자동 적용됩니다.
                                            </li>
                                            <li>
                                                당첨된 보너스 VCoin은 V
                                                Wallet에서 확인하실 수 있습니다.
                                            </li>
                                            <li>
                                                지급된 보너스 VCoin은 지급일로부터 30일동안만 사용하실 수 있습니다.
                                            </li>
                                            <li>
                                                부적절한 방법(해킹, 봇 등 이에
                                                준하는 유사 행위)으로 얻은
                                                룰렛티켓, 보너스 쿠폰, 보너스
                                                VCoin은 발견 즉시 모두 회수
                                                되며, 이러한 조치에 대한 책임은
                                                당 회원에게 있습니다.
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div
                                    className="common-tit friends"
                                    id="finEvent2"
                                >
                                    <img
                                        src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/sec3/event-2.png"
                                        alt="EVENT 2"
                                        className="common-event-num"
                                    />
                                </div>

                                <div className="invite-wrap common-neon-wrap">
                                    <ul className="tab-nav clearfix common-btn">
                                        <li
                                            className={
                                                this.state.isInviteTab1
                                                    ? 'tab1 active'
                                                    : 'tab1'
                                            }
                                            onClick={e =>
                                                this.toggleInviteTab(1)
                                            }
                                        >
                                            <Link to="#">
                                                <small>기존 회원이세요?</small><br />
                                                친구 초대하고&nbsp;
                                                <br className="mb-show578" />
                                                보너스 코인 받자!

                                            </Link>
                                        </li>
                                        <li
                                            className={
                                                this.state.isInviteTab2
                                                    ? 'tab2 active'
                                                    : 'tab2'
                                            }
                                            onClick={e =>
                                                this.toggleInviteTab(2)
                                            }
                                        >
                                            <Link to="#">
                                                <small >신규 회원이세요?</small><br />
                                                친구의 추천코드&nbsp;
                                                <br className="mb-show578" />
                                                입력하기!

                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="tab-wrap">
                                        {this.state.isInviteTab1 ? (
                                            <div
                                                id="tab1"
                                                className="tab-cont active"
                                            >
                                                <div className="common-tit">
                                                    <img
                                                        src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/sec3/tit-invite-min.png"
                                                        alt="친구 초대하고 룰렛 돌리자!"
                                                    />
                                                    <p>
                                                        나의 추천코드를 발급하여
                                                        친구에게 공유해주세요~!
                                                    </p>
                                                    <p>
                                                        공유 받은 친구가 내
                                                        추천코드를 입력한 후 <span className="marked">보상받기</span> 버튼을 클릭하면
                                                        룰렛티켓이 지급됩니다.
                                                    </p>
                                                </div>
                                                <div
                                                    id="codeWrap"
                                                    className="input-wrap"
                                                >
                                                    <input
                                                        type="hidden"
                                                        id="compliment_code"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        id="compliment_id"
                                                    />
                                                    <label
                                                        className="hidden"
                                                        htmlFor="input-code"
                                                    />
                                                    <div className="common-grey">
                                                        <input
                                                            type="text"
                                                            id="compliment-code"
                                                            className="input-code common-grey-inner"
                                                            placeholder="로그인 후 참여 가능합니다."
                                                            readOnly
                                                            value={
                                                                this.state
                                                                    .isLogin
                                                                    ? this.state
                                                                          .invite_code
                                                                    : ''
                                                            }
                                                        />
                                                    </div>
                                                    <div className="btn-wrap">
                                                        {this.state.isLogin ? (
                                                            <CopyToClipboard
                                                                text={
                                                                    this.state
                                                                        .invite_code
                                                                }
                                                                onCopy={e =>
                                                                    alert(
                                                                        '초대코드가 복사되었습니다.'
                                                                    )
                                                                }
                                                            >
                                                                <button
                                                                    type="button"
                                                                    className="common-btn red copy-code"
                                                                >
                                                                    초대코드
                                                                    복사
                                                                </button>
                                                            </CopyToClipboard>
                                                        ) : (
                                                            <button
                                                                type="button"
                                                                className="common-btn red copy-code"
                                                                onClick={e =>
                                                                    alert(
                                                                        '로그인 후 참여 가능합니다.'
                                                                    )
                                                                }
                                                            >
                                                                초대코드 복사
                                                            </button>
                                                        )}
                                                    </div>
                                                    <div className="common-notice">
                                                        <p className="emphasis">
                                                            ※ 본인인증 휴대폰
                                                            번호가 동일한 경우,
                                                            하나의 계정으로
                                                            간주하여 친구 추천이
                                                            불가능합니다.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="common-neon-box invite-achieve-wrap">
                                                    <h3>친구 초대 달성 보상</h3>
                                                    <div className="btn-wrap clearfix btn-invite-achieve">
                                                        <div className="common-btn red">
                                                            <Link
                                                                to="#"
                                                                onClick={e =>
                                                                    this.handleInviteAchievePop(
                                                                        e
                                                                    )
                                                                }
                                                                data-status="open"
                                                                data-command="refresh"
                                                            >
                                                                <img
                                                                    src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/sec3/icon-sync-min.png"
                                                                    alt="sync icon"
                                                                />{' '}
                                                                <span
                                                                    className="mb-hidden640"
                                                                    data-status="open"
                                                                    data-command="refresh"
                                                                >
                                                                    달성 현황
                                                                    새로 고침
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <div className="common-btn red">
                                                            <Link
                                                                to="#"
                                                                onClick={e =>
                                                                    this.handleInviteAchievePop(
                                                                        e
                                                                    )
                                                                }
                                                                data-status="open"
                                                                data-command="show"
                                                            >
                                                                <img
                                                                    src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/sec3/icon-check-min.png"
                                                                    alt="check icon"
                                                                />{' '}
                                                                추천인 명단 확인
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <ol className="invite-achieve-reward clearfix">
                                                        <li>
                                                            <img
                                                                src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/sec3/reward1_2-min.png"
                                                                alt="1명초대 - 룰렛티켓 2장"
                                                            />
                                                            <Link
                                                                to="#"
                                                                className={
                                                                    this.state
                                                                        .friend_invite_reward[0] ===
                                                                    false
                                                                        ? 'btn-ticket'
                                                                        : 'btn-ticket active'
                                                                }
                                                                onClick={e =>
                                                                    this.handleGetRewards(
                                                                        e
                                                                    )
                                                                }
                                                                data-status="open"
                                                                data-reward="0"
                                                            >
                                                                보상받기
                                                            </Link>{' '}
                                                            {/* 보상 획득 후 active 제거 */}
                                                        </li>
                                                        <li>
                                                            <img
                                                                src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/sec3/reward2_3-min.png"
                                                                alt="2명초대 - 룰렛티켓 3장"
                                                            />
                                                            <Link
                                                                to="#"
                                                                className={
                                                                    this.state
                                                                        .friend_invite_reward[1] ===
                                                                    false
                                                                        ? 'btn-ticket'
                                                                        : 'btn-ticket active'
                                                                }
                                                                onClick={e =>
                                                                    this.handleGetRewards(
                                                                        e
                                                                    )
                                                                }
                                                                data-status="open"
                                                                data-reward="1"
                                                            >
                                                                보상받기
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <img
                                                                src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/sec3/reward5_5-min.png"
                                                                alt="5명초대 - 룰렛티켓 5장"
                                                            />
                                                            <Link
                                                                to="#"
                                                                className={
                                                                    this.state
                                                                        .friend_invite_reward[2] ===
                                                                    false
                                                                        ? 'btn-ticket'
                                                                        : 'btn-ticket active'
                                                                }
                                                                onClick={e =>
                                                                    this.handleGetRewards(
                                                                        e
                                                                    )
                                                                }
                                                                data-status="open"
                                                                data-reward="2"
                                                            >
                                                                보상받기
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <img
                                                                src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/sec3/reward10_10-min.png"
                                                                alt="10명초대 - 룰렛티켓 10장"
                                                            />
                                                            <Link
                                                                to="#"
                                                                className={
                                                                    this.state
                                                                        .friend_invite_reward[3] ===
                                                                    false
                                                                        ? 'btn-ticket'
                                                                        : 'btn-ticket active'
                                                                }
                                                                onClick={e =>
                                                                    this.handleGetRewards(
                                                                        e
                                                                    )
                                                                }
                                                                data-status="open"
                                                                data-reward="3"
                                                            >
                                                                보상받기
                                                            </Link>
                                                        </li>
                                                    </ol>
                                                </div>
                                                <div className="common-neon-box how-to-wrap">
                                                    <h3>이벤트 참여방법</h3>
                                                    <ol className="common-how-to how-to-invite clearfix">
                                                        <li>
                                                            <ul>
                                                                <li> </li>
                                                                <li className="clearfix">
                                                                    <span className="step">
                                                                        STEP 1
                                                                    </span>
                                                                    <span className="step-desc">
                                                                        친구에게
                                                                        초대코드를 공유한다.
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <ul>
                                                                <li> </li>
                                                                <li className="clearfix">
                                                                    <span className="step">
                                                                        STEP 2
                                                                    </span>
                                                                    <span className="step-desc">
                                                                        추천코드를
                                                                        받은
                                                                        친구가
                                                                        VALOFE의
                                                                        신규
                                                                        회원이
                                                                        된다.
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <ul>
                                                                <li> </li>
                                                                <li className="clearfix">
                                                                    <span className="step">
                                                                        STEP 3
                                                                    </span>
                                                                    <span className="step-desc">
                                                                        친구가
                                                                        이벤트
                                                                        페이지에
                                                                        방문하여
                                                                        공유
                                                                        받은
                                                                        추천코드를
                                                                        입력한다.
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <ul>
                                                                <li> </li>
                                                                <li className="clearfix">
                                                                    <span className="step">
                                                                        STEP 4
                                                                    </span>
                                                                    <span className="step-desc">
                                                                        1, 2, 3,
                                                                        10명!
                                                                        초대
                                                                        친구가
                                                                        많아질
                                                                        수록 더
                                                                        많은
                                                                        티켓을
                                                                        받는다.
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ol>
                                                </div>
                                                <div className="common-notice">
                                                    <h4>참고사항!</h4>
                                                    <ul>
                                                        <li>
                                                            친구가 내 추천코드를
                                                            입력해야 친구초대
                                                            달성에 카운트되며
                                                            룰렛 티켓을 얻으실
                                                            수 있습니다.
                                                        </li>
                                                        <li>
                                                            추천 받은 친구도
                                                            친구초대 이벤트에
                                                            참여하실 수
                                                            있습니다.
                                                        </li>
                                                        <li>
                                                            보상받기를 누르시면
                                                            룰렛 티켓이 자동
                                                            지급됩니다.
                                                        </li>
                                                        <li>
                                                            지급된 룰렛 티켓은
                                                            이벤트 기간 내에만
                                                            사용하실 수
                                                            있습니다.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        ) : (
                                            /*#tab1*/

                                            <div
                                                id="tab2"
                                                className="tab-cont active"
                                            >
                                                <div className="common-tit">
                                                    <img
                                                        src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/sec3/tit-recommend-min.png"
                                                        alt="친구 추천하고 룰렛 돌리자!"
                                                    />
                                                    <p>
                                                        친구에게 공유받은
                                                        추천코드를
                                                        입력해주세요~!
                                                    </p>
                                                    <p>
                                                        친구의 추천코드를 입력후
                                                         <span className="marked">보상받기</span> 버튼을 클릭하면
                                                        룰렛티켓이 지급됩니다.
                                                    </p>
                                                </div>
                                                <div
                                                    id="codeWrap"
                                                    className="input-wrap"
                                                >
                                                    <input
                                                        type="hidden"
                                                        id="compliment_code"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        id="compliment_id"
                                                    />
                                                    <label
                                                        className="hidden"
                                                        htmlFor="input-code"
                                                    />
                                                    <div className="common-grey">
                                                        <input
                                                            type="text"
                                                            id="input-compliment-code"
                                                            className="input-code common-grey-inner"
                                                            placeholder={
                                                                this.state
                                                                    .isLogin
                                                                    ? '친구의 초대코드를 입력해주세요.'
                                                                    : '로그인 후 참여 가능합니다.'
                                                            }
                                                            value={
                                                                this.state
                                                                    .friend_invite_code
                                                                    ? this.state
                                                                          .friend_invite_code
                                                                    : ''
                                                            }
                                                            onChange={e =>
                                                                this.inputFriendInviteCode(
                                                                    e
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div className="btn-wrap">
                                                        <button
                                                            type="button"
                                                            className="common-btn red issue-code"
                                                            onClick={e =>
                                                                this.handlePop(
                                                                    e
                                                                )
                                                            }
                                                        >
                                                            <span className="mb-hidden480">
                                                                추천
                                                            </span>{' '}
                                                            코드 입력
                                                        </button>
                                                        {/*<button type="button" className="common-btn red copy-code" onClick="">코드 복사</button>*/}
                                                    </div>
                                                    <div className="common-notice">
                                                        <p className="emphasis">
                                                            ※ 본인인증 휴대폰
                                                            번호가 동일한 경우,
                                                            하나의 계정으로
                                                            간주하여 친구 추천이
                                                            불가능합니다.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div
                                                    className="common-neon-box recommend-achieve-wrap"
                                                    onClick={e =>
                                                        this.setFriendRecommandReward()
                                                    }
                                                >
                                                    <h3>친구 추천 달성 보상</h3>
                                                    <img
                                                        src="//file.valofe.com/Valofe_file/web/vfun-ko/images/landing/2021/blackfriday/sec3/reward5-min.png"
                                                        alt="1명초대 - 룰렛티켓 2장"
                                                    />
                                                    <br />
                                                    <Link
                                                        to="#"
                                                        className="btn-ticket active"
                                                    >
                                                        보상받기
                                                    </Link>
                                                </div>
                                                <div className="common-neon-box how-to-wrap">
                                                    <h3>이벤트 참여방법</h3>
                                                    <ol className="common-how-to how-to-rec clearfix">
                                                        <li>
                                                            <ul>
                                                                <li> </li>
                                                                <li>
                                                                    <span className="step">
                                                                        STEP 1
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    밸로프
                                                                    회원인
                                                                    친구에게
                                                                    추천코드를
                                                                    받는다.
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <ul>
                                                                <li> </li>
                                                                <li>
                                                                    <span className="step">
                                                                        STEP 2
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    회원가입 &gt;
                                                                    로그인을
                                                                    한다.
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <ul>
                                                                <li> </li>
                                                                <li>
                                                                    <span className="step">
                                                                        STEP 3
                                                                    </span>
                                                                </li>
                                                                <li>
                                                                    이벤트
                                                                    페이지로
                                                                    돌아와서
                                                                    추천 코드를
                                                                    입력하면
                                                                    완료!
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ol>
                                                </div>
                                                <div className="common-notice">
                                                    <h4>참고사항!</h4>
                                                    <ul>
                                                        <li>친구추천은 2021년 12월 01일부터 가입한 회원만 참여 가능합니다.</li>
                                                        <li>
                                                            추천코드 입력은 한
                                                            아이디당 한 번만
                                                            가능합니다.
                                                        </li>
                                                        <li>
                                                            유효한 추천코드를
                                                            입력해야 친구 초대
                                                            달성 보상을 얻으실
                                                            수 있습니다.
                                                        </li>
                                                        <li>
                                                            지급된 룰렛 티켓은
                                                            이벤트 기간 내에만
                                                            사용하실 수
                                                            있습니다.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* 텍스트 팝업 */}
                {/*
                // [출석체크] 버튼 클릭 시
                // 1. 발급 - 룰렛 티켓 지급 완료! 내일도 출석체크에 참여하세요~
                // 2. 발급x - 이미 출석체크 하셨습니다. 내일 참여해주세요~

                // [보상 받기] 버튼 클릭 시
                // 1. 'N'명 초대 보상 지급 완료! 룰렛 티켓 'n'장이 지급되었습니다.

                // [룰렛 START] 버튼 클릭 시
                // 1. 룰렛 티켓을 사용하시겠습니까? 내 잔여 티켓 : N 개
                // 2. 룰렛 게임에 필요한 티켓이 없습니다! 친구를 초대하거나 출석체크를 하면 룰렛 티켓을 얻으실 수 있습니다.

                // [추천코드 입력] 버튼 클릭 시
                // 1. 추천정보확인 / [추천코드] SAGAASDAD / [추천인ID] coffee
                // 2. 추천정보확인 / 유효하지 않은 추천코드입니다. 추천코드를 다시 확인 바랍니다.

                */}
                {/* 출석체크 버튼 클릭 시 */}
                {this.state.isAttendPopOk ? (
                    <div
                        className="layer-wrap blackfridayPop"
                        id=""
                        style={{ display: 'block', opacity: '1' }}
                    >
                        <div className="pop-layer">
                            <div className="pop-container">
                                <div className="frame">
                                    <Link
                                        to="#"
                                        className="btn-layer-close"
                                        id="closeBlackfriday"
                                        onClick={e => this.handleAttendPopOk(e)}
                                        data-status="close"
                                    >
                                        {' '}
                                        x
                                    </Link>
                                    <h2 className="skip"> </h2>
                                    <div className="alert">
                                        <h4
                                            dangerouslySetInnerHTML={{
                                                __html: this.state
                                                    .AttendMsgTitle,
                                            }}
                                        />
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: this.state
                                                    .AttendMsgDesc,
                                            }}
                                        />

                                        <div
                                            className="btn-wrap clearfix"
                                            id=""
                                        >
                                            <Link
                                                to="#"
                                                className="btn-alert"
                                                onClick={e =>
                                                    this.handleAttendPopOk(e)
                                                }
                                                data-status="close"
                                            >
                                                확인
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="shadow blackfriday"
                            onClick={e => this.handleAttendPopOk(e)}
                        />
                    </div>
                ) : null}

                {/* 보상받기 버튼 클릭 시 */}
                {this.state.isGetRewards ? (
                    <div
                        className="layer-wrap blackfridayPop"
                        id="getRewardPop"
                        style={{ display: 'block', opacity: '1' }}
                    >
                        <div className="pop-layer">
                            <div className="pop-container">
                                <div className="frame">
                                    <Link
                                        to="#"
                                        className="btn-layer-close"
                                        id="closeBlackfriday"
                                        onClick={e => this.handleGetRewards(e)}
                                        data-status="close"
                                    >
                                        {' '}
                                        x
                                    </Link>
                                    <h2 className="skip"> </h2>
                                    <div className="alert">
                                        <h4>1명 초대 보상 지급 완료!</h4>
                                        <p>룰렛 티켓 2장이 지급 되었습니다.</p>

                                        <div
                                            className="btn-wrap clearfix"
                                            id="alertBtn"
                                        >
                                            <Link
                                                to="#"
                                                className="btn-alert"
                                                onClick={e =>
                                                    this.handleGetRewards(e)
                                                }
                                                data-status="close"
                                            >
                                                확인
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="shadow blackfriday"
                            onClick={e => this.handleGetRewards(e)}
                            data-status="close"
                        />
                    </div>
                ) : null}
                {/* 룰렛 START 버튼 클릭 시 */}
                {this.state.isRouletteStartPop ? (
                    <div
                        className="layer-wrap blackfridayPop"
                        id="rouletteStartPop"
                        style={{ display: 'block', opacity: '1' }}
                    >
                        <div className="pop-layer">
                            <div className="pop-container">
                                <div className="frame">
                                    <Link
                                        to="#"
                                        className="btn-layer-close"
                                        id="closeBlackfriday"
                                        onClick={e =>
                                            this.handleRouletteStartPop(e)
                                        }
                                    >
                                        {' '}
                                        x
                                    </Link>
                                    <h2 className="skip"> </h2>
                                    <div className="alert">
                                        <h4>룰렛 티켓을 사용하시겠습니까?</h4>
                                        <p>내 잔여 티켓 : [N] 개</p>

                                        <div
                                            className="btn-wrap clearfix"
                                            id="alertBtn"
                                        >
                                            <Link
                                                to="#"
                                                className="btn-alert"
                                                onClick={e =>
                                                    this.handleRouletteStartPop(
                                                        e
                                                    )
                                                }
                                            >
                                                {' '}
                                                네
                                            </Link>
                                            {/*팝업 창 닫고 실행시키기 this.getstart*/}
                                            <Link
                                                to="#"
                                                className="btn-alert"
                                                onClick={e =>
                                                    this.handleRouletteStartPop(
                                                        e
                                                    )
                                                }
                                            >
                                                취소
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="shadow blackfriday"
                            onClick={e => this.handleRouletteStartPop(e)}
                        />
                    </div>
                ) : null}

                {this.state.isOpenEventPop ? (
                    <>
                        <div
                            className="layer-wrap blackfridayPop"
                            id="blackfridayPop"
                            style={{ display: 'block', opacity: '1' }}
                        >
                            <div className="pop-layer">
                                <div className="pop-container">
                                    <div className="frame">
                                        <Link
                                            to="#"
                                            className="btn-layer-close"
                                            id="closeBlackfriday"
                                            onClick={e => this.handlePop(e)}
                                        >
                                            {' '}
                                            x
                                        </Link>
                                        <h2 className="skip"> </h2>
                                        <div className="alert">
                                            이ㅏ르니ㅏㅇ힌아릥ㅂ습니다.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="shadow blackfriday"
                                onClick={e => this.handlePop(e)}
                            />
                        </div>
                    </>
                ) : null}

                {/* 테이블 팝업 */}
                {/* 보유 티켓 사용 현황 */}
                {this.state.isTicketOwnPop ? (
                    <div
                        className="layer-wrap blackfridayPop"
                        id="ticketOwnPop"
                        style={{ display: 'block', opacity: '1' }}
                    >
                        <div className="pop-layer own-ticket-table">
                            <div className="pop-container">
                                <div className="frame">
                                    <Link
                                        to="#"
                                        className="btn-layer-close"
                                        onClick={e =>
                                            this.handleTicketOwnPop(e)
                                        }
                                        data-status="close"
                                    >
                                        {' '}
                                        x
                                    </Link>
                                    <h2>보유 티켓 사용 현황</h2>

                                    <div className="alert">
                                        <div className="table-wrap">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>번호</th>
                                                        <th>날짜</th>
                                                        <th>내용</th>
                                                        <th>내역</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.ticket_history.map(
                                                        (history, index) => (
                                                            <tr key={index}>
                                                                <td>
                                                                    {index + 1}
                                                                </td>
                                                                <td>
                                                                    {
                                                                        history.reg_date
                                                                    }
                                                                </td>
                                                                <td>
                                                                    {
                                                                        history.desc
                                                                    }
                                                                </td>
                                                                <td
                                                                    className={
                                                                        history.type ===
                                                                        '+'
                                                                            ? 'get'
                                                                            : 'used'
                                                                    }
                                                                >
                                                                    {history.type +
                                                                        ' ' +
                                                                        history.ticket_count}
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="result-sum clearfix">
                                            <span className="pull-left">
                                                총 보유 티켓
                                            </span>
                                            <span className="pull-right">
                                                {' '}
                                                {this.state.ticket_count.toLocaleString()}
                                                개
                                            </span>
                                        </div>

                                        <div
                                            className="btn-wrap clearfix"
                                            id="alertBtn"
                                        >
                                            <Link
                                                to="#"
                                                className="btn-alert"
                                                onClick={e =>
                                                    this.handleTicketOwnPop(e)
                                                }
                                                data-status="close"
                                            >
                                                확인
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="shadow blackfriday"
                            onClick={e => this.handleTicketOwnPop(e)}
                            data-status="close"
                        />
                    </div>
                ) : null}

                {/* 룰렛 당첨 현황 */}
                {this.state.isRouletteGetPop ? (
                    <div
                        className="layer-wrap blackfridayPop"
                        id="rouletteGetPop"
                        style={{ display: 'block', opacity: '1' }}
                    >
                        <div className="pop-layer own-ticket-table">
                            <div className="pop-container">
                                <div className="frame">
                                    <Link
                                        to="#"
                                        className="btn-layer-close"
                                        onClick={e =>
                                            this.handleRouletteGetPop(e)
                                        }
                                        data-status="close"
                                    >
                                        {' '}
                                        x
                                    </Link>
                                    <h2>룰렛 상품 획득 현황</h2>

                                    <div className="alert">
                                        <div className="table-wrap">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>번호</th>
                                                        <th>날짜</th>
                                                        <th>상품</th>
                                                        <th>사용여부</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.rullet_history
                                                        .length > 0
                                                        ? this.state.rullet_history.map(
                                                              (
                                                                  history,
                                                                  index
                                                              ) => (
                                                                  <tr
                                                                      key={
                                                                          index
                                                                      }
                                                                  >
                                                                      <td>
                                                                          {index +
                                                                              1}
                                                                      </td>
                                                                      <td>
                                                                          {
                                                                              history.created_at
                                                                          }
                                                                      </td>
                                                                      <td>
                                                                          {parseInt(
                                                                              history.rullet_type
                                                                          ) ===
                                                                          1
                                                                              ? '50,000 보너스 코인'
                                                                              : parseInt(
                                                                                    history.rullet_type
                                                                                ) ===
                                                                                    3 ||
                                                                                parseInt(
                                                                                    history.rullet_type
                                                                                ) ===
                                                                                    5 ||
                                                                                parseInt(
                                                                                    history.rullet_type
                                                                                ) ===
                                                                                    7
                                                                              ? '10% 보너스 쿠폰'
                                                                              : parseInt(
                                                                                    history.rullet_type
                                                                                ) ===
                                                                                    4 ||
                                                                                parseInt(
                                                                                    history.rullet_type
                                                                                ) ===
                                                                                    8
                                                                              ? '한번 더'
                                                                              : '꽝'}
                                                                      </td>
                                                                      <td>
                                                                          {parseInt(
                                                                              history.rullet_type
                                                                          ) ===
                                                                              1 ||
                                                                          parseInt(
                                                                              history.rullet_type
                                                                          ) ===
                                                                              3 ||
                                                                          parseInt(
                                                                              history.rullet_type
                                                                          ) ===
                                                                              5 ||
                                                                          parseInt(
                                                                              history.rullet_type
                                                                          ) ===
                                                                              7
                                                                              ? parseInt(
                                                                                    history.status
                                                                                ) ===
                                                                                1
                                                                                  ? '미사용'
                                                                                  : '사용'
                                                                              : '-'}
                                                                      </td>
                                                                  </tr>
                                                              )
                                                          )
                                                        : null}
                                                </tbody>
                                            </table>
                                        </div>

                                        <div
                                            className="btn-wrap clearfix"
                                            id="alertBtn"
                                        >
                                            <Link
                                                to="#"
                                                className="btn-alert"
                                                onClick={e =>
                                                    this.handleRouletteGetPop(e)
                                                }
                                                data-status="close"
                                            >
                                                확인
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="shadow blackfriday"
                            onClick={e => this.handleRouletteGetPop(e)}
                        />
                    </div>
                ) : null}

                {/* 친구초대 달성 현황 */}
                {this.state.isInviteAchieve ? (
                    <div
                        className="layer-wrap blackfridayPop"
                        id="inviteAchieve"
                        style={{ display: 'block', opacity: '1' }}
                    >
                        <div className="pop-layer own-ticket-table">
                            <div className="pop-container">
                                <div className="frame">
                                    <Link
                                        to="#"
                                        className="btn-layer-close"
                                        onClick={e =>
                                            this.handleInviteAchievePop(e)
                                        }
                                        data-status="close"
                                    >
                                        {' '}
                                        x
                                    </Link>
                                    <h2>친구초대 달성 현황!</h2>
                                    <p className="achieve-person">
                                        (달성 인원 :{' '}
                                        {this.state.friend_recommand_count}명)
                                    </p>

                                    <div className="alert">
                                        <div className="table-wrap">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>번호</th>
                                                        <th>아이디</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.friend_recommand_list.map(
                                                        (
                                                            friend_recommand,
                                                            index
                                                        ) => (
                                                            <tr key={index}>
                                                                <td>
                                                                    {index + 1}
                                                                </td>
                                                                <td>
                                                                    {
                                                                        friend_recommand.user_id
                                                                    }
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>

                                        <div
                                            className="btn-wrap clearfix"
                                            id="alertBtn"
                                        >
                                            <Link
                                                to="#"
                                                className="btn-alert"
                                                onClick={e =>
                                                    this.handleInviteAchievePop(
                                                        e
                                                    )
                                                }
                                                data-status="close"
                                            >
                                                확인
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="shadow blackfriday"
                            onClick={e => this.handleInviteAchievePop(e)}
                            data-status="close"
                        />
                    </div>
                ) : null}
            </>
        )
    }
}

export default EventContents
