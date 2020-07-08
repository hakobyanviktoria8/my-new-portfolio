import React from "react";
import "./Projects.css";
import { Container, Row, Col } from 'reactstrap';
import html from "./Icons/html5.png";
import css from "./Icons/css.png";
import bootstrap from "./Icons/bootstrat1.png";
import javascript from "./Icons/Javascript.png";
import react from "./Icons/react.png";
import reactStrap from "./Icons/reactStrap.png";
import responsive from "./Icons/responsive-design.png";
import work1 from "./Image/004.jpg";
import polo360 from "./Icons/POLO360.png";
import work2 from "./Image/001.jpg";
import work3 from "./Image/Screenshot_1.jpg";
import work3Logo from "./Icons/work3Logo.png";
import covidJS from "./Image/Screenshot_2.jpg";
import millionaire from "./Image/Millionaire.jpg";
import library from "./Image/Library.jpg";
import game1 from "./Image/Game1.jpg";
import caruselCake from "./Image/Cake.jpg";
import movieSearch from "./Image/MovieJS.jpg";
import weatherMap from "./Image/WeatherMap.jpg";
import exchange from "./Image/Exchange.jpg";
import time from "./Image/Time.jpg";
import CovidMapReact from "./Image/CovidMapReact.jpg";
import MovieReact from "./Image/MovieReact.jpg";
import WeatherMapFetch from "./Image/WeatherMapFetch.jpg";


