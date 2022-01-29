import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

class Page_3 extends Component {
    render() {
      return (
        <div className="page_3">
            <ButtonBack className="to-top-project">
                <span className="fa fa-angle-double-up" aria-hidden="true"></span>
            </ButtonBack>
            <div className="container-fluid">
              page3
            </div>
            <ButtonNext className="to-bottom-project">
                <span className="fa fa-angle-double-down" aria-hidden="true"></span>
            </ButtonNext>
        </div>
      );
    }
  }
  
  export default Page_3;