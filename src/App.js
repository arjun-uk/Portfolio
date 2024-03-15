import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import { Profile } from "./components/Profile";
import SocialLinks from "./components/SocialLinks";
import React from "react";

function App() {
  return (
    <div>
      <NavBar />
      <Profile />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
