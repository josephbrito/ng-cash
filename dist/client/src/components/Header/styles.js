"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.header `
  height: 10vh;
  background-color: var(--bg-black);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;
exports.Image = styled_components_1.default.img `
  height: 100%;
  width: 150px;
`;
