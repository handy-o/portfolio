import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
//import App2 from './App2'
//import App3 from './App3'
import reportWebVitals from './reportWebVitals'
import { CookiesProvider } from 'react-cookie'
import { InfoProvider } from './contexts/InfoContext'

ReactDOM.render(
    <CookiesProvider>
        <InfoProvider>
            <App />
            {/*<App2 />*/}
            {/*<App3 />*/}
        </InfoProvider>
    </CookiesProvider>,
    document.getElementById('wrapper')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
