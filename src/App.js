import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import { configureStore } from "./redux/store";
import Layout from "./layouts/index"; 

import "bootstrap/dist/css/bootstrap.css";
import 'antd/dist/antd.css';  
import './assets/scss/index.scss';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
 
function App() {
  return (
    <Provider store={configureStore()}>  
        <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              {/* <Route exact path="/login" name="Login Page" render={(props) => <Login {...props} />} />
            <Route exact path="/register" name="Register Page" render={(props) => <Register {...props} />} />
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} /> */}
              <Route path="/" name="Home" render={(props) => <Layout {...props} />} />
            </Switch>
          </React.Suspense>
        </HashRouter> 
    </Provider>
  );
}

export default App;
