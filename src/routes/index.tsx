import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Cadastrar from '../pages/Cadastrar';
import Clientes from '../pages/Clientes';
import Cliente from '../pages/Cliente';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/cadastrar" component={Cadastrar} />
    <Route path="/clientes" component={Clientes} />
    <Route path="/cliente/:id" component={Cliente} />
  </Switch>
);

export default Routes;
