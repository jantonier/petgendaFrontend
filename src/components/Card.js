import { Box, Text, HStack, Stack, AspectRatio, Center, Image, Heading } from 'native-base';
import * as React from 'react';
import { Pressable } from 'react-native';

function Card() {
  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: 'coolGray.600',
          backgroundColor: 'gray.700',
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: 'gray.50',
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
              }}
              alt="image"
            />
          </AspectRatio>
          
        </Box>
        {/* </Pressable> */}
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md">Pet Name</Heading>
            <Text
              fontSize="xs"
              _light={{
                color: 'violet.500',
              }}
              _dark={{
                color: 'violet.400',
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              Pet Type
            </Text>
          </Stack>
          {/* <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech industry. The city
            is also known for its parks and nightlife.
          </Text> */}
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              {/* <Text
                color="coolGray.600"
                _dark={{
                  color: 'warmGray.200',
                }}
                fontWeight="400"
              >
                6 mins ago
              </Text> */}
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Card;
