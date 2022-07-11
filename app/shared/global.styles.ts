import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: ${theme.font.family.opensans}
}

html {
  scroll-behavior: smooth;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style-type: none;
  padding: 0;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`;

export default GlobalStyle;
