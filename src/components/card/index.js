import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import test from "../../Assets/css/test.css";

function Card() {
  return (
    <Flex className="hover" flexDir="column" width="30vh" border="1px" p="4px">
      <Image></Image>
      <Heading as="h5" size="sm">
        Template 1
      </Heading>
      <Text>This is the 1st template as it is quite creative</Text>
    </Flex>
  );
}

export default Card;
