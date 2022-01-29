import React, { Component } from 'react';
import { ButtonBack, Dot } from 'pure-react-carousel';

class Page_4 extends Component {
    render() {
      return (
        <div className="page_4">
            <ButtonBack className="to-top">
                <span className="fa fa-angle-double-up" aria-hidden="true"></span>
            </ButtonBack>
            <div className='container-fluid'>
            page4
            </div>
            <Dot slide={0} className="to-first">
                <span className="touch-guide">처음 페이지로</span>
                    <br />
                <span className="fa fa-step-backward" aria-hidden="true"></span>
            </Dot>
        </div>
      );
    }
  }
  
  export default Page_4;