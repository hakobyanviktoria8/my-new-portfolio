import React from "react";
import "./Projects.css";
import { Container, Row, Col } from 'reactstrap';

export function Projects(props) {
    return(
        <Container>
            <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12" className={"col"}>
                    <h1>My projects</h1>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"col"}>
                    <h2> project Name</h2>
                    <div>
                        icons
                    </div>
                    <p>nkaragrutyun</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"col"}>
                    <a href="#"><img src="" alt=""/>img</a>
                </Col>
            </Row>
        </Container>
    )
}