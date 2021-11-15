import { Input, Flex, Select } from "@chakra-ui/react";
import { React } from "react";

function Search({ search, handleChange, selection }) {
  return (
    <Flex flexDir="row" flexWrap="wrap">
      <Input
        placeholder="Search for templates"
        mt="30px"
        onChange={handleChange}
        value={search}
      ></Input>
      <Select placeholder="Select category" my="1" size="sm">
        <option value="Creative">Creative</option>
        <option value="Professional">Professional</option>
      </Select>
    </Flex>
  );
}

export default Search;
