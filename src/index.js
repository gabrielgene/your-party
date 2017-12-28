import React from 'react';
import ReactDOM from 'react-dom';
import LadingPage from './pages/LandingPage';
import 'semantic-ui-css/semantic.min.css';
// import registerServiceWorker from './registerServiceWorker';

const App = () => (
  <LadingPage />
);

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
