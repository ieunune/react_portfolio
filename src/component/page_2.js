import React, { Component } from 'react';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

class Page_2 extends Component {
    render() {
      return (
        <div className="page_2">
            <ButtonBack className="to-top-project">
                <span className="fa fa-angle-double-up" aria-hidden="true"></span>
            </ButtonBack>
            <div className="container-fluid">
              page2
            </div>
            <ButtonNext className="to-bottom-project">
                <span className="fa fa-angle-double-down" aria-hidden="true"></span>
            </ButtonNext>
        </div>
      );
    }
  }
  
  export default Page_2;