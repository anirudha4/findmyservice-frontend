import { LoadingOverlay, Text } from '@mantine/core';
import { authCreators } from '@pages/Auth/reducer';
import { appCreators } from '@redux/reducers';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import routeConfig from './route.config';


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
    return <Text>Loading...</Text>
  }
  return (
    <>
      {isLoggedIn && "Hello"}
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
    </>
  )
}

export default App
