// In App.js in a new project

import { Box, Text, Button } from 'native-base';
import * as React from 'react';

function HomeScreen({ navigation, route }) {
  return (
    <Box style={{ flex: 1, backgroundColor: 'white' }}>
      <Box style={{ flex: 1, alignItems: 'center' }}>
        <Text>Welcome to Petgenda!</Text>
      </Box>
    </Box>
  );
}

export default HomeScreen;
