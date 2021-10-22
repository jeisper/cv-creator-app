import React from "react";
import Templates from "./pages/templates";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Landing from "./pages/landing";
import Preview from "./pages/preview";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Flex>
        {/* <Navbar /> */}
        <Switch>
          <Route path="/templates" component={Templates} />
          <Route path="/preview" component={Preview} />
          <Route path="/profile" component={Profile} />
          <Route path="/" component={Landing} />
        </Switch>
      </Flex>
    </Router>
  );
}

export default App;
