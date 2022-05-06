import React from 'react';
import {
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
} from '@mantine/core';
import { colors, styles } from '@themes';
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signupCreators } from './reducer';



export default function Signup() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.signupReducer);
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: ''
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Enter valid email'),
      name: value => (/^[a-zA-Z ]*$/.test(value) ? null : 'Enter valid name'),
      password: value => (value.length > 6 ? null : 'Password must be at least 6 characters'),
    },
  });
  const handleSubmit = values => {
    dispatch(signupCreators.requestSignup(values));
  }
  return (
    <div style={{ maxWidth: 500, margin: '0 auto' }}>
      <Paper radius={styles.borderRadius} p={30} mt={100} shadow="sm" >
        <Text align='center'>Sign Up to</Text>
        <Title order={1} align="center" mb={30}>
          findmyservice
        </Title>
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput required label="Full Name" placeholder="Eg. John Doe" size="sm" mt="sm"
            {...form.getInputProps('name')}
          />

          <TextInput required label="Email address" placeholder="Eg.someone@mail.com" size="sm" mt="sm"
            {...form.getInputProps('email')}
          />
          <PasswordInput required label="Password" placeholder="Your password" size="sm" mt="sm"
            {...form.getInputProps('password')}
          />
          <Button loading={isLoading} type='submit' fullWidth mt="xl" size="md" color={colors.primary}>
            Sign Up
          </Button>
        </form>
        <Text align="center" mt="md">
          Already have an account?{' '}
          <Link to="/login" weight={700}>
            Login
          </Link>
        </Text>
      </Paper>
    </div>
  );
}