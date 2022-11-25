"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const style_global_1 = require("./global/style_global");
const react_router_dom_1 = require("react-router-dom");
const Header_1 = __importDefault(require("./components/Header"));
const Main_1 = __importDefault(require("./components/Main"));
const Register_1 = __importDefault(require("./components/Register"));
const Login_1 = __importDefault(require("./components/Login"));
const SendCash_1 = __importDefault(require("./components/SendCash"));
const Table_1 = __importDefault(require("./components/Table"));
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <style_global_1.GlobalStyle />
      <Header_1.default />
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Main_1.default />}/>

        <react_router_dom_1.Route path="/register" element={<Register_1.default />}/>
        <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
        <react_router_dom_1.Route path="/transfer" element={<SendCash_1.default />}/>
        <react_router_dom_1.Route path="/details" element={<Table_1.default />}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
