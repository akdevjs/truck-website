import React from 'react'
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/core'
import Button from './button'

const About: React.FC = () => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" marginY="24" alignItems="center">
      <Flex
        flexDirection="column"
        flexWrap="nowrap"
        gridColumn={['1 / 7', '1 / 7', '1 / 7', '1 / 4', '1 / 4']}
        alignItems="center"
        paddingX={['8', '8', '8', '24', '24']}
        marginX="auto"
        maxW="850px"
      >
        <Heading
          as="h3"
          textTransform="uppercase"
          fontSize="5xl"
          fontWeight="normal"
          mb="20px"
          alignSelf="flex-start"
        >
          About us
        </Heading>
        <Text fontSize="md" mb="20px" alignSelf="flex-start" textAlign="left">
          At Square Freight LLC, we’re pioneers in the dispatch industry,
          offering unparalleled service to transportation partners across the
          United States. Our mission is to be your go-to choice for dispatching
          solutions, powered by advanced technology and exceptional customer
          support.We understand the unique challenges faced by both large
          carriers and small businesses, providing tailored logistics solutions
          that streamline operations, reduce costs, and improve overall
          performance. Our services include efficient load assignment, real-time
          tracking, 24/7 online support, and comprehensive management of
          billing, invoicing, and compliance paperwork.Leveraging cutting-edge
          technology, we ensure the most efficient delivery routes, minimizing
          transit times and enhancing customer satisfaction. We are committed to
          transparency, offering competitive pricing with no hidden fees or
          double brokering.
        </Text>
        <Button>Learn More</Button>
      </Flex>
      <Box gridColumn="4 / 7">
        <Image
          src="/about-us-bg.jpg"
          display={['none', 'none', 'none', 'block', 'block']}
          width="100%"
          borderRadius={'60px 0px 0px 60px'}
        />
      </Box>
    </Grid>
  )
}

export default About
