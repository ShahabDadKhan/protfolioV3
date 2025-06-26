import styled, { useTheme } from "styled-components";
import SunIcon from "../assets/svg/SunIcon.jsx";
import MoonIcon from "../assets/svg/MoonIcon.jsx";

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
  return (
    <HeaderNav>
      <Name href="">Shahab</Name>
      <NavItems className="nav-items">
        <span>About</span>
        <span>Experience</span>
        <span>Projects</span>
      </NavItems>
      <ResumeContainer>
        {/* <ResumeBtn href="">Khan</ResumeBtn> */}
        <ToggleButton onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <SunIcon width="30px" /> : <MoonIcon width="30px" />}
        </ToggleButton>
      </ResumeContainer>
    </HeaderNav>
  );
}

// Defining the props type
// interface HeaderNavProps {
//   bgColor: string;
// }

const ResumeContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

const NavItems = styled.div`
  display: flex;
  gap: 60px;
  color: ${({ theme }) => theme.white};

  & > * {
    cursor: pointer;
  }
`;
const HeaderNav = styled.nav`
  position: fixed;
  top: 3%;
  left: 2%;
  padding: 5px 15px;
  // background: ${(props) => props.bgColor}; /* dynamic background */
  width: 95%;
  height: 60px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.bgColorSecondary};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* Safari support */
`;

const Name = styled.a`
  font-family: "Bad Script", cursive;
  font-size: 35px;
  margin-left: 12px;
  color: ${({ theme }) => theme.white};
`;

const ResumeBtn = styled.a`
  font-family: "Bad Script", cursive;
  font-size: 35px;
  margin-right: 12px;
`;

const ToggleButton = styled.button`
  padding: 5px 12px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  /* color: ${({ theme }) => theme.bgColor}; */
  cursor: pointer;
  font-size: 14px;

  &:focus-visible,
  &:focus {
    outline: none;
  }
`;
