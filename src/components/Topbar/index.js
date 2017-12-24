import React from 'react';
import { Button } from 'semantic-ui-react';
import './style.css';

const Topbar = () => (
  <div className="Topbar">
    <span className="Topbar-title">Minha Festa</span>
    <Button content="Trabalhe conosco" primary/>
  </div>
);

export default Topbar;
