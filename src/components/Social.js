import Icon from "@chakra-ui/icon";
import { HStack } from "@chakra-ui/layout";
import React from "react";
import { useMediaQuery } from "@chakra-ui/media-query";
import {
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Social() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:1024px)");
  return (
    <HStack spacing={isNotSmallerScreen ? "24" : "12"}>
      <Icon
        as={FaFacebookF}
        boxSize="50"
        onClick={() => window.open("https://www.facebook.com/washira.suyajai")}
        _hover={{ cursor: "pointer" }}
      />
      <Icon
        as={FaGithub}
        boxSize="50"
        onClick={() => window.open("https://github.com/Washira")}
        _hover={{ cursor: "pointer" }}
      />
      <Icon
        as={FaTwitter}
        boxSize="50"
        onClick={() => window.open("https://twitter.com/Toupawa1")}
        _hover={{ cursor: "pointer" }}
      />
      <Icon
        as={FaLinkedin}
        boxSize="50"
        onClick={() =>
          window.open("https://www.linkedin.com/in/washira-suyajai-696903199/")
        }
        _hover={{ cursor: "pointer" }}
      />
    </HStack>
  );
}

export default Social;
