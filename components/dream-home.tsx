import React from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/core'
import Button from './button'

const DreamHome: React.FC = () => {
  return (
    <Flex width="100%" flexDirection="column" alignItems="center" mt="24">
      <Heading
        as="h3"
        mb="20"
        fontSize={['2xl', '2xl', '3xl', '3xl', '3xl']}
        textAlign="center"
        marginX="auto"
      >
        All the more reasons to let us get your job done now
      </Heading>
      <Flex
        width="90%"
        flexDirection={['column', 'column', 'column', 'row', 'row']}
        justifyContent="space-between"
        alignItems="center"
        maxW="1280px"
        mb="12"
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
        >
          <svg
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth={1.5}
            style={{
              color: '#FBA442',
              width: 80,
              height: 80,
              marginRight: 15
            }}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>

          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">World Wide</Text>
            <Text fontSize="sm">
              Truck transport ensures timely delivery and trade. Technology
              boosts its efficiency.
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{
              color: '#FBA442',
              width: 80,
              height: 80,
              marginRight: 15
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>

          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Ocean Cargo</Text>
            <Text fontSize="sm">
              Ocean cargo transport drives global trade with efficient shipping,
              connecting continents economically.
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          maxW="380px"
          mb={['8', '8', '8', '0', '0']}
        >
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            style={{
              color: '#FBA442',
              width: 80,
              height: 80,
              marginRight: 15
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>

          <Flex flexDirection="column" fontSize="xl">
            <Text fontWeight="bold">Road freight</Text>
            <Text fontSize="sm">
              Road freight transport supports regional trade with reliable
              delivery, reaching remote areas efficiently.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Button>Consult online now</Button>
    </Flex>
  )
}
export default DreamHome
