import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import {Provider} from 'react-redux';
import store, { persistor } from './redux/Store.jsx';
import './index.css'
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor }>
        <App />
      </PersistGate>
    </Provider>
    <Toaster/>
  </>,
)
