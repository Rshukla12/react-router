import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


// Icons
import Shopping from "../Icons/shopping.svg";
import IconLink from "./IconLink";

const data = [
    {
        route: "Home",
        to: "/"
    },
    {
        route: "Smartphones",
        to: "/categories/smartphones"
    },
    {
        route: "Laptops",
        to: "/categories/laptops"
    },
    {
        route: "Earphones",
        to: "/categories/earphones"
    },
    {
        route: "Storage Devices",
        to: "/categories/storage"
    },
    {
        route: "Peripherals",
        to: "/categories/peripherals"
    },
    {
        route: "About Us",
        to: "/about"
    },
    {
        route: "FAQ",
        to: "/faq"
    },
    {
        route: "Contact Us",
        to: "/contact"
    },
    {
        route: "Cart",
        to: "/cart",
        icon: true
    }
];

const Nav = styled.div`
    width: 100%;
    position: fixed;
    background-color: #0288d1;
    display: flex;
    border-bottom: 1px solid black;
    justify-content: end;
    margin-bottom: 1rem;
    & > * {
        text-decoration: none;
        color: #e3f2fd;
        padding: 1rem 2rem; 
    }
    & > *:nth-child(1) {
        position: absolute;
        left: 0rem;
    }
    & > *:hover {
        background-color: #42a5f5;
        color: #212121;
    }
`;

const Navbar = () => {

    return (
        <Nav>
            {
                data.map( link => (
                    link.icon ? (
                        <IconLink to="/cart" title="Cart" src={Shopping} />
                    ) : (
                        <Link key={link.to} to={link.to}>{link.route}</Link>
                    )
                ))
            }
        </Nav>
    )
}

export default Navbar;