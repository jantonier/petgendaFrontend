// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import react from 'react';
import { useState } from 'react';
import axios from 'axios';

import {
  Box,
  Text,
  Button,
  Center,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  HStack,
} from 'native-base';
import * as React from 'react';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const changeEmail = (event) => {
    setEmail(event.target.value);
  }
  const changePwd = (event) => {
    setPwd(event.target.value);
  }
  const [stats, setStats] = useState([]);
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="500">
        <Heading size="lg" fontWeight="600" color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
        >
          Welcome to Petgenda
        </Heading>
        <Heading mt="1" _dark={{
          color: 'warmGray.200',
        }}
          color="coolGray.600" fontWeight="medium" size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input type='text' onChange={(value) => { changeEmail(value)}} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" onChange={(value) => { changePwd(value) }} />
            <Link
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'indigo.500',
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button
            onPress={() => {
              if (email != '' && pwd != '') {
                const payload = { email: email, password: pwd };
                axios.post('http://127.0.0.1:5000/login', { email: email, password: pwd}).then(res => {
                  setStats(res.data);
                  console.log(res.data);
                })
                  .catch(error => console.log(error));
              }
              else
              console.log('campos vacios!')
              // navigation.navigate('tabsHome');
            }}
            mt="2"
            colorScheme="indigo"
          >
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}
            >
              I'm a new user.{' '}
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              href="#"
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginScreen;
