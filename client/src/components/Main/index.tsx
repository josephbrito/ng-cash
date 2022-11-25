import React from "react";

import { Button, Container } from "./styles";

import { Link } from "react-router-dom";

import { useCookies } from "react-cookie";
import { useJwt } from "react-jwt";
import jwt from "jsonwebtoken";
import Card from "../Card";
import { IUser } from "../../global/type";

const Main: React.FC = () => {
  const [cookies] = useCookies(["nkoe"]);

  const {
    decodedToken,
    isExpired,
  }: { decodedToken: IUser | any; isExpired: boolean } = useJwt(cookies.nkoe);

  const validate = decodedToken && !isExpired;

  if (!cookies.nkoe || !validate) {
    return (
      <Container>
        <div>
          <Link to={"/login"}>
            <Button color="white" background="#000">
              Login
            </Button>
          </Link>
          <Link to={"/register"}>
            <Button color="black" background="#f5f5f5">
              Register
            </Button>
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <Card username={decodedToken.username} balance={decodedToken.balance} />
    </Container>
  );
};

export default Main;
