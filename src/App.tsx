import { ThemeProvider } from "styled-components";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import MyIntro from "./sections/MyIntro";
import AboutMe from "./sections/AboutMe";
import { darkTheme, lightTheme } from "./Theme";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <MyIntro />
      <AboutMe />
    </ThemeProvider>
  );
}

export default App;
