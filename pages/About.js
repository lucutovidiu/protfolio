import React from "react";
import BaseLayout from "../components/BaseLayout";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "../static/styles/_aboutme.scss";
import Link from "next/link";

const About = () => {
  return (
    <BaseLayout tab="About">
      <Container className="about_wrapper" fluid>
        <div className="content_wrapper ">
          <div className="about_title">
            <div className="about_title_myName ">I'm Ovi</div>
            <div className="about_title_subtitle">
              And I'm glad to meet you!
            </div>
          </div>
          <div className="main_content_wrapper_box ">
            <Container fluid>
              <Row>
                <Col md={{ span: 12, offset: 2 }}>
                  <div className="motto">
                    <h1>I'm a passionate web developer</h1>
                  </div>
                </Col>
              </Row>
            </Container>
            <br />
            <Container fluid className=" w-100">
              <Row className="get_in_contact ">
                <div className="v-align ">
                  <Row>
                    <Col md={7} className="pt-0 pl-5 pr-5">
                      <div>
                        &nbsp;&nbsp;&nbsp;I love designing the frontend and also
                        the backend using my favorite Javascript technologies.
                      </div>
                    </Col>
                    <Col md={4} className="get_in_tough_btn p-0">
                      <Link href="/Contact">
                        <a className="btn-gradient">Get In Touch</a>
                      </Link>
                      &nbsp;&nbsp;
                      <a
                        target="_blank"
                        href="../static/cv/CV.pdf"
                        className="btn-gradient"
                      >
                        Get My CV
                      </a>
                    </Col>
                  </Row>
                </div>
              </Row>
            </Container>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <div className="my_story">
                  <h1 className="my_story_title">A bit more about my story</h1>
                  <div className="my_story_content">
                    My programming Story begun since High School, when I chosen
                    to go for programming, I have started with Pascal which I
                    think is the best start to break into programming sice
                    Pascal is one of the very basic programming language,and
                    then in the university I've studied a lot of programming
                    languages starting with C and then C++, and after my beloved
                    Java and web programming too, after finishing university I
                    ended up in the UK and it was hard to find a programming
                    job, but when things have got better I've looked into the
                    market and I have seen a big potential in Javascript as it
                    can go on frontend as well as backend, I've started to learn
                    again and creating full stack projects mainly with
                    Javascript / React on frontend and NodeJS on backend, but of
                    course I have never lost my programming mind set, so I do
                    have a programming thinking, after doing a few realworld
                    projects and progressing I'm confident of building modern
                    responsive Webapps with latest technologies and really
                    enjoing learning new ones. This is the only thing I want for
                    my future in terms of work.
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <Footer />
    </BaseLayout>
  );
};

export default About;
