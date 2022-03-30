import React from "react";
import { Link, Route, Switch } from "react-router-dom";
// import { Router } from "@/routers";
import Guide from "@/pub/Guide.js";
import Nav from "@/pub/Nav.js";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Link to="/pub/guide" target={"blank"}>
            Guide
          </Link>
        </Route>
        <Route path="/pub/guide" component={Guide} />
        <Route path="/pub/Nav" component={Nav} />
      </Switch>
    </>
  );
};

export default App;
