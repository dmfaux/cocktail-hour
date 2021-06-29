import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        font-family: Roboto, sans-serif;
        font-size: 1rem;
    }

    :root {
        --maxWidth: 1280px;
        --darkBg: #2a3132;
        --darkBgText: #fff;
        --accentBg: #336B87;
        --accentBgText: #fff;
        --highlightBg: #90AFC5;
        --highlightBgText: #fff;
        --massiveFont: 5rem;
        --largeFont: 3rem;
        --smallFont: 0.7rem;
    }
`;