import React from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import Navbar from "../../components/navbar";
import Card from "../../components/card";

function Templates() {
  return (
    <Flex flexDirection="column">
      <Navbar />
      <Flex justifyContent="center" alignItems="center" flexDir="column">
        <Heading>Choose A Template</Heading>
        <Flex mt="10">
          <Card />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Templates;
