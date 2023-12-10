import Home from "./components/Home";
import Header from "./components/Header";
import CourseDetail from "./components/CourseDetail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import LogIn from "./components/LogIn";
import CreateAccount from "./components/CreateAccount";

function App() {
  useEffect(() => {
    fetch("http://127.0.0.1:8801/course")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8801/user")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/course/:id">
          <CourseDetail />
        </Route>

        <Route exact path="/login">
          <LogIn />
        </Route>

        <Route exact path="/createacc">
          <CreateAccount />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
