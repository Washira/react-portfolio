import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Box, Circle, Flex, Stack, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";

function Header() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery("(min-width:1024px)");
  return (
    <Stack>
      <Circle
        position="absolute"
        bg="blue.100"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing='200px'
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            bgGradient="linear(to-r, #FFCE33, #FF8D33, #FA1102)"
            fontWeight="bold"
            bgClip="text"
          >
            Washira Suyajai
          </Text>
          <Box width={isNotSmallerScreen ? "600px" : ""}>
            <Text color={isDark ? "gray.200" : "gray.500"}>
              Full-Stack Developer, Blogger, UI Designer, Investor, House
              Worker.
              Founder of http://toupawa.com. I'm from Bangkok, Thailand.
            </Text>
          </Box>

          <Button
            mt={8}
            colorScheme="yellow"
            onClick={() => window.open("http://toupawa.com")}
          >
            My blog
          </Button>
        </Box>
        <Box ml={isNotSmallerScreen ? "20" : "0"}>
          <Image
            alignSelf="center"
            mt={isNotSmallerScreen ? "0" : "12"}
            mb={isNotSmallerScreen ? "0" : "12"}
            borderRadius="full"
            backgroundColor="transparent"
            boxShadow="lg"
            boxSize="300px"
            src="https://avatars.githubusercontent.com/u/40855962?v=4"
          />
        </Box>
      </Flex>
    </Stack>
  );
}

export default Header;
