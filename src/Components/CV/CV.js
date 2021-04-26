import React from "react";
import "./CV.css";
import { Container, Row, Col } from 'reactstrap';
import AppCV from "./Downlod";
import {MyApp} from "./MyApp";

export function CV(props) {
    return(
        <div className={"cv"}>
            <Container fluid={true}>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12" xl="12">
                        <h1>MY CV</h1>
                       {/*<AppCV/>*/}
                       {/*<MyApp/>*/}
                    </Col>
                </Row>
                <Row>
                    <Col className={"cvWidth"} xs="12" sm="12" md="12" lg="12" xl="12">
                        <iframe src="https://hakobyanviktoria8.github.io/ViktoryaCV/" style={{border:"none",padding:"15px", height:"1200px", width:"100%", backgroundColor:"white"}}  title="CV">
                        </iframe>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}