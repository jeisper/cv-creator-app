import { Flex } from "@chakra-ui/layout";
import React from "react";
import { useParams } from "react-router";
import Navbar from "../../components/navbar";
import Professional from "../../components/templates/Professional";

function Create() {
  let { templateID } = useParams(); //object destructuring
  let currentTemplate;
  switch (templateID) {
    case "elegant":
      currentTemplate = <Professional />;
      break;

    default:
      currentTemplate = "404 not found";
  }

  return (
    <Flex flexDir="column" w="100%">
      <Navbar showSearch={false} />
      {currentTemplate}
    </Flex>
  );
}

export default Create;
