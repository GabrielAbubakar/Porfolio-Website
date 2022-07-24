import styled from "styled-components";
import { motion } from "framer-motion";
import { devices } from '../../styled/mediaqueries/device'


const StyledIntroContainer = styled.div`
    position: relative;
    height: 100vh;
    margin-bottom: 10rem;


`

export const StyledIntroHeader = styled(motion.h1)`
    color: ${(props) => props.theme.colors.headerText};
    position: absolute;
    bottom: 0;
    width: 70%;
    font-size: 2.5625rem;
    font-weight: 400;
    position: absolute;
    bottom: 5rem;

    
    @media ${devices.laptop} {
        width: 85%;
    }

    @media ${devices.tablet} {
        width: 100%;
        font-size: 2rem;
    }

    @media ${devices.mobileL} {
        font-size: 1.6875rem;
    }

    .brown {
        color: ${(props) => props.theme.colors.primary};
        /* color: blue; */
        font-weight: 500;
    }

    .white {
        color: ${(props) => props.theme.colors.headerTextHighlight1};
        font-weight: 700;
    }
`

export const StyledIntroName = styled(motion.pre)`
    position: absolute;
    top: 4rem;
    right: 0;
    font-family: sans-serif;
    font-size: 14rem;
    font-weight: 600;
    line-height: 9rem;
    transform: translateX(300px);
    text-shadow: 1rem 1rem 0 ${(props) => props.theme.colors.primary};
    z-index: -1;

    -webkit-text-stroke: .2rem #999380;
    -webkit-text-fill-color: ${(props) => props.theme.colors.background};

    @media ${devices.tablet} {
        font-size: 10rem;
        line-height: 6rem;
        right: 3rem;
    }
`

export default StyledIntroContainer;
