import { Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../components/navbar";
import Professional from "../../components/templates/Professional";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignIn from "../../components/Signin";
import axios from "axios";
import Robust from "../../components/templates/Robust";

function Create() {
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
            console.log(profileData);

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

  let { templateID } = useParams(); //object destructuring
  let currentTemplate = null;
  switch (templateID) {
    case "elegant":
      currentTemplate = <Professional profileData={profileData} />;
      break;
    case "robust":
      currentTemplate = <Robust profileData={profileData} />;
      break;
    default:
      currentTemplate = "404 not found";
  }

  return (
    <Flex flexDir="column" w="100%">
      <Navbar showSearch={false} />
      {currentUser != null ? (
        currentTemplate
      ) : (
        <Flex
          w="100%"
          minH="50vh"
          flexDir="column"
          align="center"
          justify="center"
        >
          <Text fontSize="2xl" my="8" fontWeight="bold">
            You need to sign in to create a "Fine" CV
          </Text>
          <SignIn />
        </Flex>
      )}
    </Flex>
  );
}

export default Create;
