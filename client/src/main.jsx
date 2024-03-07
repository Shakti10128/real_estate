import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'
import {Provider} from 'react-redux';
import store from './redux/Store.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster/>
  </>,
)
