import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/navbar";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import SignIn from "../../components/Signin";
import { useHistory } from "react-router";
import logo from "../../Assets/Images/cv.png";
import { useToast } from "@chakra-ui/toast";

function Profile() {
  const [currentUser, setCurrentUser] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [data, setData] = useState(null);

  const toast = useToast();
  const history = useHistory();

  const signUserOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      setCurrentUser(null);
      setProfileData(null);
    });
  };

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
            setData(response.data.data.profile);
            console.log("profile data", response.data.data.profile);
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

  if (!profileData || !profileData.name || profileData.name.fname === "") {
    if (currentUser) {
      return (
        <Flex w="100%" flexDir="column">
          <Navbar />
          <Flex w="100%" flexDir="column" align="center" justify="center">
            <Text fontSize="2xl" my="8" fontWeight="bold">
              Your profile has no data, please fill the form first to create CVs
            </Text>
            <Button
              bg="blue.400"
              color="white"
              onClick={() => {
                history.push("/form");
              }}
            >
              Complete My Profile
            </Button>
          </Flex>
        </Flex>
      );
    }

    return (
      <Flex w="100%" flexDir="column">
        <Navbar />
        <Flex w="100%" flexDir="column" align="center" justify="center">
          <Text fontSize="2xl" my="8" fontWeight="bold">
            You need to sign in to view your profile
          </Text>
          <SignIn />
        </Flex>
      </Flex>
    );
  }

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
            {profileData.name.fname + " " + profileData.name.lname}
          </Text>
          <Button
            mt="6"
            p="6"
            bg="blue.400"
            w="40%"
            color="white"
            fontWeight="bold"
            onClick={signUserOut}
          >
            Sign Out
          </Button>

          <Button
            mt="6"
            p="6"
            bg="blue.400"
            w="40%"
            color="white"
            fontWeight="bold"
            onClick={() => {
              history.push("/form");
            }}
          >
            Manage CV Info
          </Button>

          <Button
            mt="6"
            p="6"
            bg="red.400"
            w="40%"
            color="white"
            fontWeight="bold"
            onClick={() => {
              axios
                .post(
                  `http://localhost:5000/api/v1/user/${data.googleID}/delete`,
                  data
                )
                .then(function (response) {
                  toast({
                    title: "Deleteion Successful!",
                    description: "Your profile data has been deleted",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                  });
                  setData(null);
                  setProfileData(null);
                })
                .catch(function (error) {
                  console.log("got an error", error);
                  alert("Server Error");
                });
            }}
          >
            Delete Profile Data
          </Button>
        </Flex>
      </Flex>
      <Flex w="100%" my="10" flexDir="column">
        <Flex
          w="100%"
          h="15vh"
          align="center"
          justify="center"
          flexDir="column"
          bg="blue.500"
        >
          <Heading color="white"> Published CVs</Heading>
        </Flex>
        <Flex w="100%" m="4" h="100%" flexWrap="wrap">
          {data && data.saved.length === 0 ? "no published CVs" : null}
          {data &&
            data.saved.map((item) => {
              return (
                <Flex
                  w="140px"
                  h="140px"
                  bg="whiteAlpha.200"
                  p="2"
                  m="4"
                  borderRadius="lg"
                  shadow="2xl"
                  fontWeight="bold"
                  flexDir="column"
                  justify="center"
                  align="center"
                  _hover={{ opacity: 0.6 }}
                  onClick={() => {
                    history.push("/cv/" + item);
                  }}
                >
                  <Image w="100px" h="100px" src={logo} />#{item}
                </Flex>
              );
            })}
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  );
}

export default Profile;
