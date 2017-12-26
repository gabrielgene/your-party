import React from 'react';
import { Card, Form, Divider, Tab } from 'semantic-ui-react';
import './style.css';

const services = [
  { key: 'buffet-doces', text: 'Buffet de Doces', value: 'buffet-doces' },
  { key: 'buffet-salgados', text: 'Buffet de Salgados', value: 'buffet-salgados' },
  { key: 'org', text: 'Organização de eventos', value: 'org' },
  { key: 'som', text: 'Som', value: 'som' },
  { key: 'todos', text: 'Evento completo', value: 'todos' },
]

const ClientRequest = () => (
  <Tab.Pane>
    <Form>
      <Form.Select
        label="Serviços"
        placeholder="Ex: Buffet de Salgados..."
        options={services}
        multiple
      />
      <Form.Input label="Quantidade de pessoas" type="number" placeholder="Ex: 150 pessoas" />
      <Form.Input label="Para quando" placeholder="Ex: 27/12/2017" />
      <Form.TextArea label="Informações adicionais" placeholder="Ex: Festa de 15 anos da minha filha." />
      <Form.Button content="Solicitar Equipe" fluid primary />
    </Form>
  </Tab.Pane>
);

const ClientData = () => (
  <Tab.Pane>
    <Form>
      <Form.Input label="Nome" placeholder="Ex: João da Silva" />
      <Form.Input label="Local" placeholder="Ex: Salvador - Ba" />
      <Form.Input label="Telefone" placeholder="Ex: (99) 99999-9999" />
      <Form.Input label="E-mail" placeholder="Ex; joao@gmail.com" />
      <Form.Button content="Continuar" fluid primary />
    </Form>
  </Tab.Pane>
);

const panes = [
  { menuItem: 'Dados do evento', render: () => <ClientRequest /> },
  { menuItem: 'Seus dados', render: () => <ClientData /> },
]


const Client = () => (
  <div className="Form-client">
    <Tab panes={panes} menu={{ secondary: true, pointing: true }} />
  </div>
);

export default Client;
