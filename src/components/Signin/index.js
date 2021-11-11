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
  PopoverTrigger,
  Popover,
  PopoverCloseButton,
  PopoverContent,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { IoPerson } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth, provider } from "../../firebase";

function SignIn() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        console.log(user);
        console.log("User signed in");
      } else {
        console.log("User not signed in");
      }
    });
  }, []);

  const signUserIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setCurrentUser(user);

        onClose();
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <Flex w="100%">
      {currentUser != null ? (
        <Popover>
          <PopoverTrigger>
            <Flex h="100%" justify="center" align="center">
              <Image
                w="50"
                h="50"
                borderRadius="full"
                src={currentUser.photoURL}
              />
            </Flex>
          </PopoverTrigger>
          <PopoverContent w="100px" mr="4">
            <PopoverCloseButton />
            <Button
              leftIcon={<IoPerson />}
              color="blue.500"
              p="1"
              size="sm"
              onClick={() => {
                const auth = getAuth();
                signOut(auth)
                  .then(() => {
                    setCurrentUser(null);
                  })
                  .catch((error) => {
                    // An error happened.
                  });
              }}
            >
              Sign Out
            </Button>
          </PopoverContent>
        </Popover>
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
