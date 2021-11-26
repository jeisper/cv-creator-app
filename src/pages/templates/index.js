import React, { useEffect, useRef, useState } from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import Navbar from "../../components/navbar";
import Card from "../../components/card";
import axios from "axios";

function Templates() {
  const [templates, setTemplates] = useState([]);
  const [tempTemplates, setTempTemplates] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const category = useRef("all");

  //useEffects
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/templates")
      .then(function (response) {
        console.log("throw");

        // handle success
        setTemplates([...response.data.data.templates]);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  //Functions
  const handleCategory = (event) => {
    console.log("this is event: ", event.target.value);
    if (event.target.value === "Creative") {
      category.current = "Creative";
    } else if (event.target.value === "Professional") {
      category.current = "Professional";
    } else {
      category.current = "all";
    }

    showSearchResults();
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
    showSearchResults();
  };

  const showSearchResults = () => {
    let results = [];

    console.log(category.current);
    console.log("t", templates);
    for (const template of templates) {
      if (category.current === "all") {
        console.log("testst", template);
        if (template.name.toLowerCase().includes(search.toLowerCase())) {
          // console.log("cat ", template.category);
          results.push(template);
        }
      } else {
        if (
          template.name.toLowerCase().includes(search) &&
          template.category
            .toLowerCase()
            .includes(category.current.toLowerCase())
        ) {
          results.push(template);
        }
      }
    }
    setSearchResult(results);
    console.log("here", results);
  };

  useEffect(() => {
    if (search === "") {
      setSearchResult([]);
    }
  }, [search]);

  return (
    <Flex flexDirection="column" w="100vw">
      <Navbar
        showSearch
        handleChange={handleChange}
        handleCategory={handleCategory}
        search={search}
        setSearch={setSearch}
      />
      <Flex justifyContent="center" alignItems="center" flexDir="column" mt="8">
        <Heading color="navy">Choose A Template</Heading>

        {search.length > 0 && tempTemplates.length > 0 ? (
          <Flex
            w="100%"
            mt="10"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            {searchResult.map((item, index) => {
              return <Card template={item} key={index} />;
            })}
          </Flex>
        ) : (
          <Flex
            w="100%"
            mt="10"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            {templates.map((item, index) => {
              return <Card template={item} key={index} />;
            })}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default Templates;
