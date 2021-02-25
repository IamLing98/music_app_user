import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return <div>Route here</div>;
}
const Wrapper = (props) => {
  return (
    <div className="content-wrapper">
      <Router>
        <Switch>
          <Route path="/a" component={App} />
        </Switch>
      </Router>
    </div>
  );
};

export default Wrapper;
