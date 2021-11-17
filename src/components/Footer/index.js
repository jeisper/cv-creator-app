import { Flex, Heading } from "@chakra-ui/layout";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
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
      <Flex flexDir="row" w="100%" align="center" justify="center">
        <Flex my="2" mx="10" flexDir="row">
          <Heading fontSize="20">Neil Gibson</Heading>

          <AiOutlineLinkedin size="30" />
          <AiOutlineGithub size="30" />
        </Flex>
        <Flex my="2" mx="10">
          <Heading fontSize="20">Harsh Chandra</Heading>
          <AiOutlineLinkedin size="30" mx="2" />
          <AiOutlineGithub size="30" mx="2" />
        </Flex>
        <Flex my="2" mx="10">
          <Heading fontSize="20">Givago Guimaraes</Heading>
          <AiOutlineLinkedin size="30" mx="2" />
          <AiOutlineGithub size="30" mx="2" />
        </Flex>
        <Flex my="2" mx="10">
          <Heading fontSize="20">Immanuel Adeoye</Heading>
          <AiOutlineLinkedin size="30" mx="2" />
          <AiOutlineGithub size="30" mx="2" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
