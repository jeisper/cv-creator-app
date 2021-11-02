import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { useHistory } from "react-router";
import temp1 from "../../Assets/Images/temp1.png";

function Card() {
  const history = useHistory();
  return (
    <Flex
      flexDir="column"
      h="300"
      w="20vw"
      border="1px"
      p="4px"
      m="10"
      alignItems="center"
      borderRadius="10"
      _hover={{
        transform: "scale(1.1)",
        shadow: "2xl",
      }}
      onClick={() => {
        history.push("/create/template1");
      }}
    >
      <Image src={temp1}></Image>
      <Heading as="h5" size="sm" mt="25px" color="navy">
        Template 1
      </Heading>
    </Flex>
  );
}

export default Card;
