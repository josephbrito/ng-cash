import styled from "styled-components";

export const Container = styled.main`
  height: 90vh;

  > div {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IPropsButton {
  color: string;
  background: string;
}

export const Button = styled.button<IPropsButton>`
  height: 60px;
  width: 150px;
  border: 1px solid white;
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    opacity: 0.8;
  }
`;
