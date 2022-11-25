"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.Content = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-white);
`;
exports.Content = styled_components_1.default.form `
  height: 70%;
  width: 35%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;
exports.Input = styled_components_1.default.input `
  height: 30px;
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: 1px solid white;
  color: var(--text-white);
  background: none;
  outline: none;

  font-size: 1rem;

  &:focus {
    border-color: #ccc;
  }

  &::placeholder {
    color: #f5f5f5;
    opacity: 0.7;
    letter-spacing: 1px;
  }
`;
