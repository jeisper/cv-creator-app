import { Button, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { TiArrowLeftOutline } from "react-icons/ti";
import React from "react";
import FormTextInputNotRequired from "./FormTextInputNotRequired";
import axios from "axios";
function Preview({ formData, goBack }) {
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
      <Flex
        justify="center"
        direction="column"
        p="5"
        boxShadow="dark-lg"
        borderRadius="10"
        w="100%"
        my="2"
      ></Flex>
      <Flex justify="center">
        <IconButton placeContent="left" m="2vw" onClick={goBack}>
          <TiArrowLeftOutline fontSize="5vh" />
        </IconButton>
        <Spacer />
        <Button
          m="2vw"
          fontSize="3vh"
          alignContent="left"
          onClick={() => {
            axios
              .post("http://localhost:5000/api/v1/user/555/data", {
                googleID: "get from firebase",
                userData: "",
                saved: ["template1", "template2"],
                profileData: formData,
              })
              .then(function (response) {
                console.log("got response", response);
              })
              .catch(function (error) {
                console.log("got an error", error);
              });
          }}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}

export default Preview;
