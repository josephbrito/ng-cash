import React from "react";

import { Container, Image } from "./styles";

import Logo from "../../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <Container>
      <Image src={Logo} draggable={false} />
    </Container>
  );
};

export default Header;
