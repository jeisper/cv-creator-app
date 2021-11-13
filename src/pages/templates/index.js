import React, { useEffect, useState } from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import Navbar from "../../components/navbar";
import Card from "../../components/card";
import axios from "axios";

function Templates() {
  const [templates, setTemplates] = useState([]);
  const [tempTemplates, setTempTemplates] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  //useEffects
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/templates")
      .then(function (response) {
        console.log("throw");

        // handle success
        setTemplates([...response.data.data.templates]);
        setTempTemplates([...response.data.data.templates]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  //Functions
  const handleChange = (event) => {
    setSearch(event.target.value);
    let results = [];

    for (const template of templates) {
      if (template.name.includes(search)) {
        results.push(template);
      }
    }
    setSearchResult(results);
  };

  useEffect(() => {
    if (search === "") {
      setSearchResult([]);
      setTemplates(tempTemplates);
    } else if (searchResult.length > 0) {
      setTemplates(searchResult);
    } else if (searchResult.length === 0 && search !== "") {
      setTemplates([]);
    } else if (search === "") {
      setSearchResult([]);
      setTemplates(tempTemplates);
    }
  }, [tempTemplates, search]);

  return (
    <Flex flexDirection="column" w="100vw">
      <Navbar
        showSearch
        handleChange={handleChange}
        search={search}
        setSearch={setSearch}
      />
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
            // console.log(item);
            return <Card template={item} key={index} />;
          })}
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Templates;
