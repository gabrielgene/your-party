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
        />
        <Form.Input
          label="Local"
          placeholder="Ex: Salvador - Ba"
          onChange={onChange}
          name="place"
          value={place}
        />
        <Form.Input
          label="Telefone"
          placeholder="Ex: (99) 99999-9999"
          onChange={onChange}
          name="phone"
          value={phone}
        />
        <Form.Input
          label="E-mail"
          placeholder="Ex: joao@gmail.com"
          onChange={onChange}
          name="email"
          value={email}
        />
        <Form.Button
          content="Continuar"
          fluid
          primary
        />
      </Form>
    )
  }
}
