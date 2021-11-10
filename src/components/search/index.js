import { Input } from "@chakra-ui/react";
import axios from "axios";
import { React, useState, useEffect } from "react";

function Search({ search, handleChange }) {
  return (
    <div className="templates">
      <Input
        placeholder="Search for templates"
        mt="30px"
        onChange={handleChange}
        value={search}
      ></Input>
    </div>
  );
}

export default Search;
