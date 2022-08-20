import React from 'react'
import InfoContext from '../../contexts/InfoContext'

import '../../assets/css/game/AllgamesContents.scoped.scss' // css

class EventContentsDefault extends React.Component {
    static contextType = InfoContext
    constructor(props, context) {
        super(props)

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
            jumin: context.state.jumin === false ? 'none' : context.state.jumin
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <>

                <section className="">
                    <div className="row-w clearfix">
                        {/*
                    <Link to="#" onClick={} />
                        <img src="" alt="" />
                        <br />
                        <input />
                        <span className="fa fa-bars" />

                    */}

                    </div>
                </section>

            </>
        )
    }
}