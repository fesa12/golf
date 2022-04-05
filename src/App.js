import React from "react";
import { Link, Route, Switch } from "react-router-dom";
// import { Router } from "@/routers";
import Guide from "@/pub/Guide.js";
import Navigation from "@/pub/Navigation.js";
import jin from "@/pub/jin.js";
import Test from "@/pub/Test.js";

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
        <Route path="/pub/Navigation" component={Navigation} />
        <Route path="/pub/jin" component={jin} />
        <Route path="/pub/Test" component={Test}/>
      </Switch>
    </>
  );
};

export default App;
