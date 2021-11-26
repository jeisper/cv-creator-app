import { Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Navbar from "../../components/navbar";
import Professional from "../../components/templates/Professional";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignIn from "../../components/Signin";
import axios from "axios";
import Robust from "../../components/templates/Robust";
import { Button } from "@chakra-ui/button";

function Create() {
  const [currentUser, setCurrentUser] = useState(null);
  const [profileData, setProfileData] = useState({});
  const [data, setData] = useState(null);

  const history = useHistory();

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
            console.log("HERE", response.data.data.profile);
            // handle success
          })
          .catch(function (error) {
            // handle error
            history.push("/form");
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

  const publishCV = () => {
    const randomPublishID = Math.floor(Math.random() * 90000) + 10000;
    axios
      .post(`http://localhost:5000/api/v1/publish/${randomPublishID}/data`, {
        publishID: randomPublishID + "",
        template: templateID,
        data: profileData,
      })
      .then(function (response) {
        console.log("got response", response);
        updateProfile(randomPublishID);
      })
      .catch(function (error) {
        console.log("got an error", error);
        alert("Server Error");
      });
  };

  const updateProfile = (randomPublishID) => {
    const dataCopy = { ...data };
    const savedCopy = [...dataCopy.saved];
    savedCopy.push(randomPublishID + "");
    dataCopy.saved = savedCopy;

    if (data) {
      axios
        .post(
          `http://localhost:5000/api/v1/user/${data.googleID}/data`,
          dataCopy
        )
        .then(function (response) {
          history.push("/cv/" + randomPublishID);
        })
        .catch(function (error) {
          console.log("got an error", error);
          alert("Server Error");
        });
    }
  };

  return (
    <Flex flexDir="column" w="100%">
      <Navbar showSearch={false} />
      <Button onClick={publishCV} mb="4">
        {" "}
        Publish
      </Button>
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
