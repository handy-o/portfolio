import React from 'react'
import $ from 'jquery'
import WrapLoading from '../../common/WrapLoading'
import LayerWrap from '../../common/LayerWrap' // 당첨 팝업
import './RoulletCanvas.scoped.scss'
import item8 from './images/bg-item8-min.png'
import huan from './images/yuanhuan.png'
import huan1 from './images/yuanhuan01.png'
import wham from './images/wham.png'
import oneMore from './images/onemore.png'
import coupon10per from './images/cocupon-10bonus-min.png'
import vcoin5m from './images/5m-vcoin-min.png'
import axios from 'axios'
import InfoContext from '../../../contexts/InfoContext'

class Roullet extends React.Component {
    static contextType = InfoContext

    constructor(props, context) {
        super(props)
        this.canvas = React.createRef()
        this.state = {
            sum: 8,
            itembg: item8, // 如果没传为8个奖品背景
            awards: [
                {
                    rewardNames: '5만 보너스 코인', // 转盘奖品名称数组 name
                    rewardUrl: vcoin5m, // 转盘奖品图片 imgurl
                    prizeId: '1', // 奖品 id
                    messages: `축하합니다~! 
5만 보너스 코인에 당첨되었습니다! 
이벤트 기간 내에 사용하실 수 있습니다.`,
                },
                {
                    rewardNames: '꽝!', // 转盘奖品名称数组 name
                    rewardUrl: wham, // 转盘奖品图片 imgurl
                    prizeId: '2', // 奖品 id
                    messages: `다음 기회에 다시 도전해주세요...`,
                },
                {
                    rewardNames: '10% 보너스 쿠폰', // 转盘奖品名称数组 name
                    rewardUrl: coupon10per, // 转盘奖品图片 imgurl
                    prizeId: '3', // 奖品 id
                    messages: `축하합니다~! 
10% 보너스 쿠폰에 당첨되었습니다. 
보너스 쿠폰은 이벤트 기간 내에 VCoin 충전 시에 자동 적용됩니다.`,
                },
                {
                    rewardNames: '한번 더!', // 转盘奖品名称数组 name
                    rewardUrl: oneMore, // 转盘奖品图片 imgurl
                    prizeId: '4', // 奖品 id
                    messages: `한번 더 돌리기!`,
                },
                {
                    rewardNames: '10% 보너스 쿠폰', // 转盘奖品名称数组 name
                    rewardUrl: coupon10per, // 转盘奖品图片 imgurl
                    prizeId: '5', // 奖品 id
                    messages: `축하합니다~! 
10% 보너스 쿠폰에 당첨되었습니다. 
보너스 쿠폰은 이벤트 기간 내에 VCoin 충전 시에 자동 적용됩니다.`,
                },
                {
                    rewardNames: '꽝!', // 转盘奖品名称数组 name
                    rewardUrl: wham, // 转盘奖品图片 imgurl
                    prizeId: '6', // 奖品 id
                    messages: `다음 기회에 다시 도전해주세요...`,
                },
                {
                    rewardNames: '10% 보너스 쿠폰', // 转盘奖品名称数组 name   // 여기가 1임?
                    rewardUrl: coupon10per, // 转盘奖品图片 imgurl
                    prizeId: '7', // 奖品 id
                    messages: `축하합니다~! 
10% 보너스 쿠폰에 당첨되었습니다. 
보너스 쿠폰은 이벤트 기간 내에 VCoin 충전 시에 자동 적용됩니다.`,
                },
                {
                    rewardNames: '한번 더', // 转盘奖品名称数组 name
                    rewardUrl: oneMore, // 转盘奖品图片 imgurl
                    prizeId: '8', // 奖品 id
                    messages: `한번 더 돌리기!`,
                },
            ],
            outsideRadius: 340, //转盘外圆的半径   //룰렛 바깥쪽 원의 반지름
            insideRadius: 68, //转盘内圆的半径 // 룰렛 안쪽 원의 반지름
            textRadius: 310, //转盘奖品位置距离圆心的距离 //를렛 경품의 위치와 원의 중심 사이의 거리 //320
            startAngle: 0, // 开始角度 시작각도
            bRotate: false, //false:停止;ture:旋转  //false: 중지, ture: 회전
            txtcolors: [
                '#DB1F33',
                '#FDFDFD',
                '#DB1F33',
                '#FDFDFD',
                '#DB1F33',
                '#FDFDFD',
                '#DB1F33',
                '#FDFDFD',
            ], //转盘奖品区块对应文字颜色,
            domid: 'wheelCanvas',
            yuanhuan: huan,
            imgitems: [],
            wrapLoading: false,
            winWidth: $(window).outerWidth(),
            Canvasrotate: '',
            animateTo: 0,
            pointer: 'start',
            time: null,
            isLogin: context.state.is_login,
            ssoinfo: context.state.ssoinfo,
            userid: context.state.user_id,
            jumin: context.state.jumin,
        }
        this.Layer = null
        // this.time = null;
        this.imgitems = []

        this.getstart = this.getstart.bind(this)
    }

