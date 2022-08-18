import { Box, Text, Button, Heading } from 'native-base';
import * as React from 'react';
import Card from '../../components/Card';
import Navigation from '../../navigation';

function PetInfoScreen({ navigation, route }) {
  return (
    <Box style={{ flex: 1, backgroundColor: 'white' }}>
      <Box style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <Button
          style={{ maxWidth: 80 }}
          rounded
          success
          onPress={() => navigation.navigate('tabsHome')}
        >
          <Text>Back</Text>
        </Button>
        <Button
          style={{ maxWidth: 80 }}
          rounded
          success
          onPress={() => navigation.navigate('tabsHome')}
        >
          <Text>Edit</Text>
        </Button>
      </Box>
      <Box style={{ flex: 1, alignItems: 'center' }}>
        <Text fontSize={20}>Pet Name</Text>
        <Text>Here you will see the pet's information</Text>
      </Box>
    </Box>
  );
}

export default PetInfoScreen;
