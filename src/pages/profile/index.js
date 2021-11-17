import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/navbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Profile() {
  const [currentUser, setCurrentUser] = useState(null);

  const [profileData, setProfileData] = useState({});
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log("User signed in");
        axios
          .get("http://localhost:5000/api/v1/user/" + user.uid + "/data")
          .then(function (response) {
            setProfileData(response.data.data.profile.profileData);
            console.log("profile data", response.data.data.profile.profileData);
            // handle success
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      } else {
        console.log("User not signed in");
      }
    });
  }, []);
  return (
    <Flex w="100%" flexDir="column">
      <Navbar />
      <Flex w="100%">
        <Flex
          w="40%"
          justify="center"
          align="center"
          p="10"
          bg="gray.100"
          mr="8"
        >
          <Image
            w="250px"
            h="250px"
            borderRadius="full"
            src={profileData.profileImg}
          />
        </Flex>
        <Flex w="50%" justify="center" flexDir="column">
          <Text fontSize="4xl" fontWeight="bold">
            Immanuel Adeoye
          </Text>
          <Button
            mt="6"
            p="6"
            bg="blue.400"
            w="40%"
            color="white"
            fontWeight="bold"
          >
            Manage CV Info
          </Button>
        </Flex>
      </Flex>
      <Flex w="100%" h="15vh" bg="blue.500" my="10">
        <Flex
          w="100%"
          shadow="dark-lg"
          align="center"
          justify="center"
          h="100%"
          flexDir="column"
        >
          <Heading color="white"> Published Templates</Heading>
        </Flex>
        <Flex></Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default Profile;
