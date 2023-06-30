import React from "react";
import Content from "../../layout/content";
import { Link } from 'react-router-dom';
import { BannerTwitterSvg, BannerFacebookSvg, BannerTelegramSvg, BannerYouTubeSvg,BannerInstagramSvg,BannerAnchorSvg,BannerSpotifySvg } from "../../shared/svg";
import {StyledContainerFluid,StyledBannerContainer,StyledLargeGameContainer,StyledLargeGameBlock,StyledLargeGameList,StyledNewsUpdate,StyledNewsUpdateContainer,StyledBannerImg, StyledBannerAdd,StyledBannerText,StyledBannerAddTitle, StyledBannerAddSocialIcons } from './style' 
import Marquee from "react-fast-marquee";
import LargeGameCard from "../../components/largegamecard";

const Home = () => {
    return (
        <>
        <StyledContainerFluid >
           <StyledNewsUpdate>
                <StyledNewsUpdateContainer>
                    <h4>
                    News & Updates
                    </h4>
                <Marquee>
                    test
                </Marquee>
                </StyledNewsUpdateContainer>
           </StyledNewsUpdate>
           <StyledBannerContainer>
             <StyledBannerImg>
                 <img src={`${process.env.REACT_APP_CDN_IMAGES_PATH}/Banner-HR-Web.jpg`} alt="" />
                 <StyledBannerText>
                    <h4>Get up to ₱10</h4>
                    <h4>in Loyalty Credit</h4>
                    <h4>every week</h4>
                    <p>Get up to ₱10 in Loyalty Credit on monday </p>
                    <p>when you place six qualifying bets the week before.</p>
                 </StyledBannerText>
             </StyledBannerImg>
             <StyledBannerAdd>
                 <StyledBannerAddTitle>
                   <h6>JOIN OUR</h6>
                   <h3>SPORTS BETTING COMMUNITY</h3>
                 </StyledBannerAddTitle>
                 <StyledBannerAddSocialIcons>
                 <ul>
                        <li>
                            <Link to="/">
                                <BannerTwitterSvg/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <BannerFacebookSvg/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <BannerTelegramSvg/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <BannerYouTubeSvg/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <BannerInstagramSvg/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <BannerAnchorSvg/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <BannerSpotifySvg/>
                            </Link>
                        </li>
                 </ul>
                 </StyledBannerAddSocialIcons>
             </StyledBannerAdd>
           </StyledBannerContainer>
           <StyledLargeGameContainer>
                {/* <StyledLargeGameBlock> */}
                    <StyledLargeGameList>
                        <LargeGameCard />
                        <LargeGameCard />
                        <LargeGameCard />
                        <LargeGameCard />
                    </StyledLargeGameList>
                {/* </StyledLargeGameBlock> */}
           </StyledLargeGameContainer>
        </StyledContainerFluid>
        </>
    );
};

export default Home;