    componentDidMount() {
        // 请求接口获取奖励列表
        this.circle(true)
        this.onLoadPage()
    }

    onLoadPage() {
        const { awards, itembg } = this.state
        let _this = this
        this.oImg = new Image()
        this.oImg.src = itembg // awards.js line6
        // console.log(this.oImg) // <img src="/static/images/8_roulette/bg_item8.png">
        for (let i = 0; i < awards.length; i++) {
            let imgUrl = new Image()
            imgUrl.src = awards[i].rewardUrl // 상품 아이템 이미지 경로 (index.html line78)
            this.imgitems.push(imgUrl)
        }
        window.onload = function() {
            // this.oImg.onload = function() {
            _this.drawWheelCanvas()
        }
    }
    circle(circle) {
        let _this = this
        let i = 0
        if (circle) {
            clearInterval(_this.state.time)
            _this.state.time = setInterval(() => {
                i++
                if (i % 2 === 0) {
                    this.setState({
                        yuanhuan: huan,
                    })
                } else {
                    this.setState({
                        yuanhuan: huan1,
                    })
                }
            }, 500) // *reduce
            // console.log(_this.time);    // 1이 나와서 반절인 500을 timeout 시간으로 설정합니다.
        }
    }
    rotateFunc(item, tip, count) {
        let _this = this
        // 转盘开始时停止动效 // 회전 시 깜빡임 애니메이션 중지
        this.circle(false)
        this.setState({
            yuanhuan: huan,
        })
        // 应该旋转的角度，旋转插件角度参数是角度制。 // 회전 각도
        var baseAngle = 360 / count
        // 旋转角度 == 270°（当前第一个角度和指针位置的偏移量） - 奖品的位置 * 每块所占的角度 - 每块所占的角度的一半(指针指向区域的中间)
        let angles = (360 * 3) / 4 - item * baseAngle - baseAngle / 2 // 因为第一个奖品是从0°开始的，即水平向右方向
        // $(`#${this.state.domid}`).stopRotate();
        // // 注意，jqueryrotate 插件传递的角度不是弧度制。
        // // 哪个标签调用方法，旋转哪个控件
        // $(`#${this.state.domid}`).rotate({
        //     angle: 0,
        //     animateTo: angles + 360 * 6, // 这里多旋转了10圈，圈数越多，转的越快  // *rotate count reduce
        //     duration: 3000, // *reduce
        //     callback: function () { // 回调方法
        //         window.fnAlert(tip);
        //         _this.circle(true); // 重新闪烁动效
        //         _this.pointer = 'replay'
        //         _this.state.bRotate = false;
        //     }
        // });
        this.rotate({
            animateTo: angles + 360, // 这里多旋转了10圈，圈数越多，转的越快  // *rotate count reduce
            duration: 1200, // *reduce // 3000
            callback: function() {
                // 回调方法
                // window.fnAlert(tip);
                _this.Layer.fnAlert(tip)
                _this.circle(true) // 重新闪烁动效
                _this.setState({
                    pointer: 'replay',
                    bRotate: !_this.state.bRotate,
                    Canvasrotate: '',
                })
            },
        })
    }
    rotate(data) {
        const { animateTo, duration, callback } = data
        // this.setState({
        //     Canvasrotate: 'rotate'
        // })
        // 获取转盘实例
        // 增加旋转动画
        const ele = document.getElementById('wheelCanvas')
        ele.style.transition = `all ${duration}ms ease`
        ele.style.transform = `rotate(${animateTo + 360}deg)` // 乘以10是为了转盘转动的效果
        let time
        clearTimeout(time)
        time = setTimeout(() => {
            return callback()
        }, duration)
    }
    drawWheelCanvas() {
        const { startAngle, awards, sum } = this.state
        const canvas = this.canvas.current
        let ctx
        if (canvas.getContext) {
            ctx = canvas.getContext('2d')
        }
        let _this = this
        let baseAngle = (Math.PI * 2) / awards.length
        let canvasW = canvas.width // 画板的高度
        let canvasH = canvas.height // 画板的宽度
        ctx.fillStyle = 'rgba(0,0,0,0)'
        ctx.clearRect(0, 0, canvasW, canvasH) //去掉背景默认的黑色 //기본 검정색 배경 제거
        ctx.strokeStyle = 'rgba(0,0,0,0)' //线的颜色   // 선색상 제거
        //ctx.font = 'bold 18px Trebuchet MS';
        if (this.state.winWidth < 768) {
            // *mobile
            ctx.font = 'bold 24px Trebuchet MS'
        } else {
            // *pc
            ctx.font = 'bold 18px Trebuchet MS'
        }
        // //绘制背景图片 // 배경이미지
        ctx.drawImage(this.oImg, 84, 80, 694, 694) // 룰렛 판 통채 위치 (this.oImg , x거리, y거리, width, height)

        // 使用了beginPath(),canvas会知道是重新画一条，如果给这几条设置不同的属性也是可以的。
        for (var index = 0; index < awards.length; index++) {
            var angle = startAngle + index * baseAngle
            // ctx.fillStyle = turnWheel.colors[index];
            ctx.beginPath()
            ctx.arc(
                canvasW * 0.5,
                canvasH * 0.5,
                _this.state.outsideRadius,
                angle,
                angle + baseAngle,
                false
            )
            ctx.arc(
                canvasW * 0.5,
                canvasH * 0.5,
                _this.state.insideRadius,
                angle + baseAngle,
                angle,
                true
            )
            ctx.stroke()
            ctx.fill()
            ctx.save()
            ctx.fillStyle = this.state.txtcolors[index]
            var rewardName = awards[index].rewardNames
            var translateX =
                canvasW * 0.5 +
                Math.cos(angle + baseAngle / 2) * _this.state.textRadius
            var translateY =
                canvasH * 0.5 +
                Math.sin(angle + baseAngle / 2) * _this.state.textRadius
            ctx.translate(translateX, translateY)
            ctx.rotate(angle + baseAngle / 2 + Math.PI / 2)
            // ctx.fillText(rewardName, -ctx.measureText(rewardName).width / 2, 140);
            let linew = null // 文字换行宽度 // 텍스트 줄 바꿈 너비
            if (sum === 8) {
                linew = 130
            } else {
                linew = 90
            }
            _this
                .getLineTextList(ctx, rewardName, linew)
                .forEach((line, index) => {
                    // 绘制文字的方法,三个参数分别带:要绘制的文字,开始绘制的x坐标,开始绘制的y坐标
                    ctx.fillText(
                        line,
                        -ctx.measureText(line).width / 2,
                        ++index * 22 + 110
                    ) // *마지막 +110 숫자 상품명 위치 조정
                })

            //添加对应奖品图片
            ctx.drawImage(_this.imgitems[index], -65, 0, 120, 96) // 120, 120

            ctx.restore() //很关键
        }
    }
    getLineTextList(context, text, maxLineWidth) {
        let wordList = text.split(''),
            tempLine = '',
            lineList = []
        for (let i = 0; i < wordList.length; i++) {
            if (context.measureText(tempLine).width >= maxLineWidth) {
                lineList.push(tempLine)
                maxLineWidth -= context.measureText(text[0]).width
                tempLine = ''
            }
            tempLine += wordList[i]
        }
        lineList.push(tempLine)
        return lineList
    }
    // 这个方法是为了将canvas再window中的坐标点转化为canvas中的坐标点
    windowToCanvas(canvas, e) {
        // getBoundingClientRect这个方法返回html元素的大小及其相对于视口的位置
        const canvasPostion = canvas.getBoundingClientRect(),
            x = e.clientX,
            y = e.clientY
        return {
            x: x - canvasPostion.left,
            y: y - canvasPostion.top,
        }
    }

