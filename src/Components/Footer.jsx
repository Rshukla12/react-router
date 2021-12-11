import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Icons
import Facebook from "../Icons/facebook.svg";
import Instagram from "../Icons/instagram.svg";
import Twitter from "../Icons/twitter.svg";
import RSS from "../Icons/rss.svg";
import IconLink from "./IconLink";

const FooterElem = styled.div`
    position: absolute;
    bottom: 0;
    background-color:  #0288d1;
    display: flex;
    width: 80%;

    padding: 1% 10%;
    gap: 10%;
`;

const FooterColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    gap: 0.1rem;
    text-align: left;
    & > * {
        text-decoration: none;
        color: #e3f2fd;
        padding: 0.25rem 1rem;
    }
    & > div {
        text-decoration: none;
        font-size: 1.25rem;
        color: #212121;
        padding: 1rem;
    }
    & > *:hover {
        color: #212121;
    }
`;

const Footer = () => {
    return (
        <FooterElem>
            <FooterColumn>
                <Link to="/">Home</Link>
            </FooterColumn>

            <FooterColumn>
                <div>Social Media</div>
                <IconLink src={Instagram} title="Instagram" />
                <IconLink src={Facebook} title="Facebook" />
                <IconLink src={Twitter} title="Twitter" />
                <IconLink src={RSS} title="Blog" />
            </FooterColumn>
            
            <FooterColumn>
                <div>Products</div>
                <Link to="/categories/smartphones">Smartphones</Link>
                <Link to="/categories/laptops">Laptops</Link>
                <Link to="/categories/storage">Storage Devices</Link>     
                <Link to="/categories/earphone">Earphone</Link>
                <Link to="/categories/peripherals">Peripherals</Link>
            </FooterColumn>

            <FooterColumn>
                <div>More Info</div>
                <Link to="/#">FAQ</Link>
                <Link to="/#">About Us</Link>
                <Link to="/#">Contact Us</Link>
                <Link to="/#">Join Us</Link>
            </FooterColumn>
        </FooterElem>
    )
}

export default Footer;