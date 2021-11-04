import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  Spacer,
} from "@chakra-ui/react";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";
import React, { useState } from "react";
import FormTextInput from "./FormTextInput";
function Work() {
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
      <Flex justify="center">
        <Button placeContent="left" m="2vw" fontSize="3vh" alignContent="left">
          Cancel
        </Button>
        <Spacer />
        <IconButton placeContent="right" m="2vw">
          <TiArrowRightOutline fontSize="5vh" />
        </IconButton>
      </Flex>
    </Flex>
  );
}

export default Work;
