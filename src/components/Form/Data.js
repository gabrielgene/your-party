import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import InputMask from 'react-input-mask';

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
          label="Telefone"
          required
        >
          <InputMask
            onChange={onChange}
            name="phone"
            value={phone}
            mask="(99) 99999-9999"
            placeholder="Ex: (71) 99999-9999"
            required
          />
        </Form.Input>
        <Form.Input
          label="Local"
          placeholder="Ex: Salvador - Ba"
          onChange={onChange}
          name="place"
          value={place}
        />
        <Form.Input
          label="E-mail"
          placeholder="Ex: joao@gmail.com"
          onChange={onChange}
          name="email"
          value={email}
        />
        <Form.Button
          content="Solicitar orçamento grátis"
          fluid
          size="large"
          color="orange"
        />
      </Form>
    )
  }
}
