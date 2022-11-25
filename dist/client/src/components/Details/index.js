"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Table_1 = __importDefault(require("../Table"));
const styles_1 = require("./styles");
const Details = () => {
    return (<styles_1.Container>
      <Table_1.default />
    </styles_1.Container>);
};
exports.default = Details;
