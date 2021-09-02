import { BrowserRouter as Router, Switch } from "react-router-dom";
import './index.css'
import Home from "./component/pages/Home/Home";
import PrivateRoute from "./component/PrivateRoute";
import TimeTable from "./component/pages/TimeTable/TimeTable";
export default function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute exact path="/timetable" component={TimeTable} />        
      </Switch>
    </Router>
  );
}
