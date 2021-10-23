// Modules
import React, { useState } from "react";
import { Link } from 'react-router-dom';

// Components
import {
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';

// Styles

function Navigation(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Education task</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <Link to="/login">Логин</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/news">Новости</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/profile">Профиль</Link>
                    </NavItem>
                </Nav>
                <Button color="primary ms-auto">Войти</Button>
            </Collapse>
        </Navbar>
    )
}

export default Navigation;
