import Icon from "@chakra-ui/icon";
import { Heading, Box, Text, Flex } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import { DiCss3, DiJavascript, DiNodejs, DiReact } from "react-icons/di";

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:1024px)");
  return (
    <>
      {/* Experience */}
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        w="100%"
        maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
      >
        <Box alignSelf="center" px="32" py="16">
          <Heading fontWeight="extrabold" color="#ED881C" size="4xl">
            1+
          </Heading>
          <Text fontSize="2xl" color="gray.400">
            Year of experience
          </Text>
        </Box>
        <Box alignSelf="center" px="32" py="16">
          <Text fontWeight="bold" fontSize="2xl" color="gray.400">
            Software Developer
          </Text>
          <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8}>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              bg="cyan.500"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: "blue.400", cursor: "pointer" }}
              onClick={() => window.open("https://reactjs.org/")}
            >
              <Icon color="white" p="4" as={DiReact} w="24" h="24" />
              <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                React App
              </Text>
            </Flex>
            <Flex
              rounded="xl"
              direction="column"
              mt={4}
              ml={isNotSmallerScreen ? 4 : 0}
              bg="green.400"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: "teal.500", cursor: "pointer" }}
              onClick={() => window.open("https://nodejs.org/en/")}
            >
              <Icon color="white" p="4" as={DiNodejs} w="24" h="24" />
              <Text color="white" p="4" fontSize="xl" fontWeight="semibold">
                Node Js
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default Profile;
