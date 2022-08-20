import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageView, initGA } from "./components/Tracking/index";
import ReactGA from "react-ga"; //GA1
import { HeadProvider, Link, Title } from "react-head";

import Newsletter from "./routes/Newsletter";
import Grabathree from "./routes/Grabathree";
import YoutubeThumb from "./components/YoutubeThumb";

class App extends React.Component {
  componentDidMount() {
    initGA("UA-");
    PageView(); // 페이지 뷰가 다른 이벤트 추척보다 선행되어야 함
    ReactGA.event({
      category: "User",
      action: "Created an Account", //계정생성 추적
      label: "VFUN 뉴스레터 열람", // + 서비스 코드가 들어가면 더 좋겠습니다.
    });
    ReactGA.exception({
      description: "An error ocurred", //에러 페이지 추적
      fatal: true,
      label: "react_html 에러 페이지",
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            path="newsletter/:service_code"
            exact={true}
            element={<Newsletter />}
          />
          <Route
            path="/webview/grabathree"
            exact={true}
            element={<Grabathree />}
          />
          <Route path="/YoutubeThumb" exact={true} component={YoutubeThumb} element={ <YoutubeThumb />}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
