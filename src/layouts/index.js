import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper  from './Wrapper/index';


const LayoutHome = (props) => {
  return (
    <> 
        <Router>
          <Switch>
            <Route path="/" component={Wrapper} />
          </Switch>
        </Router> 
    </>
  );
};
export default LayoutHome;
