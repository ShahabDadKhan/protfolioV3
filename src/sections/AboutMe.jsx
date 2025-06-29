import styled from "styled-components";
import ShakyIcon from "../components/ShakyIcon";
import HtmlIcon from "../assets/svg/HtmlIcon";
import CssIcon from "../assets/svg/CssIcon";
import SassIcon from "../assets/svg/SassIcon";
import JavaScriptIcon from "../assets/svg/JavaScriptIcon";
import VueIcon from "../assets/svg/VueIcon";
import NuxtIcon from "../assets/svg/NuxtIcon";
import ReactIcon from "../assets/svg/ReactIcon";
import NodeIcon from "../assets/svg/NodeIcon";
import VuetifyIcon from "../assets/svg/VuetifyIcon";
import GithubIcon from "../assets/svg/GithubIcon";
import TypeScriptIcon from "../assets/svg/TypeScriptIcon";
import TailwindIcon from "../assets/svg/TailwindIcon";
// import MoonIcon from "../assets/svg/MoonIcon";
// import MoonIcon from "../assets/svg/MoonIcon";

export default function AboutMe() {
  //   const iconData = [
  //     {
  //       id: "html",
  //       name: "Html",
  //       icon: <HtmlIcon />,
  //     },
  //     {
  //       id: "css",
  //       name: "Css",
  //       icon: <CssIcon />,
  //     },
  //     {
  //       id: "scss",
  //       name: "Scss",
  //       icon: <SassIcon />,
  //     },
  //     {
  //       id: "javascript",
  //       name: "Javascript",
  //       icon: <JavaScriptIcon />,
  //     },
  //     {
  //       id: "vue",
  //       name: "Vue",
  //       icon: <VueIcon />,
  //     },
  //     {
  //       id: "nuxt",
  //       name: "Nuxt",
  //       icon: <NuxtIcon />,
  //     },
  //     {
  //       id: "react",
  //       name: "React",
  //       icon: <ReactIcon />,
  //     },
  //     {
  //       id: "node",
  //       name: "Node",
  //       icon: <NodeIcon />,
  //     },
  //     {
  //       id: "vuitify",
  //       name: "Vuetify",
  //       icon: <VuetifyIcon />,
  //     },
  //     {
  //       id: "github",
  //       name: "Github",
  //       icon: <GithubIcon />,
  //     },
  //     {
  //       id: "typescript",
  //       name: "TypeScript",
  //       icon: <TypeScriptIcon />,
  //     },
  //     {
  //       id: "tailwind",
  //       name: "Tailwind",
  //       icon: <TailwindIcon />,
  //     },
  //   ];

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
      <ToolsDiv>
        <h3>My Current Tools:</h3>
        <ToolList>
          <li>
            <ShakyIcon icon={<HtmlIcon />} toolTip="Html" size={50} />
          </li>
          <li>
            <ShakyIcon icon={<CssIcon />} toolTip="Css" size={50} />
          </li>{" "}
          <li>
            <ShakyIcon icon={<SassIcon />} toolTip="SCSS/LESS" size={50} />
          </li>{" "}
          <li>
            <ShakyIcon
              icon={<JavaScriptIcon />}
              toolTip="JavaScript"
              size={50}
            />
          </li>{" "}
          {/* <li>
            <ShakyIcon icon={<VueIcon />} toolTip="Vue" size={50} />
          </li>{" "} */}
          {/* <li>
            <ShakyIcon icon={<NuxtIcon />} toolTip="Nuxt" size={50} />
          </li>{" "} */}
          <li>
            <ShakyIcon icon={<ReactIcon />} toolTip="React" size={50} />
          </li>{" "}
          <li>
            <ShakyIcon icon={<NodeIcon />} toolTip="Node" size={50} />
          </li>
        </ToolList>
        <ToolList>
          <li>
            <ShakyIcon icon={<VuetifyIcon />} toolTip="Vuetify" size={50} />
          </li>
          <li>
            <ShakyIcon icon={<GithubIcon />} toolTip="Github" size={50} />
          </li>{" "}
          <li>
            <ShakyIcon
              icon={<TypeScriptIcon />}
              toolTip="TypeScript"
              size={50}
            />
          </li>{" "}
          {/* <li>
            <ShakyIcon icon={<TailwindIcon />} toolTip="Tailwind" size={50} />
          </li>{" "} */}
        </ToolList>
      </ToolsDiv>
    </AboutMeDiv>
  );
}

const ToolList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 25px;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
const ToolsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  /* width: 100%; */
  height: 100%;
  gap: 40px;
  margin-top: 20px;
  padding: 0 20px;
  color: ${({ theme }) => theme.textColorPrimary};
  font-size: 1.4rem;
  text-align: center;
  line-height: 1.8;
  font-weight: 300;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

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
