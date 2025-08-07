import {  Routes, Route } from "react-router-dom";
import "./App.css";
import BlogList from "./components/BlogList";
import BlogItem from "./components/BlogItem";

function App() {
  return (
 
    <Routes>
      <Route path="/blogs" element={<BlogList />} />
      <Route path="/blogs/:slug" element={<BlogItem />} />
    </Routes>
 
  );
}

export default App;
