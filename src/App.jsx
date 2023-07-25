import React from "react";
import { Box } from "@mui/material";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import FeedBacks from "./components/FeedBacks";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import StarsCanvas from "./components/StarsCanvas";
import Tech from "./components/Tech";
import Works from "./components/Works";
import { colors } from "./constants";

function App() {
  return(
    <Box sx={{ position: "relative"}}  >
    <Box  >
      <Navbar />
      <Hero />
    </Box>

    <About />
    <Experience />
    <Tech />
    <Works />
    <FeedBacks />

    <Box>
      <Contact /> 
      <StarsCanvas />
    </Box>
    
  </Box>
  );
}

export default App;
