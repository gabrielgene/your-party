import React from 'react';
import Topbar from '../../components/Topbar';
import Content from '../../components/Content';
import Form from '../../components/Form';
import './style.css';

const LandingPage = () => (
  <div className="LandingPage">
    <Topbar />
    <div className="LandingPage-content">
      <Content />
      <Form />
      {/* <div className="LandingPage-content-secure">Orçamento grátis e seguro</div> */}
    </div>
  </div>
);

export default LandingPage;
