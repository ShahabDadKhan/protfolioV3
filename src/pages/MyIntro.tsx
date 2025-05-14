import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import profilePhoto from "../assets/Img/photo2.jpg";

interface IntroSectionProps {
  // You can add props if needed
}

const IntroSection: React.FC<IntroSectionProps> = () => {
  const [showGoToTop, setShowGoToTop] = useState<boolean>(false);
  const goToTopRef = useRef<HTMLAnchorElement>(null);

  const scrollIntoDiv = () => {
    if (showGoToTop) {
      document
        .getElementById("app-bar")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      document
        .getElementById("about-me")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollListener = () => {
    const scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;

    if (scrollTop > 500) {
      // Hide go to top on mobile and tablet when keypad comes
      if (window.innerWidth <= 800 && window.innerHeight <= 600) {
        setShowGoToTop(false);
      } else {
        setShowGoToTop(true);
      }
    } else {
      setShowGoToTop(false);
    }
  };

  const rotateGoToTop = (value: boolean) => {
    if (!goToTopRef.current) return;

    goToTopRef.current.style.transitionDuration = "0.3s";
    goToTopRef.current.style.transform = value
      ? "rotate(0deg)"
      : "rotate(-180deg)";
  };

  // Handle scroll events
  useEffect(() => {
    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      // Add your resize logic here if needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Rotate effect when showGoToTop changes
  useEffect(() => {
    rotateGoToTop(showGoToTop);
  }, [showGoToTop]);

  return (
    <Container id="my-intro">
      <Row>
        <Column
          orderSm={1}
          order={2}
          alignSelf="center"
          cols={12}
          sm={7}
          md={4}
        >
          <HomeText1>
            Hello ✌🏼, <br />
            I'm <HighlightSpan>Shahab</HighlightSpan>
          </HomeText1>
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

        <Column
          textCenter
          orderSm={2}
          order={1}
          cols={10}
          offsetMd={2}
          sm={4}
          md={4}
        >
          <Avatar>
            <img src={profilePhoto} alt="Profile" />
          </Avatar>
        </Column>
      </Row>

      <Row justifyCenter>
        <ScrollToTop
          id="goToTop"
          ref={goToTopRef}
          onClick={scrollIntoDiv}
          data-cursor-hover
        >
          <Icon>↑</Icon>
        </ScrollToTop>
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
  height: 84vh;
`;

const Row = styled.div<{ justifyCenter?: boolean }>`
  height: 95%;
  display: flex;
  align-items: center;
  ${(props) => props.justifyCenter && "justify-content: center"};
`;

const Column = styled.div<{
  order?: number;
  orderSm?: number;
  alignSelf?: string;
  cols?: number;
  sm?: number;
  md?: number;
  offsetMd?: number;
  textCenter?: boolean;
}>`
  ${(props) => props.cols && `width: ${(props.cols / 12) * 100}%`};
  ${(props) => props.textCenter && "text-align: center"};
  ${(props) => props.order && `order: ${props.order}`};
  ${(props) => props.alignSelf && `align-self: ${props.alignSelf}`};

  @media (min-width: 600px) {
    ${(props) => props.orderSm && `order: ${props.orderSm}`};
    ${(props) => props.sm && `width: ${(props.sm / 12) * 100}%`};
  }

  @media (min-width: 960px) {
    ${(props) => props.md && `width: ${(props.md / 12) * 100}%`};
    ${(props) =>
      props.offsetMd && `margin-left: ${(props.offsetMd / 12) * 100}%`};
  }
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

const HomeText1 = styled.p`
  font-size: 62px;
  font-weight: 200;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 42px;
  }

  @media (max-width: 400px) {
    font-size: 32px;
  }
`;

const HomeText2 = styled.div`
  width: 305px;
  display: flex;

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
  color: #ffeb3b;
  font-weight: 500;
`;

const DynamicTextList = styled.ul`
  overflow: hidden;
  width: 32%;
  height: 20px;
  padding-left: 4px;
  margin-right: 4px;

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

const ScrollToTop = styled.a`
  text-decoration: none;
  position: fixed;
  bottom: 50px;
  right: 30px;
  cursor: pointer;
`;

const Icon = styled.i`
  color: white;
  font-size: 24px;

  &:hover {
    color: #ffeb3b !important;
  }
`;
