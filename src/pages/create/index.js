import { Flex } from "@chakra-ui/layout";
import React from "react";
import { useParams } from "react-router";
import Navbar from "../../components/navbar";
import Professional from "../../components/templates/Professional";

function Create() {
  let { templateID } = useParams(); //object destructuring
  let currentTemplate;
  switch (templateID) {
    case "template1":
      currentTemplate = <Professional />;
      break;

    default:
      currentTemplate = "404 not found";
  }

  return (
    <Flex flexDir="column">
      <Navbar showSearch={false} />
      {currentTemplate}
    </Flex>
  );
}

export default Create;
