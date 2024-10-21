"use client";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname } from "next/navigation";
import SearchBar from "../SearchBar/SearchBar";

const DrawerComponent = () => {
  const pathname = usePathname();
  const [openDrawer, setOpenDrawer] = useState(false);
  const options = ["Home", "Blog", "Single Post", "Author", "Contact"];

  return (
    <>
      <Drawer
        PaperProps={{
          sx: { width: "250px", padding: "10px" },
        }}
        transitionDuration={600}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 20px",
          }}
        >
          <Typography>Menu</Typography>
          <IconButton onClick={() => setOpenDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <SearchBar />
        <List>
          {options?.map((option, idx) => {
            const routePath =
              option === "Home"
                ? "/"
                : `/${option.toLowerCase().replace(/\s+/g, "-")}`;
            const isActive = pathname === routePath;

            return (
              <Link key={idx} href={routePath} passHref>
                <ListItemButton
                  component=""
                  selected={isActive}
                  sx={{
                    backgroundColor: isActive ? "#e0f7fa" : "inherit",
                    color: isActive ? "blue" : "black",
                    "&.Mui-selected": {
                      backgroundColor: "#b2ebf2",
                      color: "blue",
                    },
                    "&.Mui-selected:hover": {
                      backgroundColor: "#80deea",
                    },
                    "&:hover": {
                      backgroundColor: "#f0f0f0",
                    },
                  }}
                  onClick={() => setOpenDrawer(false)}
                >
                  <ListItemText primary={option} />
                </ListItemButton>
              </Link>
            );
          })}
        </List>
      </Drawer>

      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
