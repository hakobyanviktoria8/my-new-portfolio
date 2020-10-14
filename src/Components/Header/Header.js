import React from "react";
import "./Header.css";
import { Container, Row, Col } from 'reactstrap';
import imgCV from "./Images/imgCV2.jpg";
import linkedin from "./Images/linkedin.png";
import imgGit from "./Images/github.png";
import address from "./Images/address.png";
import phone from "./Images/phone.png";
import gmail from "./Images/gmail.png";

export function Header(props) {
    return (
        <div className={"header"}>
            <Container>
                <Row>
                    <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"col"}>
                        <Row>
                            <Col xs="12" sm="12" md="12" lg="12" xl="12" className={"col imgCol"}>
                                <img className={"imgCV"} src={imgCV} alt=""/>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="12" md="12" lg="12" xl="12" className={"col iconCol"}>
                                <a href="https://www.linkedin.com/in/viktorya-hakobyan-8a6128199">
                                    <img src={linkedin} className={"linkedin"}/>
                                </a>
                                <a href="https://github.com/hakobyanviktoria8">
                                    <img src={imgGit} className={"github"}/>
                                </a>
                                <a href="https://edabit.com/user/3aZvfgr2H2WF8Yog2">
                                    <span className={"edabitDiv"}>
                                        <b className="edabit">E</b>
                                    </span>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"col"}>
                        <Row>
                            <Col xs="12" sm="12" md="12" lg="12" xl="12" className={"col textCol"}>
                                <div className={"headerText"}>
                                    <h1 className={"name"}>Viktorya Hakobyan Vardani</h1>
                                    <h3>Front End Developer</h3>
                                    <h5>/ Javascript / React /</h5>
                                    <p> </p>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="12" md="12" lg="12" xl="12" className={"col contactCol"}>
                                <div className="addres">
                                    <img src={address} />
                                    <span className="ml-4 textHeader">25 apt. 1b. S. Taronts Shengavit Yerevan Armenia</span>
                                </div>
                                <div className="mt-2 phone">
                                    <img src={phone} />
                                    <span className="ml-4 textHeader">(+374 ) 94 - 333 - 518</span>
                                </div>
                                <div className="mt-2 gmail">
                                    <img src={gmail} />
                                    <span className="ml-4 textHeader">hakobyanviktorya8@gmail.com</span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
