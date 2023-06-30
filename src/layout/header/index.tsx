import React from "react";
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import Button from '../../components/ui/button'
import { LoginSvg, SignUpSvg, WelcomeSvg, ClockSvg } from "../../shared/svg";
import { StyledHeaderWrapper, StyledHeaderContainer, StyledLogoContainer, StyledFlexContainer, StyledFlexContainer1, StyledWelcomeContainer, StyledMarqueeContainer, StyledParagraph, StyledHeaderButtonGroup } from './style'
import { styled } from "styled-components";

const Header = () => {
  
    return (
        <>
            <StyledHeaderWrapper>
                <StyledHeaderContainer>
                    <StyledLogoContainer>
                        <Link to="/">
                            <strong className="desk_logo">
                                <img src={`${process.env.REACT_APP_CDN_IMAGES_PATH}/logo.svg`} alt="" />
                            </strong>
                            <strong className="mobile_logo">
                                <img src={`${process.env.REACT_APP_CDN_IMAGES_PATH}/mobile_logo.svg`} alt="" />
                            </strong>
                        </Link>
                    </StyledLogoContainer>
                    <StyledFlexContainer>
                        <StyledWelcomeContainer>
                            <StyledFlexContainer1>
                                <StyledMarqueeContainer>
                                    <Marquee>
                                        Welcome to FairPlay.&nbsp;<span className="flex">u-247</span>
                                        <span className="flex">&nbsp;please enjoy an extraordinary gaming experience</span>
                                    </Marquee>
                                    <WelcomeSvg />
                                </StyledMarqueeContainer>
                                <StyledParagraph><span className="js-clock"> 29/06/2023 10:50:43 (UTC+5.5) </span><ClockSvg /></StyledParagraph>
                            </StyledFlexContainer1>

                        </StyledWelcomeContainer>
                    </StyledFlexContainer>
                    <StyledHeaderButtonGroup>
                        <Button
                            onClick={() => alert('Button 1 is clicked !')}
                            variant="loginbtn"
                        > <LoginSvg />Login </Button>
                        <Button
                            onClick={() => alert('Button 1 is clicked !')}
                            variant="signupbtn"
                        > <SignUpSvg />Signup </Button>
                    </StyledHeaderButtonGroup>
                </StyledHeaderContainer>
            </StyledHeaderWrapper>
        </>
    );
}
export default Header;