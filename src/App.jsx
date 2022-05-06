import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@redux/reducers';
import { NotificationsProvider } from '@mantine/notifications';
import routeConfig from './route.config';


function App() {
  return (
    <NotificationsProvider
      position="top-right"
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              {Object.keys(routeConfig).map((routeKey, index) => {
                const Component = routeConfig[routeKey].component;
                return (
                  <Route
                    path={routeConfig[routeKey].route}
                    exact={routeConfig[routeKey].exact}
                    key={index}
                    element={<Component />}
                  />
                )
              })}
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider >
    </NotificationsProvider>
  )
}

export default App
