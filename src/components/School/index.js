import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { getValue } from "../../Utils";

function School({ school }) {
  return (
    <Flex>
      <Flex w="100%" justifyContent="space-between">
        <Heading as="h5" size="md" color="black" ml="2">
          {getValue(
            school && school.institutionName,
            "Beneavin College De La Salle"
          )}
        </Heading>
        <Heading as="h5" size="md" color="black" ml="20">
          {getValue(school && school.institutionName, " 2012 - 2017 ")}
        </Heading>
      </Flex>
    </Flex>
  );
}

export default School;
