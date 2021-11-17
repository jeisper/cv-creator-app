import React from "react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import Search from "../Search";
import logo from "../../Assets/Images/cv.png";
import { useHistory } from "react-router";
import { useMediaQuery } from "@chakra-ui/media-query";
import SignIn from "../Signin";

function Navbar({ showSearch, Search, setSearch, handleChange }) {
  const history = useHistory();
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Flex w="100%" h="15vh" flexWrap="wrap" align="center" justify="center">
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
          <Search
            search={Search}
            setSearch={setSearch}
            handleChange={handleChange}
          />
        </Box>
      ) : (
        <Flex h="100%" w="33vw" mt="2" align="center" p="10">
          <Heading fontSize={isOnmobile ? "large" : "3xl"}>
            Create the perfect CV
          </Heading>
        </Flex>
      )}
      <Spacer />

      <Flex p="5">
        <SignIn />
      </Flex>
    </Flex>
  );
}

export default Navbar;
