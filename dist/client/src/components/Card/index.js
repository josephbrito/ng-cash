"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const logo_svg_1 = __importDefault(require("../../assets/logo.svg"));
const ai_1 = require("react-icons/ai");
const fa_1 = require("react-icons/fa");
const cg_1 = require("react-icons/cg");
const bi_1 = require("react-icons/bi");
const react_cookie_1 = require("react-cookie");
const react_router_dom_1 = require("react-router-dom");
const Card = ({ username, balance }) => {
    const [_, __, deleteCookie] = (0, react_cookie_1.useCookies)(["nkoe"]);
    return (<styles_1.Container>
      <img src={logo_svg_1.default} draggable={false}/>
      <styles_1.Field>
        <ai_1.AiOutlineUser />
        <h4>{username}</h4>
      </styles_1.Field>
      <styles_1.Field>
        <fa_1.FaBalanceScale />
        <h3>R${balance}</h3>
      </styles_1.Field>

      <div>
        <react_router_dom_1.Link to="/transfer">
          <styles_1.Option>
            <ai_1.AiOutlineSend />
            <span>Send</span>
          </styles_1.Option>
        </react_router_dom_1.Link>

        <react_router_dom_1.Link to="/details">
          <styles_1.Option>
            <cg_1.CgMoreR />
            <span>Details</span>
          </styles_1.Option>
        </react_router_dom_1.Link>
        <styles_1.Option onClick={() => deleteCookie("nkoe")}>
          <bi_1.BiLogOut />
          <span>Logout</span>
        </styles_1.Option>
      </div>
    </styles_1.Container>);
};
exports.default = Card;
