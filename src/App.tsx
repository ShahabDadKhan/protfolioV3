import { ThemeProvider } from "styled-components";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import MyIntro from "./pages/MyIntro";
import { darkTheme, lightTheme } from "./Theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      {/* <> */}
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <MyIntro />
      {/* </> */}
    </ThemeProvider>
  );
}

export default App;
