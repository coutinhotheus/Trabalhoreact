import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { Container, Content, Title, Next, Cliente } from './styles';

interface Cliente {
  id: string;
  name: string;
  cpf: string;
  telephone: string;
}

const Clientes: React.FC = () => {
  const history = useHistory();
  const [cliente, setCliente] = useState<Cliente[]>();

  useEffect(() => {
    api.get(`/patients`).then((response) => {
      setCliente(response.data);
    });
  }, [cliente]);

  return (
    <>
      <Container>
        <Content>
          <div>
            <Title>Unimed</Title>
            <p>Sistema de Clientes</p>
          </div>

          {cliente
            ? cliente.map((client) => (
                <Cliente>
                  <div>
                    <h1>{client.name}</h1>
                    <h1>CPF: {client.cpf}</h1>
                    <h1>Telefone: {client.telephone}</h1>

                    <div>
                      <button
                        onClick={() => {
                          history.push(`/cliente/${client.id}`);
                        }}
                      >
                        Detalhes
                      </button>
                      <button
                        onClick={() => {
                          api.delete(`/patients/${client.id}`);
                        }}
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </Cliente>
              ))
            : ''}

          <Next>
            <Link to="/">Inicio</Link>
            <Link to="/Cadastrar">Cadastrar novos clientes</Link>
          </Next>
        </Content>
      </Container>
    </>
  );
};

export default Clientes;
