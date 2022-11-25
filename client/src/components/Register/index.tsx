import React, { ChangeEvent, useState, MouseEvent } from "react";
import { api } from "../../services";
import { Button } from "../Main/styles";

import { Container, Content, Input } from "./styles";

import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  let navigate = useNavigate();

  const handleChangeInputUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangeInputPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClickButton = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in all fields!");
      return;
    }

    try {
      await api.post("register", {
        username,
        password,
      });

      alert("allright, now you can sign in");
      navigate("/login");
      return;
    } catch (error: any) {
      alert(error.response.data);
      return;
    }
  };
  return (
    <Container>
      <Content>
        <h2>Register</h2>
        <Input
          placeholder="username"
          type="text"
          value={username}
          onChange={handleChangeInputUsername}
        />
        <Input
          placeholder="password"
          type="password"
          value={password}
          onChange={handleChangeInputPassword}
        />
        <Button background="#f5f5f5" color="black" onClick={handleClickButton}>
          Submit
        </Button>
      </Content>
    </Container>
  );
};
export default Register;
