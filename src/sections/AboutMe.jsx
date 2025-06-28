import styled from "styled-components";

export default function AboutMe() {
  return (
    <AboutMeDiv>
      <H2>The Developer Behind the Code</H2>
      <FirstDiv>
        I'm a 27-year-old{" "}
        <span className="highlighted-text-primary">self-taught</span> developer
        with 3.9 years of experience crafting{" "}
        <span className="highlighted-text-secondary">
          responsive web applications
        </span>{" "}
        <br /> that work the way users expect them to.
      </FirstDiv>
      <FirstDiv>
        What started as{" "}
        <span className="highlighted-text-primary">
          curiosity about how websites work
        </span>{" "}
        has become a genuine passion for building seamless digital experiences.{" "}
        <br /> I'm driven by a{" "}
        <span className="highlighted-text-secondary">"never settle"</span>{" "}
        mindset—constantly{" "}
        <span className="highlighted-text-primary">
          exploring new technologies
        </span>{" "}
        <br /> and pushing beyond what I built yesterday.
      </FirstDiv>
      <FirstDiv>
        I approach each project with{" "}
        <span className="highlighted-text-secondary">honesty</span> about what I
        know and{" "}
        <span className="highlighted-text-primary">
          excitement about what I'm about to discover.
        </span>
      </FirstDiv>
    </AboutMeDiv>
  );
}

const H2 = styled.h2`
  margin-bottom: 85px;

  /* @media (max-width: 768px) {
    font-size: 2rem;
  } */
`;
const AboutMeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const FirstDiv = styled.div`
  width: 90%;
  color: ${({ theme }) => theme.textColorPrimary};
  font-size: 1.4rem;
  text-align: center;
  line-height: 1.8;
  margin-bottom: 20px;
  font-weight: 300;
`;

// <!-- I'm a 27-year-old self-taught developer with 3.9 years of experience crafting responsive web applications that work the way users expect them to.
// What started as curiosity about how websites work has become a genuine passion for building seamless digital experiences. I'm driven by a "never settle" mindset—constantly exploring new technologies and pushing beyond what I built yesterday.
// I approach each project with honesty about what I know and excitement about what I'm about to discover. -->
