import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ProductProvider } from './components/Context';
import { store } from './redux/createStore';
import App from './App';
import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </Provider>
    </ProductProvider>
    
</React.StrictMode>,

document.getElementById('root'))



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
