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
      <FormTextInput
        label="Last Name"
        placeholder="Last Name"
        value={formData && formData.name ? formData.name.lname : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.name.lname = text;
          updateFormData(copy);
        }}
      />
      <FormTextInput
        label="Phone Number"
        placeholder="Phone Number"
        value={formData && formData.contact ? formData.contact.phone : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.contact.phone = text;
          updateFormData(copy);
        }}
      />
      <FormTextInput
        label="Email"
        placeholder="Email"
        value={formData && formData.contact ? formData.contact.email : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.contact.email = text;
          updateFormData(copy);
        }}
      />
      <Flex justify="center">
        <FormTextInput
          label="Country"
          placeholder="Country"
          value={formData && formData.location ? formData.location.country : ""}
          onChange={(text) => {
            const copy = { ...formData };
            copy.location.country = text;
            updateFormData(copy);
          }}
        />
        <FormTextInput
          label="City"
          placeholder="City"
          value={formData && formData.location ? formData.location.city : ""}
          onChange={(text) => {
            const copy = { ...formData };
            copy.location.city = text;
            updateFormData(copy);
          }}
        />
      </Flex>
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

export default ProfileData;