import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout  from './Layout/index';


const LayoutHome = (props) => {
  return (
    <> 
        <Router>
          <Switch>
            <Route path="/" component={Layout} />
          </Switch>
        </Router> 
    </>
  );
};
export default LayoutHome;
