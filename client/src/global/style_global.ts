import { createGlobalStyle } from "styled-components";

import Showcase from "../../src/assets/showcase.jpg";

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-black: #000;
        --bg-card: linear-gradient(to bottom, #1E1A1D, #111);
        --bg-card-hover: linear-gradient(to top, #1E1A1D, #111);
        --bg-option: #141414;

        --text-white: #f5f5f5;
    }

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html, body, #root {
        font-family: sans-serif;
        height:100%;
    }

    body {
        background: url(${Showcase});
    }

    input[type="number"] {
        -moz-appearance: none;
      }

      input[type="number"]:hover,
      input[type="number"]:focus {
        -moz-appearance: none;
      }

      table, th, td {
  border:1px solid black;
}
`;
