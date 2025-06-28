import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import profilePhoto from "../assets/Img/photo2.jpg";

interface IntroSectionProps {
  // You can add props if needed
}

const IntroSection: React.FC<IntroSectionProps> = () => {
  return (
    <Container id="my-intro">
      <Row>
        <Column>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Hello>Hello ✌🏼,</Hello>
            <IamShahab>
              I'm <HighlightSpan>Shahab</HighlightSpan>
            </IamShahab>
          </div>
          <HomeText2>
            A
            <DynamicTextList>
              <ListItem>
                <HighlightSpan>Self-Taught</HighlightSpan>
              </ListItem>
              <ListItem>
                <HighlightSpan>Committed</HighlightSpan>
              </ListItem>
              <ListItem>
                <HighlightSpan>Passionate</HighlightSpan>
              </ListItem>
            </DynamicTextList>
            Software developer
          </HomeText2>
        </Column>

        <Column>
          <Avatar>
            <img src={profilePhoto} alt="Profile" />
          </Avatar>
        </Column>
      </Row>
    </Container>
  );
};

export default IntroSection;

// Keyframes
const slideAnimation = keyframes`
      100% {
        top: -72px;
      }
    `;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

const Row = styled.div<{ justifyCenter?: boolean }>`
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
`;

const Column = styled.div``;

const IamShahab = styled.span`
  font-size: 3.5rem;
  font-weight: 200;
  color: ${({ theme }) => theme.textColorPrimary};

  @media (max-width: 768px) {
    font-size: 2.5em;
    text-align: center;
  }
`;
const Hello = styled.span`
  font-size: 4rem;
  color: ${({ theme }) => theme.textColorPrimary};
  width: max-content;
  font-weight: 200;
`;

const Avatar = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
  display: inline-block;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const HomeText2 = styled.div`
  font-size: 1rem;
  width: 305px;
  display: flex;
  margin-top: 1rem;
  color: ${({ theme }) => theme.textColorPrimary};

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    margin: 40px 0px;
  }
`;

const HighlightSpan = styled.span`
  color: ${({ theme }) => theme.textColorSecondary};
  font-weight: 500;
`;

const DynamicTextList = styled.ul`
  overflow: hidden;
  width: auto;
  height: 20px;
  margin: 0px 10px;
  padding: 0px;

  @media (max-width: 330px) {
    width: 60%;
  }
`;

const ListItem = styled.li`
  position: relative;
  top: 0;
  animation: ${slideAnimation} 4s steps(3) infinite;
  list-style: none;

  span {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 100%;
      top: 1px;
      height: 100%;
      width: 100%;
      background: black;
    }
  }
`;
