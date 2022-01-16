import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/registro" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
