import { Box, Drawer, Menu, MenuItem, Stack } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
function MenuSmall() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box display={{ xs: "flex", md: "none" }}>
      {/* Menu PhoneSize */}

      <Box  id="basic-button">
        <MenuIcon onClick={() => setOpen(true)} />
      </Box>

      {/* Menu CONTENTS */}

      <Menu
        id="basic-menu"
        open={open}
        onClose={handleClose}
        anchorEl={document.getElementById("basic-button")}
   
      >
        {navLinks.map((link) => (
          <Link
            to={link.id}
            style={{
              textDecoration: "none",
              color: active === link.title ? "white" : "gray",
              fontWeight: "bold",
            }}
          >
            <MenuItem onClick={handleClose}>{link.title}</MenuItem>
          </Link>
        ))}
      </Menu>
    </Box>
  );
}

export default MenuSmall;
