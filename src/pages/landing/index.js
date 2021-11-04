import { Button } from "@chakra-ui/button";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import { useHistory } from "react-router";
import Navbar from "../../components/navbar";

function Landing() {
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const history = useHistory();
  return (
    <Flex w="100%" flexDir="column" boxShadow="2px 2px 5px black">
      <Navbar showSearch={false} />
      <Flex w="100%" h="70vh" flexWrap="wrap">
        <Flex
          w={isOnmobile ? "100%" : "50%"}
          p="10"
          justify="center"
          flexDir="column"
          flexWrap="wrap"
        >
          <Heading fontSize="7xl" my="4" mx="15">
            Quick CV Creator
          </Heading>
          <Heading fontSize="2xl" ml="5">
            Build the perfect CV in minutes
          </Heading>
          <Button
            bg="blue.500"
            w="40%"
            color="white"
            m="5"
            onClick={() => {
              history.push("/templates");
            }}
          >
            Click me bitch
          </Button>
        </Flex>
        <Flex w="50vw" overflow="hidden">
          <video
            loop
            muted
            autoPlay={true}
            luid={false}
            width="10000px"
            height="50%"
          >
            <source src="https://cdn.dribbble.com/users/1774675/screenshots/16452555/media/06eab9486f336682bfe19dc66c78e958.mp4"></source>
          </video>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Landing;
