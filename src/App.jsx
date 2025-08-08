import { Routes, Route } from "react-router-dom";
import "./App.css";
import BlogList from "./components/BlogList";
import BlogItem from "./components/BlogItem";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AuthorizationProvider from "./Providers/AuthorizationProvider";
import Login from "./components/Login";
import Admin from "./components/Admin";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthorizationProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:slug" element={<BlogItem />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthorizationProvider>
    </>
  );
}

export default App;
