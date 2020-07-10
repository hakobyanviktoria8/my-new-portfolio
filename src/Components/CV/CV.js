import React from "react";
import "./CV.css";
import { Container, Row, Col } from 'reactstrap';

export function CV(props) {
    return(
        <div className={"cv"}>
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <h1>MY CV</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <iframe src="https://hakobyanviktoria8.github.io/ViktoryaCV/" style={{border:"none",padding:"15px", height:"1200px", backgroundColor:"white"}} width="1000" title="CV">
                        </iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}