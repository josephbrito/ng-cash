"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.main `
  height: 90vh;

  > div {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;
exports.Button = styled_components_1.default.button `
  height: 60px;
  width: 150px;
  border: 1px solid white;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    opacity: 0.8;
  }
`;
