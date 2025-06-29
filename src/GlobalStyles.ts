import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  width: 100%;
}

  body {
    margin: 0px;
    background-color: ${({ theme }) => theme.bgColorPrimary};
    color: ${({ theme }) => theme.textColor};
    font-family: Montserrat,Poppins,Quicksand,sans-serif;
    line-height: 1.5;
    font-weight: 400;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

h2 {
  font-size: 2.4em;
  line-height: 1.1;
  color: ${({ theme }) => theme.textColorSecondary};
}

h3 {
  font-size: 1.4em;
  line-height: 1.1;
  color: ${({ theme }) => theme.textColorSecondary};
}

.highlighted-text-primary {
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textColorPrimary};
}

.highlighted-text-secondary {
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.textColorTertiary};
  background-color: ${({ theme }) => theme.textColorSecondary};
  display: inline-block;
  transform: rotate(-2deg);
  padding: 0px 6px;
  border-radius: 2px;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.section {
  max-width: 1280px;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}


`;
