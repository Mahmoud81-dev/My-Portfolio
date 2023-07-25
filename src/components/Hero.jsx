import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import heroBg from "../assets/herobg.png";
import { experiences } from "../constants";
import StarsCanvas from "./StarsCanvas";
import ComputerCanvas from "./ComputerCanvas";
function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroBg})`,
        width: "100%",
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        pt: 5,
      }}
    >
      {/* def and desc */}
      <Stack
        sx={{
          position: "relative",
          mx: "auto",
          width: 0.9,
          p: 2,
        }}
      >
        <Box
        
          sx={{
            "&::before": {
              content: `""`,
              background:
                "linear-gradient(to bottom, #915eff, #1f182f 100%, #48464d 75%, #1c1b218c 75%)",
              height: "300px",
              width: "5px",
              position: "absolute",
              transform: "translate(-400%,2%)",
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "30px", md: "40px", xl: "70px" },
              fontWeight: "bolder",
            }}
          >
            Hi, I'm <span style={{ color: "#915eff" }}>Mahmoud</span>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mt: 5,
              fontSize: { xs: "15px", md: "25px" },
            }}
          >
            I'm Front End Developer using React.js
          </Typography>
        </Box>

        {/* 3d image */}
        </Stack>
        <ComputerCanvas />
    </Box>
  );
}

export default Hero;
