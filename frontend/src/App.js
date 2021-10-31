import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Dashboard from "./components/Dashboard/Dashboard";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          {/* <Main /> */}
          <Route path="/" exact component={Main} />
          <Route path="/user/feed" exact component={Main} />
          <Route path="/user/dashboard" exact component={Dashboard} />
          <Route path="/auth/signin" exact component={Signin} />
          <Route path="/auth/signup" exact component={Signup} />
          <Signup />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
