import logo from "./logo.svg";
import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { configureStore } from "./redux/store";
import Layout from "./layouts/Layout/index";

import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/style.scss'
function Login() {
  return <div>Login</div>;
} 
function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Layout} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
