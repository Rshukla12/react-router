import React from "react";
import styled from "styled-components";

const BannerElem = styled.div`
    width: 100%;
    position: absolute;
    background-color: #d31040;
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
    top: 3.25rem;
    z-index: -1;
    color: #f4f4f4;
`;

const Banner = () => {

    return (
        <BannerElem>
            <p>Now or Never, Buy Peripherals as gifts for family & friends before Christmas Crunch at 30% Discount.</p>
        </BannerElem>
    )
}

export default Banner;