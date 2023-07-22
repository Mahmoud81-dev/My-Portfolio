import { Box, Drawer, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import logo from "../assets/logos/m-high-resolution-logo-white-on-transparent-background.png";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import MenuSmall from "./MenuSmall";
import { Spa } from "@mui/icons-material";

function Navbar() {
  const [active, setActive] = useState(false);
 
  return (
    <Box p={2} border={"1px solid red"}>
      <Stack
        direction="row"
        px={{ md: 8, lg: 5 }}
        justifyContent="space-between"
        alignItems="center"
        // sx={{ position: "absolute", top: 0, left: 0, zIndex: 1, p: 2 }}
      >
        {/* LOGO AND NAME */}
        <Link
          to={"/"}
          style={{
            textDecoration: "none",
            color: "white",
            fontWeight: 900,
          }}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
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
              direction={{ xs: "column", sm: "row" }}
              gap={1}
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "0.8rem", md: "1rem" },
                }}
              >
                Mahmoud Hamdy {"|"}
              </Typography>
              
              <Typography sx={{ fontSize: { xs: "0.7rem", md: "1rem" } }}>
                Front-End Developer
              </Typography>
            </Stack>
          </Stack>
        </Link>

        {/* NAVBAR LINKS */}

        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={2}
          display={{ xs: "none", md: "flex" }}
        >
          {navLinks.map((link) => (
            <Link
              style={{
                textDecoration: "none",
                color: active === link.title ? "white" : "gray",
                fontWeight: "bold",
              }}
              key={link.id}
              to={link.id}
              onClick={() => setActive(link.title)}
            >
              {link.title}
            </Link>
          ))}
        </Stack>

      <MenuSmall/>
      </Stack>
    </Box>
  );
}

export default Navbar;
