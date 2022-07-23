// In App.js in a new project

import { Box, Text, Button } from 'native-base';
import * as React from 'react';

function SettingsScreen({ navigation, route }) {
  // const { id } = route.params;
  return (
    <Box style={{ flex: 1, backgroundColor: 'white' }}>
      <Box style={{ flex: 1, alignItems: 'center' }}>
        <Text>Settings</Text>
      </Box>
    </Box>
  );
}

export default SettingsScreen;
