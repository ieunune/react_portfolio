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
              <div className="title-wrapper">
                <h2 className="project-title">보호할개</h2>
                <h4 className="sub-title">유기견 없는 사회를 실현하고자 하는 시스템입니다. </h4>
              </div>

              <div className="content-wrapper row">
                <div className="col-md-6 video-wrapper">
                  <div className="embed-responsive embed-responsive-16by9 media">
                    <iframe title="project1" src="https://www.youtube.com/embed/qGeE3vKoyHs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div className="btn-wrapper">
                    <div className="btn-group" role="group" aria-label="button group">
                      <form action="https://github.com/ieunune/protectedWeb" target="_blank">
                        <button type="submit" className="btn btn-info-link btn-outline-secondary">
                          <span className="fa fa-github" aria-hidden="true"></span>
                          &nbsp;Github
                        </button>
                      </form>
                      <form target="_blank">
                        <button onClick="window.open('../resource/final.html')" className="btn btn-info-link btn-outline-secondary">
                          <span className="fa fa-pencil-square-o" aria-hidden="true"></span>
                          &nbsp;Document
                        </button>
                      </form>
                      <form action="https://youtu.be/qGeE3vKoyHs" target="_blank">
                        <button type="submit" className="btn btn-info-link btn-outline-secondary">
                          <span className="fa fa-youtube-play" aria-hidden="true"></span>
                          &nbsp;Youtube
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <ul className="info">
                    <li className="info-list">
                      <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 개요</h5>
                      <p className="content-text-summary fa fa-angle-right" aria-hidden="true"> 비트캠프 118기 팀프로젝트 입니다.</p>
                    </li>
                    <li className="info-list">
                      <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 주요 역할</h5>
                      <ul className="content-text-wil">
                        <li className="fa fa-check" aria-hidden="true"> Spring, Java, Tomcat의 웹 서버 구성 설정 작업</li><br />
                        <li className="fa fa-check" aria-hidden="true"> 외부 API 데이터 통신</li><br />
                        <li className="fa fa-check" aria-hidden="true"> Oracle을 활용해 데이터베이스 설계 및 데이터 관리 </li><br />
                        <li className="fa fa-check" aria-hidden="true"> 애자일 기법을 활용한 프로젝트 관리 </li>
                      </ul>
                    </li>
                    <h5 className="content-title"><span className="fa fa-hashtag" aria-hidden="true"></span> 활용 기술</h5>
                    <p className="content-text-stacks fa fa-angle-right" aria-hidden="true"> <code>HTML</code> <code>CSS</code> <code>JSP</code> <code>JavaScript</code> <code>Spring</code> <code>Oracle</code>
                    </p>
                  </ul>
                </div>
              </div>
            </div>
            <ButtonNext className="to-bottom-project">
                <span className="fa fa-angle-double-down" aria-hidden="true"></span>
            </ButtonNext>
        </div>
      );
    }
  }
  
  export default Page_2;