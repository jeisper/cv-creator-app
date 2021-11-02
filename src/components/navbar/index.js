import React from "react";
import { Box, Flex, Spacer } from "@chakra-ui/layout";
import { Image, Button } from "@chakra-ui/react";
import Search from "../search";
import logo from "../../Assets/Images/cv.png";
function Navbar({ showSearch }) {
  return (
    <Flex w="100%" h="15vh">
      <Image src={logo} alt="logo" h="15vh" />

      <Spacer />
      {showSearch ? (
        <Box h="max-content" w="30vw">
          <Search />
        </Box>
      ) : null}
      <Spacer />

      <Flex p="5">
        <Box mx="5">Login</Box>
        <Button></Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
