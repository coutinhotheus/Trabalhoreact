import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

export const Title = styled.h1`
  font-size: 104px;
`;

export const Cadastro = styled.div`
  margin-top: 30px;

  form {
    div {
      display: flex;

      flex-direction: column;
      justify-content: center;
      align-items: center;

      label {
        font-size: 18px;
      }

      & + div {
        margin-top: 5px;
      }
    }

    button {
      padding: 5px;
      margin-top: 20px;
    }
  }
`;

export const InputFoto = styled.div`
  margin-top: 10px;
  margin-left: 100px;
`;
