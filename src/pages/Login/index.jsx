import React from 'react';
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
} from '@mantine/core';
import { colors, styles } from '@themes';
import { useForm } from '@mantine/form';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authCreators } from '@pages/Auth/reducer';
import routeConstants from '@utils/routeConstants';

function Login() {
  const dispatch = useDispatch();
  const { isLoading, isLoggedIn } = useSelector(state => state.authReducer);
  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Enter valid email'),
      password: value => (value.length > 6 ? null : 'Password must be at least 6 characters'),
    },
  });
  const handleSubmit = values => {
    dispatch(authCreators.requestLogin(values));
  }
  if(isLoggedIn) {
    return <Navigate to={routeConstants.home.route} />
  }
  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      <Paper radius={styles.borderRadius} p={30} mt={100} shadow="sm" >
        <Text align='center'>Welcome Back to</Text>
        <Title order={1} align="center" mb={30}>
          findmyservice
        </Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput required label="Email address" placeholder="Eg.someone@mail.com" size="sm" mt="sm"
            {...form.getInputProps('email')}
          />
          <PasswordInput required label="Password" placeholder="Your password" size="sm" mt="sm"
            {...form.getInputProps('password')}
          />
          <Button loading={isLoading} type='submit' fullWidth mt="xl" size="md" color={colors.primary}>
            Login
          </Button>
        </form>
        <Text align="center" mt="md" style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          Don't have an account?{' '}
          <Link style={{ textDecoration: 'none' }} to="/signup" weight={700}>
            <Text color={colors.primary}>Signup</Text>
          </Link>
        </Text>
      </Paper>
    </div>
  );
}

export default Login;

