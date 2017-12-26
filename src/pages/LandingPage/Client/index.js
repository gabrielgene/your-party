import React from 'react';
import Topbar from '../../../components/Topbar';
import Content from '../../../components/Content';
import Form from '../../../components/Form';
import './style.css';

const Client = () => (
  <div className="LandingPage-client">
    <Topbar />
    <div className="LandingPage-client-content-desktop">
      <Content />
      <Form.Client />
    </div>
  </div>
);

export default Client;
