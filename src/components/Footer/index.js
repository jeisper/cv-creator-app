import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";

function Footer() {
  return (
    <Flex
      w="100%"
      bg="blue.500"
      color="white"
      padding="5"
      justify="center"
      align="center"
      flexWrap="wrap"
    >
      <Flex flexDir="column" w="50%" align="center" justify="center">
        <Heading mx="5">Neil Gibson</Heading>
        <Heading mx="5">Harsh Chandra</Heading>
        <Heading mx="5">Givago Guimaraes</Heading>
        <Heading mx="5">Immanuel Adeoye</Heading>
      </Flex>
      <Flex flexDir="column" w="50%" align="center" justify="center">
        <Heading mx="5">LinkedIn</Heading>
        <Heading mx="5">LinkedIn</Heading>
        <Heading mx="5">LinkedIn</Heading>
        <Heading mx="5">LinkedIn</Heading>
      </Flex>
    </Flex>
  );
}

export default Footer;
