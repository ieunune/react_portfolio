import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

class Page_1 extends Component {
    render() {
      return (
        <div className="page_1">
            <ButtonBack className="to-top">
                <span className="fa fa-angle-double-up" aria-hidden="true"></span>
            </ButtonBack>
            <div className="container-fluid">
              page1
            </div>
            <ButtonNext className="to-bottom">
                <span className="fa fa-angle-double-down" aria-hidden="true"></span>
            </ButtonNext>
        </div>
      );
    }
  }
  
  export default Page_1;