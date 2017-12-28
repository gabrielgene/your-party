import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import './style.css';

const text = 'Obrigado por solicitar nossos serviços, entraremos em contato em breve!'

const Done = (props) => (
  <Card className="Done" fluid>
    <Card.Content className="Done-content">
      <div className="Done-content-text">
        {text}
      </div>
      <Button 
        color="orange" 
        content="Solicitar nova equipe" 
        fluid 
        className="Done-content-button"
        onClick={props.onNewRequest}
        />
    </Card.Content>
  </Card>
);

export default Done;
