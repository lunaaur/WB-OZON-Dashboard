import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/main'



// import {LogForm, FormReg} from './pages/Auth/components'


function App() {

  return (
    <BrowserRouter>
   <Provider store={store}>
      <>
        <Main/>
      </>
      <h1>WB-OZON</h1>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
