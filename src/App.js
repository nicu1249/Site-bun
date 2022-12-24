import "./App.css";
import { Route } from "react-router-dom";
import First from "./Components/FirstPage";
import Test from "./Components/Test";


function App() {
  return (
    <div className="App">
       <Route path="/" component={First} exact />
      <Route path="/test" component={Test} />
    </div>
  );
}

export default App;