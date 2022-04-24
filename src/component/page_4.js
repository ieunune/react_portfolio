import React, { Component } from 'react';
import { ButtonBack,ButtonNext } from 'pure-react-carousel';

class Page_4 extends Component {
    render() {
      return (
        <div className="page_4">
          <ButtonBack className="to-top">
              <span className="fa fa-angle-double-up" aria-hidden="true"></span>
          </ButtonBack>
          <div className="container-fluid">
            <div className="page-4-content">
              <h4 className="page-4-h4">TEST</h4>
            </div>
          </div>
          <ButtonNext className="to-bottom">
              <span className="fa fa-angle-double-down" aria-hidden="true"></span>
          </ButtonNext>

      </div>
      );
    }
  }
  
  export default Page_4;