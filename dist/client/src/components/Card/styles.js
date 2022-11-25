"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logout = exports.Option = exports.Field = exports.Container = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.Container = styled_components_1.default.div `
  width: 30%;
  max-height: 65%;
  background: var(--bg-card);
  box-shadow: 1px 1px 7px 8px inset;
  padding: 20px;
  display: flex;
  flex-direction: column;

  > img {
    width: 50px;
    height: 70px;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    & > a {
      color: vat(--text-white);
      text-decoration: none;
      width: 30%;

      & > div {
        width: 100%;
      }
    }
  }

  @media (max-width: 640px) {
    width: 90%;
  }
`;
exports.Field = styled_components_1.default.div `
  width: 100%;
  height: 80px;
  background: #1e1a1d;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;
  font-size: 1.5rem;
  color: var(--text-white);
  transition: 0.5s ease-in-out;
  &:hover {
    background: var(--bg-card-hover);
  }
`;
exports.Option = styled_components_1.default.div `
  height: 60px;
  width: 30%;
  border: 1px solid white;
  color: var(--text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-option);
  gap: 1rem;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background: none;
    border-color: black;
  }
`;
exports.Logout = styled_components_1.default.button `
  width: 80px;
  height: 50px;
  background: red;
  border: 1px solid white;
`;
