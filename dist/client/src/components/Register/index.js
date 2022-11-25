"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const services_1 = require("../../services");
const styles_1 = require("../Main/styles");
const styles_2 = require("./styles");
const react_router_dom_1 = require("react-router-dom");
const Register = () => {
    const [username, setUsername] = (0, react_1.useState)("");
    const [password, setPassword] = (0, react_1.useState)("");
    let navigate = (0, react_router_dom_1.useNavigate)();
    const handleChangeInputUsername = (e) => {
        setUsername(e.target.value);
    };
    const handleChangeInputPassword = (e) => {
        setPassword(e.target.value);
    };
    const handleClickButton = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        if (!username || !password) {
            alert("Please fill in all fields!");
            return;
        }
        try {
            yield services_1.api.post("register", {
                username,
                password,
            });
            alert("allright, now you can sign in");
            navigate("/login");
            return;
        }
        catch (error) {
            alert("Error on register!");
            return;
        }
    });
    return (<styles_2.Container>
      <styles_2.Content>
        <h2>Register</h2>
        <styles_2.Input placeholder="username" type="text" value={username} onChange={handleChangeInputUsername}/>
        <styles_2.Input placeholder="password" type="password" value={password} onChange={handleChangeInputPassword}/>
        <styles_1.Button background="#f5f5f5" color="black" onClick={handleClickButton}>
          Submit
        </styles_1.Button>
      </styles_2.Content>
    </styles_2.Container>);
};
// MouseEvent<HTMLButtonElement, MouseEvent>
exports.default = Register;
