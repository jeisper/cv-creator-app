import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import validator from "validator";
import Navbar from "../../components/navbar";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Strong Password");
    } else {
      setErrorMessage("Not Strong Password");
    }
  };

  return (
    <Flex w="100%" flexDir="column">
      <Navbar />

      <Flex w="100%" justify="center" p="10" mb="10">
        <Flex
          justify="center"
          direction="column"
          boxShadow="dark-lg"
          borderRadius="10px"
          w="50%"
        >
          <Flex direction="column">
            <FormControl p="1vw" isRequired>
              <FormLabel fontWeight="bold" fontSize="sm">
                Username
              </FormLabel>
              <Input placeholder="username" value="" />
            </FormControl>

            <FormControl p="1vw" isRequired>
              <FormLabel fontWeight="bold" fontSize="sm">
                Password
              </FormLabel>

              <Input placeholder="password" vtype="text" />
              <Text fontWeight="bold" textColor="red" fontSize="md">
                {errorMessage}
              </Text>
            </FormControl>
          </Flex>
          <Flex justify="center">
            <Button
              justify="center"
              m="2vw"
              fontSize="3vh"
              alignContent="left"
              onClick={(e) => validate(e.target.value)}
            >
              Submit
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Login;
