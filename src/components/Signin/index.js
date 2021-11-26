import { Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { IoPerson } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup, getAuth, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../../firebase";
import { useHistory } from "react-router";

function SignIn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentUser, setCurrentUser] = useState(null);

  const history = useHistory();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log(user);
        console.log("User signed in");
      } else {
        console.log("User not signed in");
        setCurrentUser(null);
      }
    });
  }, []);

  const signUserIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setCurrentUser(user);

        onClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Flex>
      {currentUser != null ? (
        <Flex
          h="100%"
          justify="center"
          align="center"
          onClick={() => {
            history.push("/profile");
          }}
        >
          <Image w="50" h="50" borderRadius="full" src={currentUser.photoURL} />
        </Flex>
      ) : (
        <Button leftIcon={<IoPerson />} color="blue.500" p="5" onClick={onOpen}>
          Sign In
        </Button>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fine CVBuilder</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            To access millions upon billions of templates sign in with Google
            here
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button
              variant="outline"
              leftIcon={<FcGoogle />}
              onClick={signUserIn}
            >
              Sign In
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default SignIn;
