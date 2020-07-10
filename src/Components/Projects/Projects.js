import React from "react";
import "./Projects.css";
import { Container, Row, Col } from 'reactstrap';
import html from "./Icons/html5.png";
import css from "./Icons/css.png";
import bootstrap from "./Icons/bootstrat1.png";
import jQuery from "./Icons/jQuery.png";
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
import restoran from "./Image/restoran.jpg";
import Simg1 from "./AboutImg/Screenshot_1.jpg";
import Simg2 from "./AboutImg/Screenshot_2.jpg";
import Simg3 from "./AboutImg/Screenshot_3.jpg";
import Simg4 from "./AboutImg/Screenshot_4.jpg";
import Simg5 from "./AboutImg/Screenshot_5.jpg";
import Simg6 from "./AboutImg/Screenshot_6.jpg";
import Simg7 from "./AboutImg/Screenshot_7.jpg";
import Simg8 from "./AboutImg/Screenshot_8.jpg";
import Simg9 from "./AboutImg/Screenshot_9.jpg";
import Simg10 from "./AboutImg/Screenshot_10.jpg";
import Simg11 from "./AboutImg/Screenshot_11.jpg";
import Simg12 from "./AboutImg/Screenshot_12.jpg";
import Simg13 from "./AboutImg/Screenshot_13.jpg";
import Simg14 from "./AboutImg/Screenshot_14.jpg";
import Simg15 from "./AboutImg/Screenshot_15.jpg";
import Simg16 from "./AboutImg/Screenshot_16.jpg";
import Simg17 from "./AboutImg/Screenshot_17.jpg";
import Simg18 from "./AboutImg/Screenshot_18.jpg";
import Simg19 from "./AboutImg/Screenshot_19.jpg";
import Simg20 from "./AboutImg/Screenshot_20.jpg";


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
                {/*<Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>*/}
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
                {/*<Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>*/}
                    {/*<a  href="https://hakobyanviktoria8.github.io/1PSDfill/?fbclid=IwAR3VBETmSdJinxFIE_LZj3UzbUqJGrl08fLyjLXpcRXdviifG6Sy1Gr_05c">*/}
                        {/*<img className={"workImg"} src={work2} alt=""/>*/}
                    {/*</a>*/}
                {/*</Col>*/}
            {/*</Row>*/}
            {/*<hr/>*/}
            {/*restoran*/}
            <Row>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject p-3"}>
                    <h1 className={"projectName"}>101 CookBookS</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconReact"} src={react} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconReactStrap"} src={reactStrap} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <div className="aboutImg">
                        <img title={"Home"} className={"Simg p-1"} src={Simg1} alt=""/>
                        <img title={"About"} className={"Simg p-1"} src={Simg2} alt=""/>
                        <img title={"Menu"} className={"Simg p-1"} src={Simg3} alt=""/>
                        <img title={"Contact"} className={"Simg p-1"} src={Simg4} alt=""/>
                    </div>
                </Col>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/restoran/">
                        <img title={"See project"} className={"workImg"} src={restoran} alt=""/>
                    </a>
                    <h4 className={"mt-3"}>Used in the project</h4>
                    <ul className={"p-3"}>
                        <li>Function component: HOOK</li>
                        <li>Reactstrap Carousel</li>
                        <li>Fetch async - await  </li>
                        <li>API: https://forkify-api.herokuapp.com/api</li>
                        <li>Google Map</li>
                        <li>Send message Slack</li>
                    </ul>
                </Col>
            </Row>
            <hr/>
            {/*MovieReact*/}
            <Row>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>Movie React</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconReact"} src={react} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconReactStrap"} src={reactStrap} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <h4 className={"mt-3"}>Used in the project</h4>
                    <ul className={"p-3"}>
                        <li>Function component: HOOK</li>
                        <li>Fetch async - await, try - catch  </li>
                        <li>API: https://api.themoviedb.org/3/search/movie</li>
                    </ul>
                </Col>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/movieProjectReact/">
                        <img className={"workImg"} src={MovieReact} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*CovidMapReact*/}
            <Row>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>COVID-19</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconReact"} src={react} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconReactStrap"} src={reactStrap} alt=""/>
                    </div>
                    <h4 className={"mt-3"}>Used in the project</h4>
                    <ul className={"p-3"}>
                        <li>Function component: HOOK</li>
                        <li>Axios async - await, try - catch  </li>
                        <li>API: https://covid19.mathdro.id/api/</li>
                        <li>Ag Grid React</li>
                        <li>Time Ago</li>
                    </ul>
                </Col>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/covidMap/">
                        <img className={"workImg"} src={CovidMapReact} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*COVID-19 js*/}
            <Row>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>COVID-19</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>
                        <img className={"icon ml-1 iconBootstrap"} src={bootstrap} alt=""/>
                    </div>
                    <div className="aboutImg">
                        <img  className={"Simg p-1"} src={Simg5} alt=""/>
                        <img  className={"Simg p-1"} src={Simg6} alt=""/>
                        <img  className={"Simg p-1"} src={Simg7} alt=""/>
                        <img  className={"Simg p-1"} src={Simg8} alt=""/>
                    </div>
                </Col>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/CovidMapJS/?fbclid=IwAR3JRVnKFB9oJ-8_NUjPnLYoKBMV6UCl91fVyK32rPMufnF6pfSTKGnbj5M">
                        <img className={"workImg"} src={covidJS} alt=""/>
                    </a>
                    <h4 className={"mt-3"}>Used in the project</h4>
                    <ul className={"p-3"}>
                        <li>JS ES6</li>
                        <li>Fetch</li>
                        <li>API: https://covid19.mathdro.id/api/</li>
                        <li>Grafic</li>
                        <li>Search database</li>
                    </ul>
                </Col>
            </Row>
            <hr/>
            {/*LIBRARY-WEBSITE*/}
            <Row>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>Library</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>
                        <img className={"icon ml-1 iconBootstrap"} src={bootstrap} alt=""/>
                        <img className={"icon ml-1 iconjQuery"} src={jQuery} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <div className="aboutImg">
                        <img  className={"Simg p-1"} src={Simg9} alt=""/>
                        <img  className={"Simg p-1"} src={Simg11} alt=""/>
                        <img  className={"Simg p-1"} src={Simg11} alt=""/>
                        <img  className={"Simg p-1"} src={Simg12} alt=""/>
                    </div>
                </Col>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/LIBRARY-WEBSITE/?fbclid=IwAR0F13zIxWyuctC_p1UiUTHAfvqER1AfGVXDqktoxWducelHKGpMQ4if7AA">
                        <img className={"workImg"} src={library} alt=""/>
                    </a>
                    <h4 className={"mt-3"}>Used in the project</h4>
                    <ul className={"p-3"}>
                        <li>JS ES6</li>
                        <li>Carusel</li>
                        <li>API: https://www.googleapis.com/books/</li>
                        <li>Validation Regexp</li>
                        <li>Local Storage send user data</li>
                        <li>Search database</li>
                    </ul>
                </Col>
            </Row>
            <hr/>
            {/*Millionaire*/}
            <Row>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>Millionaire</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>
                        <img className={"icon ml-1 iconBootstrap"} src={bootstrap} alt=""/>
                    </div>
                    <div className="aboutImg">
                        <img  className={"Simg p-1"} src={Simg13} alt=""/>
                        <img  className={"Simg p-1"} src={Simg14} alt=""/>
                        <img  className={"Simg p-1"} src={Simg15} alt=""/>
                        <img  className={"Simg p-1"} src={Simg16} alt=""/>
                    </div>
                </Col>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://onemillionaire.herokuapp.com/?fbclid=IwAR1PUAw9lDbBXVRAF5Eyn45_tUEIzIg08J9zASSgLfUhZuuscPOubjvbvQY">
                        <img className={"workImg"} src={millionaire} alt=""/>
                    </a>
                    <h4 className={"mt-3"}>Used in the project</h4>
                    <ul className={"p-3"}>
                        <li>Data Array</li>
                    </ul>
                </Col>
            </Row>
            <hr/>
            {/*RockPaperScissors*/}
            <Row>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
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
                    <div className="aboutImg">
                        <img  className={"Simg p-1"} src={Simg17} alt=""/>
                        <img  className={"Simg p-1"} src={Simg18} alt=""/>
                    </div>
                </Col>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <a href="https://hakobyanviktoria8.github.io/RockPaperScissors/?fbclid=IwAR0N-alvlXwThEmRNvsh-D0IHrElNWE28KZ75Djmxx4poEh2ZsquI_dKahk">
                        <img className={"workImg"} src={game1} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*caruselCake*/}
            <Row>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>Viki's Cake</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>
                    </div>
                    <div className="aboutImg">
                        <img  className={"Simg p-1"} src={Simg19} alt=""/>
                        <img  className={"Simg p-1"} src={Simg20} alt=""/>
                    </div>
                    <h4 className={"mt-3"}>Used in the project</h4>
                    <ul className={"p-3"}>
                        <li>JS Carusel</li>
                    </ul>
                </Col>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <a href="https://hakobyanviktoria8.github.io/Carusel/?fbclid=IwAR2kgMtnXkFA-0Y8cHf2Ye6YdOMaT4LZv2UrAzBIuCIQsrV-dBWDwQQwHeo">
                        <img className={"workImg"} src={caruselCake} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*Time*/}
            <Row>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
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
                    <h4 className={"mt-3"}>Used in the project</h4>
                    <ul className={"p-3"}>
                        <li>Audio</li>
                        <li>Time</li>
                    </ul>
                </Col>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/Time/">
                        <img className={"workImg"} src={time} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*Exchange*/}
            <Row>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
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
                    <h4 className={"mt-3"}>Used in the project</h4>
                    <ul className={"p-3"}>
                        <li>ES6 JS</li>
                        <li>Fetch </li>
                        <li>API: https://api.exchangeratesapi.io</li>
                    </ul>
                </Col>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/Exchange/">
                        <img className={"workImg"} src={exchange} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*OpenWeatherXMLHttp*/}
            <Row>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>Open Weather</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <h4 className={"mt-3"}>Used in the project</h4>
                    <ul className={"p-3"}>
                        <li>ES6 JS</li>
                        <li>XMLHttpRequest </li>
                        <li>API: https://api.openweathermap.org/</li>
                    </ul>
                </Col>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/OpenWeatherXMLHttp/">
                        <img className={"workImg weatherMap"} src={weatherMap}  alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*FetchMovie*/}
            <Row>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
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
                    <h4 className={"mt-3"}>Used in the project</h4>
                    <ul className={"p-3"}>
                        <li>ES6 JS</li>
                        <li>Fetch await - async </li>
                        <li>API: https://omdb-api.now.sh/</li>
                    </ul>
                </Col>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/FetchMovie/?fbclid=IwAR2Q-yQRKXquLOf1laeLbwW1a0BxJOyvV698qbrbFqhAYoZR0G-WpCwni-I">
                        <img className={"workImg"} src={movieSearch} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*WeatherMapFetch*/}
            <Row>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>Weather Map</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconJavascript"} src={javascript} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <h4 className={"mt-3"}>Used in the project</h4>
                    <ul className={"p-3"}>
                        <li>ES6 JS</li>
                        <li>Fetch </li>
                        <li>API: https://api.openweathermap.org/</li>
                    </ul>
                </Col>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <a href="https://hakobyanviktoria8.github.io/WeatherMap/">
                        <img className={"workImg"} src={WeatherMapFetch} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*work3 PSD*/}
            <Row>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
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
                    <h4 className={"mt-3"}>Used in the project</h4>
                    <ul className={"p-3"}>
                        <li>PSD file</li>
                        <li>Photoshop</li>
                    </ul>
                </Col>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <a title="CSS,Bootstrap" href="https://hakobyanviktoria8.github.io/PSDExample6/?fbclid=IwAR1FSJUw5h6A0dz7qfbzvcdhHYo6MAk1r7BP1PoHJtltgFlE03D-o8DghT4">
                        <img  className={"workImg"} src={work3} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*STEVEN SNELL*/}
            <Row>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <h1 className={"projectName"}>STEVEN SNELL</h1>
                    <div className={"icons"}>
                        <img className={"icon ml-1 iconHtml"} src={html} alt=""/>
                        <img className={"icon ml-1 iconCss"} src={css} alt=""/>
                        <img className={"icon ml-1 iconBootstrap"} src={bootstrap} alt=""/>
                    </div>
                    <div className={"responsive"}>
                        <img  className={"responsiveImg"} src={responsive} alt=""/>
                    </div>
                    <h4 className={"mt-3"}>Used in the project</h4>
                    <ul className={"p-3"}>
                        <li>PSD file</li>
                        <li>Photoshop</li>
                    </ul>
                </Col>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/1PSDfill/?fbclid=IwAR3VBETmSdJinxFIE_LZj3UzbUqJGrl08fLyjLXpcRXdviifG6Sy1Gr_05c">
                        <img className={"workImg"} src={work2} alt=""/>
                    </a>
                </Col>
            </Row>
            <hr/>
            {/*polo360*/}
            <Row>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
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
                    <h4 className={"mt-3"}>Used in the project</h4>
                    <ul className={"p-3"}>
                        <li>PSD file</li>
                        <li>Photoshop</li>
                    </ul>
                </Col>
                <Col xs="12" sm="11" md="6" lg="6" xl="6" className={"colProject"}>
                    <a  href="https://hakobyanviktoria8.github.io/PSDExample/?fbclid=IwAR3H7QYtlkfwzSnIODbkFDLHNFfe2G8dGzbhjuDb8fSf3smpDLNoAbqPnRw">
                        <img className={"workImg"} src={work1} alt=""/>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}