    // 抽取按钮按钮点击触发事件
    draw(id) {
        let _this = this
        // 正在转动，直接返回
        console.log(1)
        if (_this.state.bRotate) return
        console.log(2)
        let count = _this.state.awards.length
        _this.setState({
            bRotate: !_this.state.bRotate,
            wrapLoading: true,
        })
        clearTimeout(this.state.time)
        const ele = document.getElementById('wheelCanvas')
        ele.style.transition = `all ${0}ms`
        ele.style.transform = `rotate(${0}deg)` // 乘以10是为了转盘转动的效果
        // ajax
        let code = 0
        setTimeout(() => {
            _this.setState({
                wrapLoading: false,
            })
            if (code === 1) {
                // window.fnAlert('Not enough points!');
            } else if (code === 2) {
                // window.fnAlert('The number of raffles has run out!');
            } else {
                _this.state.awards.forEach(function(v, index) {
                    if (v.prizeId === id.toString()) {
                        let item = index
                        // 开始抽奖
                        _this.setState({
                            pointer: 'not',
                        })
                        _this.rotateFunc(
                            item,
                            { name: v.rewardNames, msg: v.messages },
                            count
                        ) // add v.message
                    }
                })
            }
        }, 600)
        // 这里应该是从服务器获取用户真实的获奖信息（对应的获奖序号）
        // $.ajax({
        //     type: "POST",
        //     url: "./aaaaaa.htm",
        //     data: {customerId:2589},
        //     async:false,
        //     dataType:"json", // 返回数据类型
        //     success: function(data){
        //         console.log(data);
        //         if(data.type == 1){//积分不足

        //         }else if(data.type == 2){//抽奖次数已经用完

        //         }else{//抽奖
        //             turnWheel.prizeId.forEach(function(currentValue, index){
        //                 if(currentValue == data.prize.id){
        //                     var item = index;
        //                     console.log(index);
        //                     $(".award-warp .content").html(data.prize.name);
        //                     // 开始抽奖
        //                     rotateFunc(item, turnWheel.rewardNames[item],count);
        //                 }
        //             })
        //         }
        //     },
        //     error: function(data){
        //         console.log("网络错误，请检查您的网络设置！");
        //     }
        // });
    }

