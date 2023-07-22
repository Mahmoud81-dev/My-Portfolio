import { Box, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/logos/m-high-resolution-logo-white-on-transparent-background.png";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <Box p={2} border={"1px solid red"}>
      <Stack
        direction="row"
        spacing={2}
        px={5}
        justifyContent="space-between"
        // sx={{ position: "absolute", top: 0, left: 0, zIndex: 1, p: 2 }}
      >
        {/* LOGO AND NAME */}
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: 900,
            fontSize: "1rem",
          }}
          onClick={() => setActive("")}
        >
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
          >
            {/* LOGO */}
            <Box
              sx={{
                width: "50px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={logo}
                alt="logo"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>

            {/* NAME */}
            <Stack
              direction={"row"}
              gap={1}
              alignItems="center"
              justifyContent="center"
            >
              <Typography>Mahmoud Hamdy |</Typography>
              <Typography>Front-End Developer</Typography>
            </Stack>
          </Stack>
        </Link>

        {/* NAVBAR LINKS */}

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          {navLinks.map((link) => (
            <Link
              style={{
                textDecoration: "none",
                color: active === link.title ? "white" : "grey",
              }}
              key={link.id}
              to={link.id}
              onClick={() => setActive(link.title)}
            >
              {link.title}
            </Link>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}

export default Navbar;
