import { Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { getValue } from "../../Utils";

function Projects({ project }) {
  return (
    <Flex flexDir="column" w="100%" flexWrap="wrap" overflow="auto">
      <Heading as="h2" size="md" ml="2">
        {getValue(project.title, "project1")}
      </Heading>
      <Text mx="20">{project.description}</Text>
    </Flex>
  );
}

export default Projects;
