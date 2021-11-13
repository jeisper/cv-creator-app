import { Button, Flex, IconButton, Spacer } from "@chakra-ui/react";
import { TiArrowLeftOutline } from "react-icons/ti";
import React from "react";
import FormTextInputNotRequired from "./FormTextInputNotRequired";
import axios from "axios";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Links({ formData, updateFormData, goBack }) {
  const uploadDataToDatabase = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        const uid = user.uid;
        axios
          .post("http://localhost:5000/api/v1/user/555/data", {
            googleID: uid + "",
            userData: user,
            saved: ["template1", "template2"],
            profileData: formData,
          })
          .then(function (response) {
            console.log("got response", response);
          })
          .catch(function (error) {
            console.log("got an error", error);
            alert("Server Error");
          });
      } else {
        alert("Please Sign in to submit");
      }
    });
  };

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
        <IconButton placeContent="left" m="2vw" onClick={goBack}>
          <TiArrowLeftOutline fontSize="5vh" />
        </IconButton>
        <Spacer />
        <Button
          m="2vw"
          fontSize="3vh"
          alignContent="left"
          onClick={() => {
            uploadDataToDatabase();
          }}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
}

export default Links;
