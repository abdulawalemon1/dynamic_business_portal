import { Route, Routes } from "react-router-dom";
import Advertising from "./components/Dashboard/Advertising.js";
import Articles from "./components/Dashboard/Articles.js";
import Bsuinessresources from "./components/Dashboard/Bsuinessresources.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Portfolio from "./components/Dashboard/Portfolio.js";
import Profile from "./components/Dashboard/Profile.js";
import Submitstory from "./components/Dashboard/Submitstory.js";
import Login from "./components/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="articles" element={<Articles />} />
        <Route path="profile" element={<Profile />} />
        <Route path="submitstory" element={<Submitstory />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="advertising" element={<Advertising />} />
        <Route path="businessresources" element={<Bsuinessresources />} />
      </Route>
    </Routes>
  );
}
