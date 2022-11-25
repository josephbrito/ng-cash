"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const logo_svg_1 = __importDefault(require("../../assets/logo.svg"));
const Header = () => {
    return (<styles_1.Container>
      <styles_1.Image src={logo_svg_1.default} draggable={false}/>
    </styles_1.Container>);
};
exports.default = Header;
