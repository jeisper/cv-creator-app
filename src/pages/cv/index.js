import { Flex, Text } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import Professional from "../../components/templates/Professional";
import Robust from "../../components/templates/Robust";

function CV() {
  let { publishID } = useParams();
  const [current, setCurrent] = useState(null);
  let currentTemplate = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/publish/" + publishID + "/data")
      .then(function (response) {
        const data = response.data.data;
        console.log("data is", data);

        switch (data.template) {
          case "elegant":
            setCurrent(<Professional profileData={data.data} />);
            break;
          case "robust":
            setCurrent(<Robust profileData={data.data} />);
            break;
          default:
            currentTemplate.current = "404 not found";
        }
      })
      .catch(function (error) {});
  }, []);

  return (
    <Flex flexDir="column" w="100%">
      {current ? current : "CV not found"}
    </Flex>
  );
}

export default CV;
