import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
// import './../node_modules/bulma/css/bulma.min.css';

import Coffee from './pages/Coffee';
import Calendar from './pages/Calendar';

// Layout
import Layout from './layouts';

import './pages/Coffee.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact={true} path="/" component={Coffee} />
          <Route path="/Calendar" component={Calendar} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
