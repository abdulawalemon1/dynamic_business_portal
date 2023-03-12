import { Route, Routes } from "react-router-dom";
import Articles from "./components/Dashboard/Articles.js";
import Login from "./components/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/articles" element={<Articles />} />
    </Routes>
  );
}
