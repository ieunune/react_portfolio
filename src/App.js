import React, {Component} from 'react';
import { CarouselProvider, Slider, Slide, ButtonNext } from 'pure-react-carousel';

import Page1 from './component/page_1';
import Page2 from './component/page_2';
import Page3 from './component/page_3';
import Page4 from './component/page_4';
import './App.css';

class App extends Component{

  offsetWidth() {
    if (window.document.body.offsetWidth < 768) {
      return <span className="touch-guide">터치하여 계속 보기</span>
    } else {
      return <span className="touch-guide">클릭하여 계속 보기</span>
    }
  };
  guideMsg() {
    if (window.document.body.offsetWidth < 768) {
      return <span className="fa fa-exclamation-circle guide-msg" aria-hidden="true"> 상단 또는 하단 영역을 터치하여 계속 보기</span>
    } else {
      return <span className="fa fa-exclamation-circle guide-msg" aria-hidden="true"> 상단 또는 하단 영역을 클릭하여 계속 보기</span>
    }
  };
  
  render() {
    return(
    <div className="App">
      <CarouselProvider
          visibleSlides={1}
          orientation="vertical"
          totalSlides={5}
          step={1}
          touchEnabled={false}
        >
          <Slider>
            <Slide index={0}>
              <div className="main">
                  <span className="fa fa-check-circle react-msg" aria-hidden="true"> 본 사이트는 React로 제작되었습니다.</span>
                  {this.guideMsg()}

                  <div className="container-fluid">
                      <div className='main-content'>
                        <p>안녕하십니까</p>
                        <h1>백엔드 개발자 <strong>박은우</strong>의 포트폴리오 입니다.</h1>
                        <p>
                          {/* <a className="btn btn-dark" href="https://github.com/ieunune/">GIT</a> */}
                          <a className="btn btn-dark" href="https://github.com/ieunune" role="button" rel="noreferrer" target="_blank">
                            <span className="fa fa-github" aria-hidden="true"/>
                              &nbsp; Github
                          </a>
                        </p>
                      </div>
                      <ButtonNext className="to-bottom-first">
                        {this.offsetWidth()}
                        <br />
                        <span className="fa fa-angle-double-down" aria-hidden="true"></span>
                      </ButtonNext>

                  </div>
                </div>
            </Slide>

            <Slide index={1}>
              <Page1/>
            </Slide>

            <Slide index={2}>
              <Page2/>
            </Slide>

            <Slide index={3}>
              <Page3/>
            </Slide>

            <Slide index={4}>
              <Page4/>
            </Slide>

          </Slider>
        </CarouselProvider>
    </div>
    );
  }
}

export default App;
