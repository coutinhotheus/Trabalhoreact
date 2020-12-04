import React, { useEffect, useState } from 'react';

import api from '../../services/api';
import { Link, useRouteMatch } from 'react-router-dom';

import { Container, Content, Title, Informacoes } from './styles';

interface Params {
  id: string;
}

interface Cliente {
  name: string;
  city: string;
  cpf: string;
  email: string;
  telephone: string;
  picture: string;
}

const Cliente: React.FC = () => {
  const { params } = useRouteMatch<Params>();
  const [cliente, setCliente] = useState<Cliente>();

  useEffect(() => {
    api.get(`/patients/${params.id}`).then((response) => {
      setCliente(response.data);
    });
  }, [params.id]);

  return (
    <>
      <Container>
        <Content>
          <div>
            <Title>Unimed</Title>
            <p>Detalhes do cliente .</p>
          </div>

          <Informacoes>
            <div>
              <img
                src={`http://localhost:3333/uploads/${cliente?.picture}`}
                alt="Foto do cliente"
              />

              <h1>{cliente?.name}</h1>
              <h1>{cliente?.cpf}</h1>
              <h1>{cliente?.email}</h1>
              <h1>{cliente?.cpf}</h1>
              <h1>{cliente?.telephone}</h1>

              <div>
                <Link to="/clientes">Voltar</Link>
              </div>
            </div>
          </Informacoes>
        </Content>
      </Container>
    </>
  );
};

export default Cliente;
