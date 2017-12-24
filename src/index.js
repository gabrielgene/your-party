import React from 'react';
import ReactDOM from 'react-dom';
import LadingPage from './pages/LandingPage';
// import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <LadingPage.Client />
);

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
