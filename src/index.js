import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider } from 'react-redux'
import Store from './redux/Store';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Login from './Login';
import Todo from './Todo';
const store = Store();


ReactDOM.render(
  <BrowserRouter>
    <Provider store = {store}>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
    </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
