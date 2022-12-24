import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Homepage from "./Components/Homepage";
import Bottom from "./Components/Bottom";
import Badges from "./Components/Badges";
import Services from "./Components/Services";
import Test from "./Components/Test";


function App() {
  return (
    <div className="App">
       <Route path="/" component={Homepage} exact />
      <Route path="/NavBar" component={NavBar} />
      <Route path="/Bottom" component={Bottom} />
      <Route path="/Badges" component={Badges} />
      <Route path="/Services" component={Services} />
      <Route path="/Test" component={Test} />
    </div>
  );
}

export default App;