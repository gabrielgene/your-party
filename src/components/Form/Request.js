import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import InputMask from 'react-input-mask';

const servicesOptions = [
  { key: 'buffet-doces', text: 'Buffet de Doces', value: 'buffet-doces' },
  { key: 'buffet-salgados', text: 'Buffet de Salgados', value: 'buffet-salgados' },
  { key: 'arr', text: 'Arrumação', value: 'arrumacao' },
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
        >
          <InputMask
            onChange={onChange}
            name="when"
            value={when}
            mask="99/99/9999"
            placeholder="Ex: 27/12/2017"
          />
        </Form.Input>
        <Form.TextArea
          label="Informações adicionais"
          placeholder="Ex: Festa de 15 anos da minha filha."
          onChange={onChange}
          name="addInfo"
          value={addInfo}
        />
        <Form.Button
          content="Continuar"
          fluid
          color="orange"
        />
      </Form>
    )
  }
}
