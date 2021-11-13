import { Button, Flex, IconButton, Spacer, useToast } from "@chakra-ui/react";
import { TiArrowLeftOutline } from "react-icons/ti";
import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import TextDesign from "./TextDesign";
function Preview({ formData, goBack }) {
  const toast = useToast();
  const history = useHistory();
  const uploadDataToDatabase = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,
        const uid = user.uid;
        axios
          .post(`http://localhost:5000/api/v1/user/${uid}/data`, {
            googleID: uid + "",
            userData: user,
            saved: ["template1", "template2"],
            profileData: formData,
          })
          .then(function (response) {
            console.log("got response", response);
            toast({
              title: "Submitted!",
              description: "Your profile has been updated",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
            history.push("/templates");
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
      <Flex
        justify="center"
        direction="column"
        p="5"
        boxShadow="dark-lg"
        borderRadius="10"
        w="100%"
        my="2"
      >
        <Flex justify="center" direction="column">
          <Flex m="2" justify="center" direction="row">
            <TextDesign text="First Name: " content={formData.name.fname} />
            <Spacer />
            <TextDesign text="Last Name: " content={formData.name.lname} />
          </Flex>
          <Flex justify="center" direction="row" m="2">
            <TextDesign text="Email: " content={formData.contact.email} />
            <Spacer />
            <TextDesign text="Country: " content={formData.location.country} />
          </Flex>
          <Flex justify="center" direction="row" m="2">
            <TextDesign
              text="Phone Number: "
              content={formData.contact.phone}
            />
            <Spacer />
            <TextDesign text="City: " content={formData.location.city} />
          </Flex>
        </Flex>
      </Flex>
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

export default Preview;
