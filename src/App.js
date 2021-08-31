import { BrowserRouter as Router, Switch } from "react-router-dom";
import  CSS from './index.css'
import Home from "./component/pages/Home/Home";
import PrivateRoute from "./component/PrivateRoute";
import TimeTable from "./component/pages/TimeTable/TimeTable";
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
const DayText =(props)=>{
  const {dayText,dayState} = props;
  return(<h2>{dayText}</h2>)
}
