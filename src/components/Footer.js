import Icon from "@chakra-ui/icon";
import { HStack, Stack, Text } from "@chakra-ui/layout";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import React from "react";

function Footer() {
  return (
    <Stack>
      <Text>Copyright 2021, Toupawa Studio.</Text>
      <HStack spacing="12">
        <Icon
          as={FaFacebookF}
          boxSize="5"
          onClick={() =>
            window.open("https://www.facebook.com/washira.suyajai")
          }
          _hover={{ cursor: "pointer" }}
        />
        <Icon
          as={FaGithub}
          boxSize="5"
          onClick={() => window.open("https://github.com/Washira")}
          _hover={{ cursor: "pointer" }}
        />
        <Icon
          as={FaTwitter}
          boxSize="5"
          onClick={() => window.open("https://twitter.com/Toupawa1")}
          _hover={{ cursor: "pointer" }}
        />
        <Icon
          as={FaLinkedin}
          boxSize="5"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/washira-suyajai-696903199/"
            )
          }
          _hover={{ cursor: "pointer" }}
        />
      </HStack>
    </Stack>
  );
}

export default Footer;
