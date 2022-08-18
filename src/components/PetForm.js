import { Box, FormControl, Stack, Input } from 'native-base';
import * as React from 'react';

function PetForm() {
  return (
    <FormControl>
      <Stack space={5}>
        <Stack>
          <FormControl.Label>Username</FormControl.Label>
          <Input variant="underlined" p={2} placeholder="Username" />
        </Stack>
        <Stack>
          <FormControl.Label>Password</FormControl.Label>
          <Input variant="underlined" p={2} placeholder="Password" />
        </Stack>
      </Stack>
    </FormControl>
  );
}
export default PetForm;
