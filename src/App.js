import React, {Component} from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

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
          totalSlides={6}
          step={1}
          touchEnabled={false}
        >
          <Slider>
            <Slide index={0}>
              <div className="main">
                <div className="container-fluid">
                  <span className="fa fa-check-circle react-msg" aria-hidden="true"> 본 사이트는 React로 제작되었습니다.</span>
                  {this.guideMsg()}

                  <ButtonNext className="to-bottom-first">
                    {this.offsetWidth()}
                    <br />
                    <span className="fa fa-angle-double-down" aria-hidden="true"></span>
                  </ButtonNext>
                </div>
              </div>
            </Slide>

            <Slide index={1}>
              <div className="page1">
                <div className="container-fluid">
                    <ButtonBack className="to-back">
                      <span className="fa fa-angle-double-up" aria-hidden="true"></span>
                    </ButtonBack>
                  1 page
                </div>
              </div>
            </Slide>

            <Slide index={2}>
                2 page 
            </Slide>

            <Slide index={3}>
                3 page
            </Slide>

            <Slide index={4}>
                4 page
            </Slide>

            <Slide index={5}>
                5 page
            </Slide>


          </Slider>
        </CarouselProvider>
    </div>
    )
  }
}

export default App;
