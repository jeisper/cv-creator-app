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
import FormTextInputNotRequired from "./FormTextInputNotRequired";

function Links(formData, updateFormData) {
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
      <FormTextInputNotRequired
        label="LinkedIn"
        placeholder="LinkedIn"
        value={formData && formData.links ? formData.links.linkedin : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.links.linkedin = text;
          updateFormData(copy);
        }}
      />
      <FormTextInputNotRequired
        label="GitHub"
        placeholder="GitHub"
        value={formData && formData.links ? formData.links.github : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.links.github = text;
          updateFormData(copy);
        }}
      />
      <FormTextInputNotRequired
        label="WebSite"
        placeholder="WebSite"
        value={formData && formData.links ? formData.links.website : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.links.website = text;
          updateFormData(copy);
        }}
      />
      <FormTextInputNotRequired
        label="Facebook"
        placeholder="Facebook"
        value={formData && formData.links ? formData.links.facebook : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.links.facebook = text;
          updateFormData(copy);
        }}
      />
      <FormTextInputNotRequired
        label="Instragram"
        placeholder="Instragram"
        value={formData && formData.links ? formData.links.instagram : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.links.instagram = text;
          updateFormData(copy);
        }}
      />
      <FormTextInputNotRequired
        label="Twitter"
        placeholder="Twitter"
        value={formData && formData.links ? formData.links.twitter : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.links.twitter = text;
          updateFormData(copy);
        }}
      />
      <FormTextInputNotRequired
        label="Youtube"
        placeholder="Youtube"
        value={formData && formData.links ? formData.links.youtube : ""}
        onChange={(text) => {
          const copy = { ...formData };
          copy.links.youtube = text;
          updateFormData(copy);
        }}
      />

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

export default Links;