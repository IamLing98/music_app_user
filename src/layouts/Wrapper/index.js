import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import i18next from "i18next";
import Translation from "../../utils/int8-util";

const App = (props) => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("omg");
          i18next.changeLanguage("en");
        }}
        className="btn btn-primary"
      >
        EN
      </button> 
      <button onClick={() => i18next.changeLanguage("vi")} className="btn btn-primary">
        VN
      </button>
      content: <Translation value="home" />
    </div>
  );
};
const Wrapper = (props) => {
  return (
    <div className="content-wrapper">
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </div>
  );
};

export default Wrapper;
