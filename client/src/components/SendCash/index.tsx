import React, { ChangeEvent, useState, MouseEvent } from "react";
import { Container, Content, Input } from "../Register/styles";
import { Button } from "../Main/styles";
import { api } from "../../services";
import { useNavigate } from "react-router-dom";

const SendCash: React.FC = () => {
  const [user, setUser] = useState<string>("");
  const [cash, setCash] = useState<number>();

  let navigate = useNavigate();

  const hanldeUserChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };
  const handleCashChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCash(Number(e.target.value));
  };

  const handleSendClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      const req = await api.post("transfer", {
        username: user,
        cash_in: cash,
      });
      console.log(req);
      alert("Done!");
      navigate("/");
      return;
    } catch (error: any) {
      console.log(error);
      alert(error.response.data);
      return;
    }
  };

  return (
    <Container>
      <Content>
        <h2>Send Cash</h2>
        <Input
          placeholder="receiver's username"
          type="text"
          value={user}
          onChange={hanldeUserChange}
        />
        <Input
          placeholder="R$"
          type="number"
          value={cash}
          onChange={handleCashChange}
        />
        <Button background="#000" color="white" onClick={handleSendClick}>
          send
        </Button>
      </Content>
    </Container>
  );
};

export default SendCash;
