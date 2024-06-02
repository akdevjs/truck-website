import React from 'react'

import { Flex, Text, Heading, Grid, Image, Box } from '@chakra-ui/core'

const CreativeDirector: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      mt={['24', '24', '24', '24', '64']}
    >
      <Heading as="h3" textTransform="uppercase" mb="20px">
        Type of Trucks
      </Heading>
      <Text fontSize="16px" mb="32px" maxW="460px" textAlign="center">
        We are dealing with varaity of trucks to ensure the best and all
        available services to be done on time like our costomer demands
      </Text>
      <Grid
        gridTemplateColumns="repeat(3, 1fr)"
        rowGap="60px"
        columnGap="20px"
        px={['8', '8', '8', '24', '24']}
      >
        <Box
          position="relative"
          gridColumn={['1 / 4', '1 / 4', 'auto', 'auto', 'auto']}
        >
          <Image src="/abc.jpg" />
          <Flex
            position="absolute"
            bottom="-35px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY="6px"
            width="80%"
            backgroundColor="white"
            borderColor="orange.500"
            borderWidth="6px"
          >
            <Text fontWeight="medium" fontSize="22px">
              Power Trucks
            </Text>
            <Text textTransform="uppercase" color="orange.500">
              With Hauling Trailers
            </Text>
          </Flex>
        </Box>
        <Box
          position="relative"
          gridColumn={['1 / 4', '1 / 4', 'auto', 'auto', 'auto']}
        >
          <Image src="/abc.jpg" />
          <Flex
            position="absolute"
            bottom="-35px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY="6px"
            width="80%"
            backgroundColor="white"
            borderColor="orange.500"
            borderWidth="6px"
          >
            <Text fontWeight="medium" fontSize="22px">
              Power Trucks
            </Text>
            <Text textTransform="uppercase" color="orange.500">
              With Hauling Trailers
            </Text>
          </Flex>
        </Box>
        <Box
          position="relative"
          gridColumn={['1 / 4', '1 / 4', 'auto', 'auto', 'auto']}
        >
          <Image src="/abc.jpg" />
          <Flex
            position="absolute"
            bottom="-35px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY="6px"
            width="80%"
            backgroundColor="white"
            borderColor="orange.500"
            borderWidth="6px"
          >
            <Text fontWeight="medium" fontSize="22px">
              Power Trucks
            </Text>
            <Text textTransform="uppercase" color="orange.500">
              With Hauling Trailers
            </Text>
          </Flex>
        </Box>
        <Box
          position="relative"
          gridColumn={['1 / 4', '1 / 4', 'auto', 'auto', 'auto']}
        >
          <Image src="/abc.jpg" />
          <Flex
            position="absolute"
            bottom="-35px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY="6px"
            width="80%"
            backgroundColor="white"
            borderColor="orange.500"
            borderWidth="6px"
          >
            <Text fontWeight="medium" fontSize="22px">
              Power Trucks
            </Text>
            <Text textTransform="uppercase" color="orange.500">
              With Hauling Trailers
            </Text>
          </Flex>
        </Box>
        <Box
          position="relative"
          gridColumn={['1 / 4', '1 / 4', 'auto', 'auto', 'auto']}
        >
          <Image src="/abc.jpg" />
          <Flex
            position="absolute"
            bottom="-35px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY="6px"
            width="80%"
            backgroundColor="white"
            borderColor="orange.500"
            borderWidth="6px"
          >
            <Text fontWeight="medium" fontSize="22px">
              Power Trucks
            </Text>
            <Text textTransform="uppercase" color="orange.500">
              With Hauling Trailers
            </Text>
          </Flex>
        </Box>
        <Box
          position="relative"
          gridColumn={['1 / 4', '1 / 4', 'auto', 'auto', 'auto']}
        >
          <Image src="/abc.jpg" />
          <Flex
            position="absolute"
            bottom="-35px"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingY="6px"
            width="80%"
            backgroundColor="white"
            borderColor="orange.500"
            borderWidth="6px"
          >
            <Text fontWeight="medium" fontSize="22px">
              Power Trucks
            </Text>
            <Text textTransform="uppercase" color="orange.500">
              With Hauling Trailers
            </Text>
          </Flex>
        </Box>
      </Grid>
    </Flex>
  )
}

export default CreativeDirector
