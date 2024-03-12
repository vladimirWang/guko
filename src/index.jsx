import React from 'react'
import ReactDOM from 'react-dom/client'
import 'normalize.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/index'
import AuthRoute from './router/authRoute.jsx'
import './index.less'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthRoute>
        <App />
      </AuthRoute>
    </Provider>
  </BrowserRouter>,
)
