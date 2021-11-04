import React from "react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { Image, Button } from "@chakra-ui/react";
import Search from "../search";
import logo from "../../Assets/Images/cv.png";
import { IoPerson } from "react-icons/io5";
import { useHistory } from "react-router";
function Navbar({ showSearch }) {
  const history = useHistory();
  return (
    <Flex w="100%" h="15vh" flexWrap="wrap">
      <Image
        src={logo}
        alt="logo"
        h="15vh"
        onClick={() => {
          history.push("/landing");
        }}
      />

      <Spacer />
      {showSearch ? (
        <Box h="max-content" w="30vw">
          <Search />
        </Box>
      ) : (
        <Flex
          h="100%"
          w="33vw"
          mt="2"
          align="center"
          p="10"
          borderLeft="1px blue.500"
          borderRight="1px blue.500"
        >
          <Heading fontFamily="Noto serif">Create your perfect CV</Heading>
        </Flex>
      )}
      <Spacer />

      <Flex p="5">
        <Button leftIcon={<IoPerson />} color="blue.500" p="5">
          Login
        </Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
