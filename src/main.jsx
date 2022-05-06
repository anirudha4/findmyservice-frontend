import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@redux/reducers';
import { NotificationsProvider } from '@mantine/notifications';
import routeConfig from './route.config';



ReactDOM.render(
  <React.StrictMode>
    <NotificationsProvider
      position="top-right"
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider >
    </NotificationsProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
