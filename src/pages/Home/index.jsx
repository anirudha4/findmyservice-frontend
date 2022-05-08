import withGaurd from '@components/hoc';
import { Text } from '@mantine/core';
import React from 'react'
import { useSelector } from 'react-redux';

function Home() {
  const { user } = useSelector(state => state.authReducer);
  return (
    <>
     <Text>{user.name}</Text>
    </>
  )
}

export default withGaurd(Home);