import React from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import Navbar from "../../components/navbar";
import Card from "../../components/card";
import templates from "../../tempData.json";

function Templates() {
  return (
    <Flex flexDirection="column" w="100vw">
      <Navbar showSearch />
      <Flex justifyContent="center" alignItems="center" flexDir="column">
        <Heading color="navy">Choose A Template</Heading>
        <Flex
          mt="10"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Templates;
