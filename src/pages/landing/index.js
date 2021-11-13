import { Button } from "@chakra-ui/button";
import { Flex, Heading } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import { useHistory } from "react-router";
import Navbar from "../../components/navbar";

function Landing() {
  const [isOnmobile] = useMediaQuery("(max-width: 768px)");
  const history = useHistory();
  return (
    <Flex w="100%" flexDir="column">
      <Navbar showSearch={false} />
      <Flex w="100%" h="70vh" flexWrap="wrap">
        <Flex
          w={isOnmobile ? "100%" : "50%"}
          p="10"
          justify="center"
          flexDir="column"
          flexWrap="wrap"
        >
          <Heading fontSize="7xl" my="4" mx="15" color="#41B3A3">
            Quick CV Creator
          </Heading>
          <Heading fontSize="2xl" ml="5" color="#C38D9E">
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
            Choose template
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
            <source
              src={
                !isOnmobile
                  ? "https://cdn.dribbble.com/users/1774675/screenshots/16452555/media/06eab9486f336682bfe19dc66c78e958.mp4"
                  : null
              }
            ></source>
          </video>
        </Flex>
      </Flex>
      <Flex w="100%" h="15vh" bg="blue.500" my="10">
        <Flex w="50%" shadow="dark-lg" align="center" justify="center" h="100%">
          <Heading color="white"> 1 Resumé</Heading>
        </Flex>
        <Flex w="50%" shadow="dark-lg" align="center" justify="center">
          <Heading color="white">5 Minutes</Heading>
        </Flex>
      </Flex>
      <Flex w="100%" mt="5" flexWrap="wrap" p="20">
        <Flex w="50%">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/uG2aEh5xBJE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Flex>
        <Flex w="50%" alignItems="center" justify="center" flexDir="column">
          <Heading fontSize="5xl" color="#C38D9E">
            Get your CV tips here
          </Heading>
          <Heading fontSize="3xl" color="#41B3A3">
            Get your CV tips here
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Landing;
