import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';
import Login from "./components/Home/shared/Login/Login";
import Service from "./pages/Service/Service";

function App() {
  return (
    <div>
     <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/service-create" component={Service} />
      </Switch>
     </Router>
    </div>
  );
}

export default App;
