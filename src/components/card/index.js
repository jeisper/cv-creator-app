import { Image } from "@chakra-ui/image";
import { Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import { useHistory } from "react-router";
import { useMediaQuery } from "@chakra-ui/media-query";

function Card({ template }) {
  const isOnMobile = useMediaQuery("(max-width: 768px)");
  const history = useHistory();
  return (
    <Flex
      flexDir="column"
      h="300"
      w="300px"
      border="1px"
      p="5px"
      m="5"
      alignItems="center"
      borderRadius="10"
      _hover={{
        transform: "scale(1.1)",
        shadow: "2xl",
      }}
      onClick={() => {
        history.push("/create/" + template.templateid);
      }}
    >
      <Flex px="5">
        <Image
          h="250"
          w="250"
          objectFit="cover"
          src={template.previewImg}
          my="10px"
        ></Image>
      </Flex>
      <Heading as="h6" size={isOnMobile ? "xs" : "sm"} color="navy">
        {template.name}
      </Heading>
    </Flex>
  );
}

export default Card;
