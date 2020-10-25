import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html {
    font-family: 'Montserrat', sans-serif;
}
`;

export default GlobalStyles;
