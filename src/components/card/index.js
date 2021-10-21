import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import test from "../../Assets/css/test.css";
import temp1 from "../../Assets/Images/temp1.png";

function Card() {
  return (
    <Flex
      className="hover"
      flexDir="column"
      h="300"
      w="40vh"
      border="1px"
      p="4px"
      mt="10px"
      alignItems="center"
      borderRadius="10"
    >
      <Image src={temp1}></Image>
      <Heading as="h5" size="sm" mt="25px" color="navy">
        Template 1
      </Heading>
    </Flex>
  );
}

export default Card;
