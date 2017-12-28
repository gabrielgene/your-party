import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

const servicesOptions = [
  { key: 'buffet-doces', text: 'Buffet de Doces', value: 'buffet-doces' },
  { key: 'buffet-salgados', text: 'Buffet de Salgados', value: 'buffet-salgados' },
  { key: 'arr', text: 'Arrumação', value: 'arr' },
];

export default class Request extends Component {
  render() {
    const { onSubmit, onChange, services, amount, when, addInfo } = this.props;

    return (
      <Form onSubmit={onSubmit}>
        <Form.Select
          label="Serviços"
          placeholder="Ex: Buffet de Salgados..."
          options={servicesOptions}
          onChange={onChange}
          name="services"
          value={services}
          multiple
        />
        <Form.Input
          label="Quantidade de pessoas"
          type="number"
          placeholder="Ex: 150 pessoas"
          onChange={onChange}
          name="amount"
          value={amount}
        />
        <Form.Input
          label="Para quando"
          placeholder="Ex: 27/12/2017"
          onChange={onChange}
          name="when"
          value={when}
        />
        <Form.TextArea
          label="Informações adicionais"
          placeholder="Ex: Festa de 15 anos da minha filha."
          onChange={onChange}
          name="addInfo"
          value={addInfo}
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
