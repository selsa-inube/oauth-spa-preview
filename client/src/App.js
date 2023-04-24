import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import Employees from "./screens/Employees";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import "./styles/App.css";

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/employees"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Employees />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
