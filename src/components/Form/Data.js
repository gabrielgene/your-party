import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

export default class Data extends Component {
  render() {
    const { onSubmit, onChange, name, place, phone, email } = this.props;

    return (
      <Form onSubmit={onSubmit}>
        <Form.Input
          label="Nome"
          placeholder="Ex: João da Silva"
          onChange={onChange}
          name="name"
          value={name}
          required
        />
        <Form.Input
          label="Local"
          placeholder="Ex: Salvador - Ba"
          onChange={onChange}
          name="place"
          value={place}
          required
        />
        <Form.Input
          label="Telefone"
          placeholder="Ex: (99) 99999-9999"
          onChange={onChange}
          name="phone"
          value={phone}
          required
        />
        <Form.Input
          label="E-mail"
          placeholder="Ex: joao@gmail.com"
          onChange={onChange}
          name="email"
          value={email}
          required
        />
        <Form.Button
          content="Solicitar equipe"
          fluid
          color="orange"
        />
      </Form>
    )
  }
}
