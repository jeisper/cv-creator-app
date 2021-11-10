import React, { useEffect, useState } from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import Navbar from "../../components/navbar";
import Card from "../../components/card";
import axios from "axios";

function Templates() {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    console.log("test2");

    axios
      .get("http://localhost:5000/api/v1/templates")
      .then(function (response) {
        console.log("throw");

        // handle success
        setTemplates([...response.data.data.templates]);
        console.log(templates);
      })
      .catch(function (error) {
        console.log("test2");
        // handle error
        console.log("catch");

        console.log(error);
      });
  }, []);

  console.log("test", templates);
  return (
    <Flex flexDirection="column" w="100vw">
      <Navbar showSearch />
      <Flex justifyContent="center" alignItems="center" flexDir="column">
        <Heading color="navy">Choose A Template</Heading>
        <Flex
          w="100%"
          mt="10"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          {templates.map((item, index) => {
            console.log(item);
            return <Card template={item} />;
          })}
          {templates.map((item, index) => {
            console.log(item);
            return <Card template={item} />;
          })}
          {templates.map((item, index) => {
            console.log(item);
            return <Card template={item} />;
          })}
          {templates.map((item, index) => {
            console.log(item);
            return <Card template={item} />;
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Templates;
