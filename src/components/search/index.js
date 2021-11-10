import { Input } from "@chakra-ui/react";
import { React, useState } from "react";

function Search() {
  const [value, setValue] = useState("");
  const handleChange = (event) => setValue(event.target.value);

  return (
    <div className="templates">
      <Input
        placeholder="Search for templates"
        mt="30px"
        onChange={handleChange}
      ></Input>
    </div>
  );
}

export default Search;