export function Projects(props) {
    return(
        <Container className={"projects"}>
            <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <h1>PROJECTS</h1>
                </Col>
            </Row>
            <hr/>
            {/*<Row>*/}
                {/*<Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>*/}
                    {/*<h1 className={"projectName"}>POLO360</h1>*/}
                    {/*<div className={"icons"}>*/}
                        {/*<img className={"icon ml-1 iconHtml"} src={html} alt=""/>*/}
                        {/*<img className={"icon ml-1 iconCss"} src={css} alt=""/>*/}
                        {/*<img className={"icon ml-1 iconBootstrap"} src={bootstrap} alt=""/>*/}
                        {/*<img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>*/}
                        {/*<img className={"icon ml-1 iconReact"} src={react} alt=""/>*/}
                        {/*<img className={"icon ml-1 iconReactStrap"} src={reactStrap} alt=""/>*/}
                    {/*</div>*/}
                    {/*<div className={"responsive"}>*/}
                        {/*<img  className={"responsiveImg"} src={responsive} alt=""/>*/}
                    {/*</div>*/}
                    {/*<p>nkaragrutyun</p>*/}
                {/*</Col>*/}
                {/*<Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>*/}
                    {/*<a  href="https://hakobyanviktoria8.github.io/1PSDfill/?fbclid=IwAR3VBETmSdJinxFIE_LZj3UzbUqJGrl08fLyjLXpcRXdviifG6Sy1Gr_05c">*/}
                        {/*<img className={"workImg"} src={work2} alt=""/>*/}
                    {/*</a>*/}
                {/*</Col>*/}
            {/*</Row>*/}
            {/*<hr/>*/}


            {/*MovieReact*/}
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>Movie React</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconReact"} src={react} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconReactStrap"} src={reactStrap} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <p>Movie React</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/movieProjectReact/">
                        <img className={"workImg"} src={MovieReact} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*CovidMapReact*/}
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>COVID-19</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconReact"} src={react} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconReactStrap"} src={reactStrap} alt=""/>
                    </div>
                    <p>CovidMap, React, ag grid</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/covidMap/">
                        <img className={"workImg"} src={CovidMapReact} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*COVID-19 js*/}
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>COVID-19</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>
                        <img className={"icon ml-1 iconBootstrap"} src={bootstrap} alt=""/>
                    </div>
                    <p>CovidMap, JS, Api, search country name, grafik</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/CovidMapJS/?fbclid=IwAR3JRVnKFB9oJ-8_NUjPnLYoKBMV6UCl91fVyK32rPMufnF6pfSTKGnbj5M">
                        <img className={"workImg"} src={covidJS} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*LIBRARY-WEBSITE*/}
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>Library</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>
                        <img className={"icon ml-1 iconBootstrap"} src={bootstrap} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <p>Library, JS, api search, localStorege, registration, @st grancvac ararkayi tvyalneri cuyc tal</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/LIBRARY-WEBSITE/?fbclid=IwAR0F13zIxWyuctC_p1UiUTHAfvqER1AfGVXDqktoxWducelHKGpMQ4if7AA">
                        <img className={"workImg"} src={library} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*Millionaire*/}
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>Millionaire</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>
                        <img className={"icon ml-1 iconBootstrap"} src={bootstrap} alt=""/>
                    </div>
                    <p>Millionaire, JS</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://onemillionaire.herokuapp.com/?fbclid=IwAR1PUAw9lDbBXVRAF5Eyn45_tUEIzIg08J9zASSgLfUhZuuscPOubjvbvQY">
                        <img className={"workImg"} src={millionaire} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*RockPaperScissors*/}
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>Game RPS</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>
                        <img className={"icon ml-1 iconBootstrap"} src={bootstrap} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <p>Game, JS</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <a href="https://hakobyanviktoria8.github.io/RockPaperScissors/?fbclid=IwAR0N-alvlXwThEmRNvsh-D0IHrElNWE28KZ75Djmxx4poEh2ZsquI_dKahk">
                        <img className={"workImg"} src={game1} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*caruselCake*/}
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>Viki's Cake</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>
                    </div>
                    <p>Cake, Carusel, JS</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <a href="https://hakobyanviktoria8.github.io/Carusel/?fbclid=IwAR2kgMtnXkFA-0Y8cHf2Ye6YdOMaT4LZv2UrAzBIuCIQsrV-dBWDwQQwHeo">
                        <img className={"workImg"} src={caruselCake} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*Time*/}
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>Time</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconBootstrap"} src={bootstrap} alt=""/>
                        <img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <p>Time ,JS, Audio</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/Time/">
                        <img className={"workImg"} src={time} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*Exchange*/}
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>Exchange</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>
                        <img className={"icon ml-1 iconBootstrap"} src={bootstrap} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <p>Exchange, JS, Api</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/Exchange/">
                        <img className={"workImg"} src={exchange} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*OpenWeatherXMLHttp*/}
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>Open Weather</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <p>OpenWeatherXMLHttp</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/OpenWeatherXMLHttp/">
                        <img className={"workImg weatherMap"} src={weatherMap}  alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*FetchMovie*/}
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>Movie Search</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>
                        <img className={"icon ml-1 iconBootstrap"} src={bootstrap} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <p>Movie, JS, Api</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/FetchMovie/?fbclid=IwAR2Q-yQRKXquLOf1laeLbwW1a0BxJOyvV698qbrbFqhAYoZR0G-WpCwni-I">
                        <img className={"workImg"} src={movieSearch} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*WeatherMapFetch*/}
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>Weather Map</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <p>OpenWeatherMapFetch</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <a href="https://hakobyanviktoria8.github.io/WeatherMap/">
                        <img className={"workImg"} src={WeatherMapFetch} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*work3 PSD*/}
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>
                        <img src={work3Logo} alt=""/>
                    </h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconBootstrap"} src={bootstrap} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <p>nkaragrutyun</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <a title="CSS,Bootstrap" href="https://hakobyanviktoria8.github.io/PSDExample6/?fbclid=IwAR1FSJUw5h6A0dz7qfbzvcdhHYo6MAk1r7BP1PoHJtltgFlE03D-o8DghT4">
                        <img  className={"workImg"} src={work3} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*STEVEN SNELL*/}
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>STEVEN SNELL</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconBootstrap"} src={bootstrap} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <p>nkaragrutyun</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/1PSDfill/?fbclid=IwAR3VBETmSdJinxFIE_LZj3UzbUqJGrl08fLyjLXpcRXdviifG6Sy1Gr_05c">
                        <img className={"workImg"} src={work2} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*polo360*/}
            <Row>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>
                        <img src={polo360} alt=""/>
                    </h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconBootstrap"} src={bootstrap} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <p>nkaragrutyun</p>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/PSDExample/?fbclid=IwAR3H7QYtlkfwzSnIODbkFDLHNFfe2G8dGzbhjuDb8fSf3smpDLNoAbqPnRw">
                        <img className={"workImg"} src={work1} alt=""/>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}