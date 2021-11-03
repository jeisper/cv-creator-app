import { Image } from "@chakra-ui/image";
import { Flex, Heading, Spacer, Text } from "@chakra-ui/layout";
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
      <Flex border="1px" h="100%" w="100%" flexDir="column">
        <Flex
          flexWrap="wrap"
          flexDir="row"
          borderBottom="1px"
          w="100%"
          justifyContent="space-between"
          p="50"
        >
          <Flex w="20%"></Flex>
          <Image
            borderRadius="full"
            boxSize="200"
            src={getValue(
              data.image,
              "https://miro.medium.com/max/3150/1*1a3GXrNqpIUImV_w084HfQ.jpeg"
            )}
          ></Image>
          <UnorderedList pt="10">
            <ListItem>Name: {getValue(data.name, "Neil Gibson")}</ListItem>
            <ListItem>
              Email: {getValue(data.email, "1neilgibson1@gmail.com")}
            </ListItem>
            <ListItem>Phone: {getValue(data.phone, "0852120302")}</ListItem>
            <ListItem>
              LinkedIn: {getValue(data.linkedIn, "neil-gibson linkedIn")}
            </ListItem>
          </UnorderedList>
        </Flex>
        <Flex flexDir="column" w="100%" alignItems="center" p="25">
          <Heading as="h2" size="2xl" color="blue.500">
            Profile
          </Heading>
          <Text size="xxl" my="10" mx="20">
            {getValue(
              data.profile,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum quam at mauris laoreet, vel suscipit magna cursus. Pellentesque vel interdum urna. Nulla facilisi. Quisque scelerisque bibendum odio non ullamcorper. Maecenas ultrices justo velit, nec condimentum lorem semper non. Pellentesque id ex non sem volutpat tempus et quis ex. Proin commodo a mauris at rhoncus. Quisque rutrum feugiat lorem, ut convallis magna sollicitudin sit amet. Fusce id metus lorem. Aenean ut risus ac ligula auctor egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus enim leo, gravida eu risus id, lobortis rutrum libero. Suspendisse ut velit id justo eleifend"
            )}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Professional;
