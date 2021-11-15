import { Flex, Text, Heading } from "@chakra-ui/layout";
import React from "react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { getValue } from "../../Utils";

function WorkExperience({ work }) {
  return (
    <Flex w="100%">
      <Flex w="100%" flexDir="column">
        <Flex w="100%" justifyContent="space-between">
          <Heading as="h5" size="md" color="black" ml="2">
            {getValue(work.company, "PressUp")}
          </Heading>
          <Heading as="h5" size="md" color="black" ml="20">
            {getValue(work.startDate + " - " + work.endDate, " 2012 - 2017 ")}
          </Heading>
        </Flex>
        <Flex flexDir="column" w="100%" flexWrap="wrap" overflow="auto">
          <Heading as="h2" size="md" ml="2" mt="5">
            Role: {work.jobTitle}
          </Heading>
          <Heading as="h2" size="md" ml="2" mt="5">
            Duties:
          </Heading>
          <Text mx="20" my="2">
            {work.description}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default WorkExperience;
