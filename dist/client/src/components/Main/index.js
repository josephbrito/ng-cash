"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const react_router_dom_1 = require("react-router-dom");
const react_cookie_1 = require("react-cookie");
const react_jwt_1 = require("react-jwt");
const Card_1 = __importDefault(require("../Card"));
const Main = () => {
    const [cookies] = (0, react_cookie_1.useCookies)(["nkoe"]);
    const { decodedToken, isExpired, } = (0, react_jwt_1.useJwt)(cookies.nkoe);
    const validate = decodedToken && !isExpired;
    if (!cookies.nkoe || !validate) {
        return (<styles_1.Container>
        <div>
          <react_router_dom_1.Link to={"/login"}>
            <styles_1.Button color="white" background="#000">
              Login
            </styles_1.Button>
          </react_router_dom_1.Link>
          <react_router_dom_1.Link to={"/register"}>
            <styles_1.Button color="black" background="#f5f5f5">
              Register
            </styles_1.Button>
          </react_router_dom_1.Link>
        </div>
      </styles_1.Container>);
    }
    return (<styles_1.Container>
      <Card_1.default username={decodedToken.username} balance={decodedToken.balance}/>
    </styles_1.Container>);
};
exports.default = Main;
