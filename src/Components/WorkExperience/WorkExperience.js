import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./WorkExperience.css";

export function WorkExperience(props) {
    return(
        <div className="workExperience">
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <h1>WORK EXPERIENCE</h1>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs="12" sm="10" md="8" lg="8" xl="8">
                        <h3>"VooDoo Programming LLC" development company</h3>
                        <p>08.01.2021 - 15.03.2021</p>
                    </Col>
                    <Col xs="12" sm="10" md="4" lg="4" xl="4">
                        {/*<img src="Image/Screenshot_6.png" alt=""/>*/}
                        <h3>Front-end developer</h3>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs="12" sm="10" md="8" lg="8" xl="8">
                        <h3>NAS RA L.Mnjoyan Organic and Pharmaceutical Chemistry Technological Center</h3>
                        <p>01.06.2013 - 01.05.2015</p>
                    </Col>
                    <Col xs="12" sm="10" md="4" lg="4" xl="4">
                        {/*<img src="Image/Screenshot_6.png" alt=""/>*/}
                        <h3>Junior Scientist</h3>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs="12" sm="10" md="8" lg="8" xl="8">
                        <h3>"Al & Al" LLC</h3>
                        <p>08.01.2013 - 31.04.2013</p>
                    </Col>
                    <Col  xs="12" sm="10" md="4" lg="4" xl="4">
                        {/*<img src="Image/Screenshot_6.png" alt=""/>*/}
                        <h3>Accountant</h3>
                    </Col>
                </Row>
                <hr/>
                <Row>
                    <Col xs="12" sm="10" md="8" lg="8" xl="8">
                        <h3>"Arkofarm, Vip Concern Drug Center"</h3>
                        <p>01.06.2012 - 20.12.2012</p>
                    </Col>
                    <Col xs="12" sm="10" md="4" lg="4" xl="4">
                        {/*<img src="Image/Screenshot_6.png" alt=""/>*/}
                        <h3>Marketing manager</h3>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}