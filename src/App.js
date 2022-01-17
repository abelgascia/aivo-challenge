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
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    if (isAuthenticated) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  }
};

function App() {
  return (
    <Auth0Provider
      domain="dev-xm6tnqtf.us.auth0.com"
      clientId="aSphdxvIpHHqC744YPf04QpvhS8FoEOc"
      redirectUri="http://localhost:3000/"
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
