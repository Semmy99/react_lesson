import React, { Component } from 'react';
import Main from '../Main/Main'
import Header from '../Header/Header'
import InnerPage from '../InnerPage/InnerPage'
import OtherPage from '../OtherPage/OtherPage'
import './App.css';

// using ES6 modules
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container >
          <Header />
          <Route path="/Main" component={Main} />
          <Route path="/InnerPage" component={InnerPage} />
          <Route path="/OtherPage" component={OtherPage} />
        </Container>
      </BrowserRouter>
    );
  }
}

export default App;
