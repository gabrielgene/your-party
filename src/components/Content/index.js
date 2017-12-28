import React from 'react';
import './style.css';

const title = 'Faça o seu evento acontecer agora!';
const subTitle = 'Temos as melhores equipes de buffet e arrumação para o seu evento.';
const description = 'Possuimos equipes qualificadas para realizar o seu evento o mais rápido possivel.'

const Content = () => (
  <div className="Content">
    <h1 className="Content-h1">{title}</h1>
    <h2 className="Content-h2">{subTitle}</h2>
    <h2 className="Content-h2">{description}</h2>
  </div>
);

export default Content;
