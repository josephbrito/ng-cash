"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalStyle = void 0;
const styled_components_1 = require("styled-components");
const showcase_jpg_1 = __importDefault(require("../../src/assets/showcase.jpg"));
exports.GlobalStyle = (0, styled_components_1.createGlobalStyle) `
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
        background: url(${showcase_jpg_1.default});
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
