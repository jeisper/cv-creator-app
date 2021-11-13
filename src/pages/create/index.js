import { Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../../components/navbar";
import Professional from "../../components/templates/Professional";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Create() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log("User signed in");
      } else {
        console.log("User not signed in");
      }
    });
  }, []);

  let { templateID } = useParams(); //object destructuring
  let currentTemplate;
  switch (templateID) {
    case "elegant":
      currentTemplate = <Professional currentUser={currentUser} />;
      break;

    default:
      currentTemplate = "404 not found";
  }

  return (
    <Flex flexDir="column" w="100%">
      <Navbar showSearch={false} />
      {currentTemplate}
    </Flex>
  );
}

export default Create;
