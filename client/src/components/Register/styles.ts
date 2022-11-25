import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-white);
`;

export const Content = styled.form`
  height: 70%;
  width: 35%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
`;

export const Input = styled.input`
  height: 30px;
  width: 100%;
  padding: 8px;
  border: none;
  border-bottom: 1px solid white;
  color: var(--text-white);
  background: none;
  outline: none;

  font-size: 1rem;

  &:focus {
    border-color: #ccc;
  }

  &::placeholder {
    color: #f5f5f5;
    opacity: 0.7;
    letter-spacing: 1px;
  }
`;
