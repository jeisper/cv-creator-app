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

function ProfileData({ formData, updateFormData }) {
  console.log(formData);
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
        label="First Name"
        placeholder="First Name"
        value={formData && formData.name ? formData.name.fname : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.name.fname = text;
          updateFormData(copy);
        }}
      />
      <FormControl p="1vw" id="last-name" isRequired>
        <FormLabel>Last name</FormLabel>
        <Input placeholder="Last name" />
      </FormControl>
      <FormControl p="1vw" id="dob" isRequired>
        <FormLabel>Date of Birth</FormLabel>
        <Input placeholder="Date of Birth" />
      </FormControl>
      <FormControl p="1vw" id="phone-number" isRequired>
        <FormLabel>Phone Number</FormLabel>
        <Input placeholder="Phone Number" />
      </FormControl>
      <FormControl p="1vw" id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder="Email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      <Flex justify="center">
        <Button placeContent="left" m="2vw" fontSize="3vh" alignContent="left">
          Cancel
        </Button>
        <Spacer />
        {/* <IconButton placeContent="left" m="2vw">
          <TiArrowLeftOutline fontSize="5vh" />
        </IconButton> */}

        <IconButton placeContent="right" m="2vw">
          <TiArrowRightOutline fontSize="5vh" />
        </IconButton>
      </Flex>
    </Flex>
  );
}

export default ProfileData;
