import {  useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
// import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Mission from "./components/Mission";
import WrongPage from "./components/WrongPage";
import History from "./components/History";
import Company from "./components/Company";
import Team from "./components/Team";
import Members from "./components/Members";
import MemberDetails from "./components/MemberDetails";
import React from "react";

const LazyAboutUs = React.lazy(() => import("./components/AboutUs"));

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/aboutUs"
          element={
            <React.Suspense>
              <LazyAboutUs />
            </React.Suspense>
          }
        />
        <Route path="/mission" element={<Mission />} />
        <Route path="/history" element={<History />}>
          <Route path="companies" element={<Company />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="members" element={<Members />} />
        <Route path="members/:memberId" element={<MemberDetails />} />
        <Route path="*" element={<WrongPage />} />
      </Routes>
    </>
  );
}

export default App;
