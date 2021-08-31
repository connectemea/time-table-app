import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./component/pages/Home";
import PrivateRoute from "./component/PrivateRoute";
import TimeTable from "./component/pages/TimeTable";
export default function App() {
  return (
    <Router >
      <Switch>
        <PrivateRoute exact path="/home" component={Home} />
        <PrivateRoute exact path="/timetable" component={TimeTable} />
      </Switch>
    </Router>
  );
}
