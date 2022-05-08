import { useEffect } from 'react';
import {
  Loader,
  LoadingOverlay,
} from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { appCreators } from '@redux/reducers';
import { authCreators } from '@pages/Auth/reducer';
import routeConfig from './route.config';
import Navbar from '@components/Navbar';
import Layout from '@components/Layout';


function App(props) {
  const { isLoggedIn, token, appLoading } = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      if (token) {
        dispatch(authCreators.requestFetchUser({ token }));
      } else {
        dispatch(appCreators.logout());
      }
    }
  }, [])
  if (appLoading) {
    return <LoadingOverlay><Loader /></LoadingOverlay>
  }
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  )
}

export default App
