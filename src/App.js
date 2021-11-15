import React from "react";
import Templates from "./pages/templates";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Landing from "./pages/landing";
import Profile from "./pages/profile";
import Create from "./pages/create";
import CV from "./pages/cv";
import Form from "./pages/form";
import useScript from "./hooks/useScript";

function App() {
  useScript("https://upload-widget.cloudinary.com/global/all.js");

  return (
    <Router>
      <Flex>
        <Switch>
          <Route path="/cv/:publishID" component={CV} />
          <Route path="/create/:templateID" component={Create} />
          <Route path="/form" component={Form} />
          <Route path="/templates" component={Templates} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Landing} />
        </Switch>
      </Flex>
    </Router>
  );
}

export default App;
