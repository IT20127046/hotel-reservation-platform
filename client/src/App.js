import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Test from './components/Test';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Route path="/" exact component={Test}></Route>
          </div>
      </BrowserRouter>
      
    )
  }
}
