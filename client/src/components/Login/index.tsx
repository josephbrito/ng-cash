import React, { ChangeEvent, useState, MouseEvent } from "react";
import { api } from "../../services";
import { Button } from "../Main/styles";

import { Container, Content, Input } from "../Register/styles";

import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
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
      const req = await api.post("login", {
        username,
        password,
      });

      console.log(req.data);

      navigate("/");
      return;
    } catch (error: any) {
      alert(error.response.data);
      return;
    }
  };
  return (
    <Container>
      <Content>
        <h2>Login</h2>
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
        <Button background="#000" color="#f5f5f5" onClick={handleClickButton}>
          Submit
        </Button>
      </Content>
    </Container>
  );
};
export default Login;
