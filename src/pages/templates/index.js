import React from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import Navbar from "../../components/navbar/navbar";

function Templates() {
  return (
    <Flex flexDirection="column">
      <Navbar />
      <Flex justifyContent="center" alignItems="center">
        <Heading>Choose A Template</Heading>
      </Flex>
    </Flex>
  );
}

export default Templates;
