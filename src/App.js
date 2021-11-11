import React from "react";
import Templates from "./pages/templates";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import Landing from "./pages/landing";
import Preview from "./pages/preview";
import Profile from "./pages/profile";
import Create from "./pages/create";
import Form from "./pages/form";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <Flex>
        <Switch>
          <Route path="/create/:templateID" component={Create} />
          <Route path="/form" component={Form} />
          <Route path="/templates" component={Templates} />
          <Route path="/preview" component={Preview} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Landing} />
        </Switch>
      </Flex>
    </Router>
  );
}

export default App;
