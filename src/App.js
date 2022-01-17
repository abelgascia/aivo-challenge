import { useAuth0, Auth0Provider } from "@auth0/auth0-react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";

const PrivateRoute = ({ ...props }) => {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      client_id={process.env.REACT_APP_AUTH0_CLIENT_ID}
      redirect_uri={window.location.origin}
    >
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </Auth0Provider>
  );
}

export default App;
