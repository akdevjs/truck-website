import React from 'react'
import { Text, Flex, Grid, Box } from '@chakra-ui/core'
import Logo from './logo'
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'

const Footer: React.FC = () => {
  return (
    <Grid as="footer" templateColumns="repeat(6, 1fr)" mt="16" mb="16">
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 3', '1 / 3']}
        pl={['8', '8', '8', '24', '24']}
      >
        <Logo />
        <Text fontSize="sm" mt="4" textAlign="left" lineHeight="22px">
          Welcome to SquareFreights, where innovation meets efficiency in the
          world of logistics. As industry pioneers, we are dedicated to
          providing top-notch dispatching services tailored to the needs of
          trucking companies, owner-operators, and drivers.
        </Text>
        <Flex
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          mt="8"
        >
          <Box as={FaFacebookF} size="22px" color="orange.500" mr="12px" />
          <Box as={FaTwitter} size="22px" color="orange.500" mr="12px" />
          <Box as={FaGoogle} size="22px" color="orange.500" mr="12px" />
          <Box as={FaInstagram} size="22px" color="orange.500" mr="12px" />
          <Box as={FaYoutube} size="22px" color="orange.500" />
        </Flex>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '3 / 4', '3 / 4']}
        paddingX="8"
        mt={['12', '12', '12', '0', '0']}
      >
        <Text color="orange.500" fontWeight="bold" fontSize="20px" mb="8px">
          Projects
        </Text>
        <Text mb="6px">Project 1</Text>
        <Text mb="6px">Project 2</Text>
        <Text mb="6px">Project 3</Text>
        <Text mb="6px">Project 4</Text>
        <Text>Project 5</Text>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '4 / 5', '4 / 5']}
        paddingX={['8', '8', '8', '2', '2']}
        mt={['12', '12', '12', '0', '0']}
      >
        <Text color="orange.500" fontWeight="bold" fontSize="20px" mb="8px">
          Contact Us
        </Text>
        <Text mb="6px">Address: CcanyonchasedrRichmond TX</Text>
        <Text mb="6px">Phone: 9034939292</Text>
        <Text>Email: info@squarefrieghts.com</Text>
      </Flex>

      <Flex
        flexDirection="column"
        alignItems="flex-start"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '5 / 6', '5 / 6']}
        paddingX={['8', '8', '8', '2', '2']}
        mt={['12', '12', '12', '0', '0']}
      >
        <Text color="orange.500" fontWeight="bold" fontSize="20px" mb="8px">
          Newsletter
        </Text>
        <Text mb="6px">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </Flex>
    </Grid>
  )
}

export default Footer
