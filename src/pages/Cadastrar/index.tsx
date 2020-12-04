import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';

import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import { Container, Content, Title, Cadastro, InputFoto } from './styles';

const Cadastrar: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [picture, setPicture] = useState<File>();

  const handlePicture = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedImage = e.target.files[0];

      setPicture(selectedImage);
    }
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const data = new FormData();

    data.append('name', name);
    data.append('city', city);
    data.append('cpf', cpf);
    data.append('email', email);
    data.append('telephone', telephone);

    if (picture) {
      data.append('picture', picture);
    }

    await api.post('patients', data);

    alert('Cadastro realizado com sucesso !');

    history.push('/clientes');
  }

  return (
    <>
      <Container>
        <Content>
          <div>
            <Title>Unimed</Title>
            <p>Cadastre um novo cliente .</p>
          </div>

          <Cadastro>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <div>
                  <label htmlFor="name">Nome:</label>
                  <input
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="city">Cidade:</label>
                  <input
                    id="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="telephone">
                    <label htmlFor="telephone">Telefone:</label>
                  </label>
                  <input
                    id="telephone"
                    value={telephone}
                    onChange={(event) => setTelephone(event.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="cpf">CPF:</label>
                  <input
                    id="CPF"
                    value={cpf}
                    onChange={(event) => setCPF(event.target.value)}
                  />
                </div>

                <label htmlFor="picture">Foto:</label>
                <InputFoto>
                  <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    onChange={handlePicture}
                  />
                </InputFoto>

                <button type="submit">Cadastrar</button>
              </fieldset>
            </form>
          </Cadastro>
        </Content>
      </Container>
    </>
  );
};

export default Cadastrar;
