// In App.js in a new project

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

// function LoginScreen({ navigation }) {
//   return (
//     <Box style={{ flex: 1, backgroundColor: 'white' }}>
//       <Box style={{ flex: 1, backgroundColor: 'green', alignItems: 'center' }}>
//         <Text>Hola Box arriba</Text>
//       </Box>
//       <Box style={{ flex: 2, backgroundColor: 'blue', alignItems: 'center' }}>
//         <Button
//           onPress={() => {
//             navigation.navigate('tabsHome', { id: 'iqoiowio' });
//           }}
//         >
//           Hola BTN
//         </Button>
//       </Box>
//     </Box>
//   );
// }

const LoginScreen = ({ navigation }) => {
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="500">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}
        >
          Welcome to Petgenda
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
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
              navigation.navigate('tabsHome', { id: 'iqoiowio' });
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
