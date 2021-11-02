import { Image } from "@chakra-ui/image";
import { Flex, Spacer } from "@chakra-ui/layout";
import React from "react";
import { getValue } from "../../Utils";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

function Professional() {
  const data = {};
  return (
    <Flex flexDir="column" px="70" w="100vw">
      <Flex
        flexWrap="wrap"
        flexDir="row"
        border="1px"
        h="100vh"
        w="100%"
        justifyContent="space-between"
        p="30"
      >
        <Image
          borderRadius="full"
          boxSize="200"
          src={getValue(
            data.image,
            "https://miro.medium.com/max/3150/1*1a3GXrNqpIUImV_w084HfQ.jpeg"
          )}
        ></Image>
        <UnorderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
      </Flex>
    </Flex>
  );
}

export default Professional;
