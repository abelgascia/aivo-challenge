import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Index() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect({});
    } else {
      window.location.href = "/";
    }
  }, [isAuthenticated, isLoading]);

  return (
    <div className="container-fluid bg-dark" style={{ height: "100vh" }}>
      <div className="row h-100">
        <div className="col-md-12 py-5 d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-white fw-bold">Login Aivoflix</h1>
          <button
            className="btn px-5 py-2 border border-white text-white bg-dark"
            onClick={() => loginWithRedirect({})}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
