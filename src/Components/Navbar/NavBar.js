import React, { useState } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link} from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar  light expand="md" className={"navigation"}>
                <Link className={"mx-3 link"} to="/">VHV</Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className={"mx-3 link"} to="/projects">Projects</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"mx-3 link"} to="/education">Education</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"mx-3 link"} to="/work-experience">Work Experience</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"mx-3 link"} to="/cv">CV</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;