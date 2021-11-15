import { Flex, Heading } from "@chakra-ui/layout";
import Module from "../Module";
import React from "react";
import { getValue } from "../../Utils";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from "@chakra-ui/react";

function School({ school }) {
  console.log("This is: ", school.details.modules);
  return (
    <Flex w="100%" flexDir="column">
      <Flex w="100%" justifyContent="space-between">
        <Heading as="h5" size="md" color="black" ml="2">
          {getValue(school.institutionName, "Beneavin College De La Salle")}
        </Heading>
        <Heading as="h5" size="md" color="black" ml="20">
          {getValue(school.startDate + " - " + school.endDate, " 2012 - 2017 ")}
        </Heading>
      </Flex>
      <Flex flexDir="column" w="100%" flexWrap="wrap" overflow="auto">
        <Heading as="h2" size="md" ml="2" mt="5">
          Modules:
        </Heading>
        <Table size="sm" mx="1" my="10">
          <Thead>
            <Tr>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Module course={school.details.modules} />
          </Tbody>
        </Table>
      </Flex>
    </Flex>
  );
}

export default School;
