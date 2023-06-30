import React from "react";
import { StyledCard,StyledCardImgContainer,StyledCardBodyContainer,StyledCardBodyTitle,StyledCardBodyContent, StyledCardButtonContainer } from "./style";
import { PlaySvg } from "../../shared/svg";
const LargeGameCard = () => {
    return (
        <StyledCard>
            <a className="flex" href="/">
                <StyledCardImgContainer>
                    <img src={`${process.env.REACT_APP_CDN_IMAGES_PATH}/specialgames-img-mob.png`} alt="" />
                </StyledCardImgContainer>
                <StyledCardBodyContainer>
                    <StyledCardBodyTitle>
                        Special Games
                    </StyledCardBodyTitle>
                    <StyledCardBodyContent>
                        Feel the thrill while playing! Choose from an array from well-loved classics or try something new.
                    </StyledCardBodyContent>
                    <StyledCardButtonContainer>
                        <PlaySvg />
                        <small>Play Now</small>
                    </StyledCardButtonContainer>
                </StyledCardBodyContainer>
            </a>
        </StyledCard>
    );
};

export default LargeGameCard;
