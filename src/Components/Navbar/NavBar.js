import React, { useState, useEffect } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link} from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            window.scrollY > 50 ? setShow(true) : setShow(false)
        });
        return () => {
            window.removeEventListener("scroll")
        }
    },[]);

    return (
        <div className={`navigation ${show && "navigationBGColor"}`}>
            <Navbar  light expand="md" className={"navigation"}>
                <Link className={"p-3 link"} to="/">VHV</Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link className={"p-3 link"} to="/projects">Projects</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"p-3 link"} to="/education">Education</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"p-3 link"} to="/work-experience">Work Experience</Link>
                        </NavItem>
                        <NavItem>
                            <Link className={"p-3 link"} to="/cv">CV</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;