// In App.js in a new project

import { Box, Text, Button } from 'native-base';
import * as React from 'react';
import Card from '../../components/Card';

function SettingsScreen({ navigation, route }) {
  return (
    <Box style={{ flex: 1, backgroundColor: 'white' }}>
      <Box style={{ flex: 1, alignItems: 'center' }}>
        <Text>Settings</Text>
        <Card />
      </Box>
    </Box>
  );
}

export default SettingsScreen;
