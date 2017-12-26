import React from 'react';
import { Button } from 'semantic-ui-react';
import './style.css';

const appName = 'Minha festa';
const buttonContent = 'Trabalhe conosco';

const Topbar = () => (
  <div className="Topbar">
    <span className="Topbar-title">{appName}</span>
    <Button content={buttonContent} secondary />
  </div>
);

export default Topbar;
