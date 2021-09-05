import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import {Header} from "./Components/Header/Header";
import {Projects} from "./Components/Projects/Projects";
import {Education} from "./Components/Education/Education";
import {WorkExperience} from "./Components/WorkExperience/WorkExperience";
import {CV} from "./Components/CV/CV";

export default function App() {
    return (
        <Router>
            <div className={"bigDiv"}>
                <NavBar/>
                <Switch>
                    <Route exact path="/">
                        <Header/>
                    </Route>
                    <Route exact path="/my-new-portfolio">
                        <Header/>
                    </Route>
                    <Route path="/projects">
                        <Projects/>
                    </Route>
                    <Route path="/education">
                        <Education/>
                    </Route>
                    <Route path="/work-experience">
                        <WorkExperience/>
                    </Route>
                    <Route path="/cv">
                        <CV/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
