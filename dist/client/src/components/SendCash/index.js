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
const styles_1 = require("../Register/styles");
const styles_2 = require("../Main/styles");
const services_1 = require("../../services");
const react_router_dom_1 = require("react-router-dom");
const SendCash = () => {
    const [user, setUser] = (0, react_1.useState)("");
    const [cash, setCash] = (0, react_1.useState)();
    let navigate = (0, react_router_dom_1.useNavigate)();
    const hanldeUserChange = (e) => {
        setUser(e.target.value);
    };
    const handleCashChange = (e) => {
        setCash(Number(e.target.value));
    };
    const handleSendClick = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        try {
            const req = yield services_1.api.post("transfer", {
                username: user,
                cash_in: cash,
            });
            console.log(req);
            alert("Done!");
            navigate("/");
            return;
        }
        catch (error) {
            console.log(error);
            alert(error.response.data);
            return;
        }
    });
    return (<styles_1.Container>
      <styles_1.Content>
        <h2>Send Cash</h2>
        <styles_1.Input placeholder="receiver's username" type="text" value={user} onChange={hanldeUserChange}/>
        <styles_1.Input placeholder="R$" type="number" value={cash} onChange={handleCashChange}/>
        <styles_2.Button background="#000" color="white" onClick={handleSendClick}>
          send
        </styles_2.Button>
      </styles_1.Content>
    </styles_1.Container>);
};
exports.default = SendCash;
