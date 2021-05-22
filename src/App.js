import "./App.css";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import {
  FaSun,
  FaMoon,
  FaLinkedin,
  FaAddressBook
} from "react-icons/fa";
import { useColorMode } from "@chakra-ui/color-mode";
import Header from "./components/Header";
import Social from "./components/Social";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading ml="8" size="md" fontWeight="semibold" color="#FC520D">
          Toupawa Blog's Admin
        </Heading>
        <Spacer></Spacer> {/* use for make space between Heading and IconButtons */}
        <IconButton
          icon={<FaLinkedin />}
          isRound="true"
          onClick={() => window.open("https://www.linkedin.com/in/washira-suyajai-696903199/")}
        ></IconButton>
        <IconButton
          ml={2}
          icon={<FaAddressBook />}
          isRound="true"
          onClick={() => window.open("http://toupawa.com")}
        ></IconButton>
        <IconButton
          ml={8}
          icon={isDark ? <FaSun /> : <FaMoon />}
          isRound="true"
          onClick={toggleColorMode}
        ></IconButton>
      </Flex>
      <Header />
      <Social />
      <Profile />
      <Footer />
    </VStack>
  );
}

export default App;
