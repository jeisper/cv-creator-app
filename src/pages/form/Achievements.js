import {
  Button,
  Flex,
  IconButton,
  Text,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";
import React from "react";
import AchievementsModel from "./AchievementsModel";
function Achievements({ formData, updateFormData, goBack, goNext }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      justify="center"
      w="50%"
      p="10"
      mb="10"
      direction="column"
      boxShadow="dark-lg"
      borderRadius="10px"
    >
      <Flex flexDir="column">
        {formData.achievements.map((item, index) => {
          return (
            <Flex
              justify="center"
              direction="column"
              p="5"
              boxShadow="dark-lg"
              borderRadius="10"
              w="100%"
              my="2"
            >
              <Flex>
                <Text>Achievement Title:{item.type}</Text>
              </Flex>
              <Flex>
                <Text>Organization:{item.org}</Text>
              </Flex>
              <Flex justify="center" direction="row">
                <Text>Date:{item.date}</Text>
              </Flex>
              <Flex>
                <Text>Achievement Description:{item.desc}</Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Button justify="center" w="90%" m="2vw" fontSize="lg" onClick={onOpen}>
        Add Achievement
      </Button>
      <Flex justify="center">
        <IconButton placeContent="left" m="2vw" onClick={goBack}>
          <TiArrowLeftOutline fontSize="5vh" />
        </IconButton>
        <Spacer />
        <Button m="2vw" fontSize="3vh" alignContent="left">
          Save
        </Button>
        <IconButton placeContent="right" m="2vw" onClick={goNext}>
          <TiArrowRightOutline fontSize="35px" />
        </IconButton>
      </Flex>
      <AchievementsModel
        formData={formData}
        updateFormData={updateFormData}
        onClose={onClose}
        onOpen={onOpen}
        isOpen={isOpen}
      />
    </Flex>
  );
}

export default Achievements;
