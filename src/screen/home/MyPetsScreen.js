// In App.js in a new project

import { Box, Text, Button, VStack, Divider } from 'native-base';
import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Card from '../../components/Card';
import { Pressable } from 'react-native';

function MyPetsScreen({ navigation, route }) {
  return (
    <Box style={{ flex: 1, backgroundColor: 'white' }}>
      <Box style={{ flex: 1, alignItems: 'center', margin: '2' }}>
        <Text>These are my pets</Text>
        <Pressable onPress={() => navigation.navigate('petinfo')}>
          <Card />
        </Pressable>
          <Button onPress={() => navigation.navigate('addpet')}>Add a pet</Button>
      </Box>
    </Box>
  );
}

export default MyPetsScreen;
