"use client";
import {
  AppBar,
  Box,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import { useState, useEffect } from "react";
import Link from "next/link";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import DrawerComponent from "../DrawerComponent/DrawerComponent";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const isMatch2 = useMediaQuery(theme.breakpoints.up("sm"));
  const [navOption, setNavOption] = useState(0);
  const options = ["Home", "Blog", "Single Post", "Author", "Contact"];
  const [darkMode, setDarkMode] = useState(false);

  // For Remembering active tab after reload
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname;
      const pathToIndex = {
        "/": 0,
        "/blog": 1,
        "/single-post": 2,
        "/author": 3,
        "/contact": 4,
      };

      if (pathToIndex[path] !== undefined) {
        setNavOption(pathToIndex[path]);
      }
    }
  }, []);
  // Toggle between dark and light mode
  const handleToggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <AppBar
        sx={{ backgroundColor: "white", padding: "20px 0" }}
        position="static"
      >
        <Toolbar>
          {/* LOGO */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography>
              <FormatBoldIcon
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "black",
                  fontSize: "40px",
                  borderRadius: "50%",
                  marginTop: "7px",
                  marginRight: "10px",
                }}
              />
            </Typography>
            <Typography variant="" sx={{ fontSize: "30px", color: "black" }}>
              Meta
              <Typography
                component="span"
                sx={{ fontWeight: "bold", fontSize: "30px", color: "black" }}
              >
                Blog
              </Typography>
            </Typography>
          </Box>
          {/* Nav Options */}
          {!isMatch && (
            <Tabs
              sx={{ marginLeft: "auto" }}
              value={navOption}
              onChange={(e, newValue) => setNavOption(newValue)}
            >
              {options?.map((option, idx) => (
                <Tab
                  href={
                    option === "Home"
                      ? "/"
                      : `/${option.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  key={idx}
                  value={idx}
                  label={option}
                  sx={{ color: "black", fontSize: "16px" }}
                  component={Link}
                />
              ))}
            </Tabs>
          )}
          {/* Search And Toggle */}
          <Box sx={{ marginLeft: "auto", display: "flex", gap: "20px" }}>
            {/* search */}
            {isMatch2 && <SearchBar />}
            {/* Toggle Dark/Light Mode */}
            <IconButton
              onClick={handleToggleMode}
              sx={{ color: darkMode ? "green" : "black" }}
            >
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
          {/* Drawer for small Devices */}
          {isMatch && <DrawerComponent />}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
