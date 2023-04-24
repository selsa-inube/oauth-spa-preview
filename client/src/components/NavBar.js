import { Link } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "antd";
import "../styles/navbar.css";

export default function NavBar() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  return (
    <nav className="navbar">
      <h1>OAuth SPA Preview</h1>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        {isAuthenticated && (
          <li>
            <Link className="link" to="/employees">
              Employees
            </Link>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Link className="link" to="/profile">
              Profile
            </Link>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <Button
              onClick={() => loginWithRedirect()}
              size="large"
              className="btn"
            >
              Log in
            </Button>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <Button
              size="large"
              className="btn"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log out
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}
