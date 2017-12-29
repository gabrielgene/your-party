import React from 'react';
import { Icon } from 'semantic-ui-react';
import './style.css';

const title = 'Faça o seu evento acontecer agora!';
const topic1 = 'Temos equipes qualificadas de buffet e arrumação para o seu evento.';
const topic2 = 'Degustação do buffet e mostruário da arrumação sem compromisso.';
const topic3 = 'Preço de serviço dentro do preço de mercado.';

const Content = () => (
  <div className="Content">
    <h1 className="Content-title">
      {title}
    </h1>
    <h3 className="Content-topics">
      <Icon name="line graph" circular className="Content-topics-icon" />
      {topic1}
    </h3>
    <h3 className="Content-topics" >
      <Icon name="food" circular className="Content-topics-icon" />
      {topic2}
    </h3>
    <h3 className="Content-topics">
      <Icon name="money" circular className="Content-topics-icon" />
      {topic3}
    </h3>
  </div>
);

export default Content;
