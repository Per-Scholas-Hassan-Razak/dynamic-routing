import { Routes, Route } from "react-router-dom";
import "./App.css";
import BlogList from "./components/BlogList";
import BlogItem from "./components/BlogItem";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:slug" element={<BlogItem />} />
      </Routes>
    </>
  );
}

export default App;
