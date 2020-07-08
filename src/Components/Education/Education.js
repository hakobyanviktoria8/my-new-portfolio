import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./Education.css";
import iconV from "./Screenshot_6.png";

export function Education(props) {
    return(
        <div className="education">
        <Container>
            <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <h1>EDUCATION</h1>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm="10" md="7" lg="7" xl="7">
                    <h3>Armenian Code Academy</h3>
                    <p>12.18.2019 - 30.06.2020</p>
                </Col>
                <Col xs="12" sm="10" md="5" lg="5" xl="5">
                    {/*<img src={iconV} alt=""/>*/}
                    <h3>Higher Certificate</h3>
                    <p>JS, React Developer</p>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col xs="12" sm="10" md="7" lg="7" xl="7">
                    <h3>BeeOnCode</h3>
                    <p>01.02.2019 - 30.07.2019</p>
                </Col>
                <Col xs="12" sm="10" md="5" lg="5" xl="5">
                    {/*<img src={iconV} alt=""/>*/}
                    <h3>Higher Certificate</h3>
                    <p>Full-Stack Developer</p>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col xs="12" sm="10" md="7" lg="7" xl="7">
                    <h3>Arkofarm</h3>
                    <p>01.02.2012 - 30.06.2012</p>
                </Col>
                <Col xs="12" sm="10" md="5" lg="5" xl="5">
                    {/*<img src={iconV} alt=""/>*/}
                    <h3>Higher Certificate</h3>
                    <p>Pharmacy, Manager</p>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col xs="12" sm="10" md="7" lg="7" xl="7">
                    <h3>Armenian State Pedagogical University</h3>
                    <p>01.09.2011 - 30.05.2013</p>
                </Col>
                <Col xs="12" sm="10" md="5" lg="5" xl="5">
                    {/*<img src={iconV} alt=""/>*/}
                    <h3>National Diploma</h3>
                    <p>Chemistry teacher</p>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col xs="12" sm="10" md="7" lg="7" xl="7">
                    <h3>National Polytechnic University of Armenia</h3>
                    <p>01.09.2007 - 30.05.2011</p>
                </Col>
                <Col xs="12" sm="10" md="5" lg="5" xl="5">
                    {/*<img src={iconV} alt=""/>*/}
                    <h3>National Diploma</h3>
                    <p>Chemist technologist</p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}