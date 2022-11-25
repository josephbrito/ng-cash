import React from "react";

import { Container, Field, Option } from "./styles";
import Logo from "../../assets/logo.svg";

import { AiOutlineUser, AiOutlineSend } from "react-icons/ai";
import { FaBalanceScale } from "react-icons/fa";
import { CgMoreR } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";

import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

interface IProps {
  username: string;
  balance: number;
}

const Card: React.FC<IProps> = ({ username, balance }: IProps) => {
  const [_, __, deleteCookie] = useCookies(["nkoe"]);
  return (
    <Container>
      <img src={Logo} draggable={false} />
      <Field>
        <AiOutlineUser />
        <h4>{username}</h4>
      </Field>
      <Field>
        <FaBalanceScale />
        <h3>R${balance}</h3>
      </Field>

      <div>
        <Link to="/transfer">
          <Option>
            <AiOutlineSend />
            <span>Send</span>
          </Option>
        </Link>

        <Link to="/details">
          <Option>
            <CgMoreR />
            <span>Details</span>
          </Option>
        </Link>
        <Option onClick={() => deleteCookie("nkoe")}>
          <BiLogOut />
          <span>Logout</span>
        </Option>
      </div>
    </Container>
  );
};

export default Card;
