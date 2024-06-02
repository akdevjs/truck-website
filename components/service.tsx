import { Grid, Text, Flex, Heading, Button, Box, Image } from '@chakra-ui/core'

const Service: React.FC = () => {
  return (
    <Box position="relative">
      <Image
        width={['0%', '0%', '0%', '40%', '60%']}
        maxW="660px"
        position="absolute"
        top="40%"
        left="5%"
        src="/service-bg.jpg"
        display={['none', 'none', 'none', 'block', 'block']}
        borderColor="white"
        borderWidth="10px"
        borderStyle="solid"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      />
      <Grid
        backgroundColor="orange.500"
        templateColumns="repeat(12, 1fr)"
        templateRows="repeat(3, 1fr)"
      >
        <Flex
          flexDirection="column"
          flexWrap="nowrap"
          alignItems="center"
          maxW="850px"
          color="white"
          paddingY="88px"
          gridColumn={['2 / 12', '2 / 12', '2 /12', '7 / 13', '7 / 13']}
          gridRow="1 / 4"
        >
          <Heading
            as="h3"
            textTransform="uppercase"
            fontSize={['3xl', '3xl', '5xl', '5xl', '5xl']}
            fontWeight="extrabold"
            mb="8px"
            alignSelf="flex-start"
          >
            Our Professional Services
          </Heading>
          <Heading
            as="h4"
            fontSize={['lg', 'lg', 'xl', 'xl', 'xl']}
            fontWeight="normal"
            mb="20px"
            alignSelf="flex-start"
          >
            We Will provide Road Freight, Warehousing Service, Supply Chain
            Management
          </Heading>
          <Text
            fontSize="sm"
            mb="20px"
            alignSelf="flex-start"
            textAlign="left"
            lineHeight="23px"
          >
            SquareFreights is your comprehensive logistics partner, specializing
            in road freight, warehousing, and supply chain management. We ensure
            efficient delivery of goods through our reliable road freight
            services, supported by secure warehousing for optimal inventory
            management and quick order fulfillment. With expertise in supply
            chain orchestration, we streamline logistics from sourcing to
            delivery, empowering businesses with efficient inventory management
            and optimized distribution channels.
          </Text>
          <Button
            alignSelf="flex-start"
            variantColor="white"
            backgroundColor="#fff"
            color="orange.500"
            width="fit-content"
          >
            Learn More
          </Button>
        </Flex>
      </Grid>
    </Box>
  )
}

export default Service
