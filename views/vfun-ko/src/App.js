import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import { withCookies } from 'react-cookie'
import md5 from 'md5'

import InfoContext from './contexts/InfoContext'

import Main from './routes/Main'
import AllGames from './routes/AllGames'
import Download from './routes/Download'
import GameDetail from './routes/GameDetail'
import Community from './routes/Community'
import Notfound from './routes/errors/Notfound'
import InspectionBg from './routes/errors/InspectionBg'
import { VERIFY_KEY } from './utils/Config'

//import Event from './routes/landing/Event'

import './App.scss'
import { PageView, initGA } from './components/Tracking'
import ReactGA from 'react-ga4' //GA1

//const TRACKING_ID = 'G-312620525' //GA2
//ReactGA.initialize(TRACKING_ID) //GA3
//ReactGA.pageview(window.location.pathname + window.location.search);initGA에 포함됨

class App extends React.Component {
    static contextType = InfoContext
    constructor(props, context) {
        super(props)
        this.state = {
            isLogin: false,
            isLoading: true,
        }
    }
    componentDidMount() {

        //2023. 7월 1일부터 google GA가 UA 속성 지원하지 않음
        //initGA('G-1T67BP0JE8')
        initGA('G-1T67BP0JE8')
        PageView() // 페이지 뷰가 다른 이벤트 추척보다 선행되어야 함
        ReactGA.event({
            category: 'User',
            action: 'Created an Account', //계정생성 추적
            label: 'VFUN KR 회원 가입', // + 서비스 코드가 들어가면 더 좋겠습니다.
        })

        const { cookies } = this.props
        cookies.set('service_code', 'vfun-ko', {
            path: '/',
            domain: '.valofe.com',
        })
        this.valofe_process()
    }

    valofe_process() {
        const { cookies } = this.props
        var cookies_goonzu = cookies.get('goonzu')
        var is_login = false
        if (cookies_goonzu === undefined) {
            is_login = false
        } else {
            var cookies_info = cookies_goonzu.split('&')
            if (cookies_info.length > 0) {
                var param = []
                for (var i = 0; i < cookies_info.length; i++) {
                    var key = cookies_info[i].split('=')[0]
                    var value = cookies_info[i].split('=')[1]
                    param[key] = value
                }
                var jumin = cookies.get('jumin')
                var ssoinfo = cookies.get(
                    process.env.REACT_APP_SSO_INFO_COOKIE_NAME
                )
                var user_id = decodeURI(param['userid'])
                var cookies_string = user_id + jumin + VERIFY_KEY
                if (md5(cookies_string) === ssoinfo) {
                    is_login = true
                    this.context.actions.setIsLogin(is_login)
                    this.context.actions.setUserID(user_id)
                    this.context.actions.setSSOInfo(ssoinfo)
                    this.context.actions.setJuminInfo(jumin)
                } else {
                    is_login = false
                }
            } else {
                is_login = false
            }
        }

        this.setState({ isLogin: is_login, isLoading: false })
    }

    render() {
        return this.state.isLoading === false ? (
            <BrowserRouter>
                <Route path="/" exact={true} component={Main} />
                <Route
                    path="/game/all_games"
                    exact={true}
                    component={AllGames}
                />
                <Route
                    path="/game/download"
                    exact={true}
                    component={Download}
                />
                <Route
                    path="/game/detail/:service_code"
                    exact={true}
                    component={GameDetail}
                />
                <Route
                    path="/community/page/:service_code"
                    exact={true}
                    component={Community}
                />
                <Route
                    path="/errors/inspectionbg"
                    exact={true}
                    component={InspectionBg}
                />
                <Route
                    path="/errors/notfound"
                    exact={true}
                    component={Notfound}
                />
               <Route
                    path="/landing/blackfriday"
                    exact={true}
                    component={Event}
                />
            </BrowserRouter>
        ) : null
    }
}

export default withCookies(App)
