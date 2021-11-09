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

function Sumary({ formData, updateFormData }) {
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
      <FormTextInput
        label="Sumary"
        placeholder="Sumary"
        value={formData && formData.sumary ? formData.sumary : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.sumary = text;
          updateFormData(copy);
        }}
      />
      <Flex justify="center">
        <IconButton placeContent="left" m="2vw">
          <TiArrowLeftOutline fontSize="5vh" />
        </IconButton>
        <Spacer />
        <IconButton placeContent="right" m="2vw">
          <TiArrowRightOutline fontSize="5vh" />
        </IconButton>
      </Flex>
    </Flex>
  );
}

export default Sumary;
