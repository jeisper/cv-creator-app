import React from "react";
import { Tr, Td } from "@chakra-ui/react";

function Module({ course, index }) {
  const courses = course.split(",");
  return courses.map((item, index) => {
    return (
      <Tr key={course._id}>
        <Td>{courses[index]}</Td>
      </Tr>
    );
  });
}

export default Module;
