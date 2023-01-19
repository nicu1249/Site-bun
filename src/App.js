import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Homepage from "./Components/Homepage";
import Bottom from "./Components/Bottom";
import Badges from "./Components/Badges";
import Services from "./Components/Services";


function App() {
  return (
    <div>
      <NavBar fixed="top"/>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/Badges" component={Badges} />
          <Route path="/Services" component={Services} />
        </Switch>
      </Router>
      <Bottom/>
    </div>
  );
}

export default App;
