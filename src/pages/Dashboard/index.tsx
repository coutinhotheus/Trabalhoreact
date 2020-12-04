import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Title, Next } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <div>
            <Title>Unimed</Title>
            <p>Sistema de Clientes</p>
          </div>

          <Next>
            <Link to="/Clientes">Nossos clientes</Link>
            <Link to="/Cadastrar">Cadastrar clientes</Link>
          </Next>
        </Content>
      </Container>
    </>
  );
};

export default Dashboard;
