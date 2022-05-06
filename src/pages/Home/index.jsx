import withGaurd from '@components/hoc';
import { Button, Text } from '@mantine/core';
import { appCreators } from '@redux/reducers';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const { user } = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  return (
    <>
    <Text>{user.name}</Text>
    <Button onClick={e => dispatch(appCreators.logout())}>Logout</Button>
    </>
  )
}

export default withGaurd(Home);