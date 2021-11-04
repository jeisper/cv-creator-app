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
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

function Professional() {
  const data = {};
  return (
    <Flex flexDir="column" px="70" w="100vw" mt="10">
      <Flex border="1px" h="100%" w="100%" flexDir="column">
        <Flex
          flexWrap="wrap"
          flexDir="row"
          borderBottom="1px"
          w="100%"
          align="center"
          justifyContent="space-between"
          p="50"
        >
          <Image
            borderRadius="full"
            boxSize="20vw"
            src={getValue(
              data.image,
              "https://miro.medium.com/max/3150/1*1a3GXrNqpIUImV_w084HfQ.jpeg"
            )}
          ></Image>
          <Flex h="100%" align="center">
            <UnorderedList
              justifyContent="center"
              alignSelf="right"
              fontSize="xl"
            >
              <ListItem>
                Name: {getValue(data.fname + " " + data.lname, "Neil Gibson")}
              </ListItem>
              <ListItem>
                Email: {getValue(data.email, "1neilgibson1@gmail.com")}
              </ListItem>
              <ListItem>Phone: {getValue(data.phone, "0852120302")}</ListItem>
              <ListItem>
                LinkedIn: {getValue(data.linkedin, "neil-gibson linkedIn")}
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
        <Flex
          flexDir="column"
          w="100%"
          alignItems="center"
          p="25"
          flexWrap="wrap"
        >
          <Heading as="h2" size="2xl" color="blue.500">
            Profile
          </Heading>
          <Text size="xxl" my="10" mx="10">
            {getValue(
              data.summary,
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vestibulum quam at mauris laoreet, vel suscipit magna cursus. Pellentesque vel interdum urna. Nulla facilisi. Quisque scelerisque bibendum odio non ullamcorper. Maecenas ultrices justo velit, nec condimentum lorem semper non. Pellentesque id ex non sem volutpat tempus et quis ex. Proin commodo a mauris at rhoncus. Quisque rutrum feugiat lorem, ut convallis magna sollicitudin sit amet. Fusce id metus lorem. Aenean ut risus ac ligula auctor egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus enim leo, gravida eu risus id, lobortis rutrum libero. Suspendisse ut velit id justo eleifend"
            )}
          </Text>
          <Heading as="h2" size="2xl" color="blue.500" mb="10">
            Education
          </Heading>

          <Flex w="100%" justifyContent="space-between">
            <Heading as="h5" size="md" color="black" ml="2">
              {getValue(data.deucation, "Beneavin College De La Salle")}
            </Heading>
            <Heading as="h5" size="md" color="black" ml="20">
              {getValue(data.startDate + " - " + Date.endDate, " 2012 - 2017 ")}
            </Heading>
          </Flex>
          <Flex flexDir="column" w="100%" flexWrap="wrap" overflow="auto">
            <Heading as="h2" size="md" ml="2" mt="5">
              Modules:
            </Heading>
            <Table size="sm" mx="1" my="10">
              <Thead>
                <Tr>
                  <Th>Modules</Th>
                  <Th>Grade</Th>
                  <Th isNumeric>Year</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td isNumeric>25.4</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Modules</Th>
                  <Th>Grades</Th>
                  <Th isNumeric>Year</Th>
                </Tr>
              </Tfoot>
            </Table>
            <Heading as="h2" size="md" ml="2" my="5">
              Extra Curricular:
            </Heading>
            <Flex flexWrap="wrap" flexDir="row" w="100%" alignItems="center">
              <UnorderedList w="100%">
                <ListItem color="blue.500">
                  <Text as="b">Lorem ipsum dolor sit amet</Text>
                  <Text color="black" mx="20" my="2">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                    ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                    dolor sit amet
                  </Text>
                </ListItem>
                <ListItem color="blue.500">
                  <Text as="b">Lorem ipsum dolor sit amet</Text>
                  <Text color="black" mx="20" my="2">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                    ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                    dolor sit amet
                  </Text>
                </ListItem>
                <ListItem color="blue.500">
                  <Text as="b">Lorem ipsum dolor sit amet</Text>
                  <Text color="black" mx="20" my="2">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                    ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                    dolor sit amet
                  </Text>
                </ListItem>
                <ListItem color="blue.500">
                  <Text as="b">Lorem ipsum dolor sit amet</Text>
                  <Text color="black" mx="20" my="2">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
                    ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
                    dolor sit amet
                  </Text>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Heading as="h2" size="2xl" color="blue.500" my="5">
            Projects
          </Heading>
          <Flex flexDir="column" w="100%" flexWrap="wrap" overflow="auto">
            <Heading as="h2" size="md" ml="2">
              {getValue(data.project, "project1")}
            </Heading>
            <Text mx="20">
              jdhvjdsbvhjdbvihdbv dhbcvuhdbcvu hdjcvjhdvc hjdvcbjhdacv
              hjdcvjhdacv jbciwebc jhsbcuhasbc sahvcuhsc ghvcghsv hbchewg
              hdbcjhwbvc
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Professional;