    getstart() {
        /*
        this.setState({
            bRotate: false,
        })
        */
        if (this.state.isLogin) {
            if (this.state.bRotate !== true) {
                let data = { idx: 1 }
                axios
                    .post(
                        process.env.REACT_APP_VFUN_API_DNS +
                            '/v1/VfunEvent/rullet',
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
                            // 请求接口开始抽奖，返回奖励
                            //1 : 5만 보너스 코인
                            //2 : 꽝
                            //3 : 3% 할인 쿠폰
                            //4 : 한번 더
                            //5 : 5% 할인 쿠폰
                            //6 : 꽝
                            //7 : 10% 할인 쿠폰
                            //8 : 3% 할인 쿠폰
                            //let prizeId = Math.round(Math.random() * 8)
                            this.props.getTicketCount()
                            this.props.getWinnerTop4()
                            let prizeId = parseInt(res.data.rullet)
                            this.draw(!prizeId ? 1 : prizeId)
                        } else if (parseInt(res.data.result_code) === -99) {
                            alert('티켓이 부족합니다.')
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
        } else {
            alert('로그인 후 참여 가능합니다.')
        }
    }
    htmlLoading() {
        if (this.state.wrapLoading) {
            return <WrapLoading />
        } else {
            return null
        }
    }
    render() {
        return (
            <div className="ck-wheel">
                <div className="wheel">
                    {/*<div
                        className="wheel-circle"
                        style={{
                            backgroundImage: 'url(' + this.state.yuanhuan + ')',
                        }}
                    />*/}
                    <canvas
                        className={this.state.Canvasrotate}
                        style={{
                            transform: `rotate(${this.state.animateTo}deg)`,
                        }}
                        id="wheelCanvas"
                        ref={this.canvas}
                        width="860px"
                        height="860px"
                    />

                    <span
                        id="pointer"
                        className={this.state.pointer}
                        onClick={this.getstart}
                    />
                </div>
                {this.htmlLoading()}
                <LayerWrap onRef={c => (this.Layer = c)} />
            </div>
        )
    }
}
export default Roullet
