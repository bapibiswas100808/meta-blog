import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";

const Banner = ({ height = "400px", width = "100%", bgImage }) => {
  return (
    <Box
      sx={{
        minHeight: { lg: height, sm: "300px", xs: "250px" },
        maxWidth: width,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        margin: { sm: "20px", xs: "10px" },
        borderRadius: "15px",
      }}
    >
      <Box>
        {/* <Typography
            variant="h2"
            sx={{ fontWeight: "bold", mb: 2, color: "white" }}
          >
            {title || "Welcome to Our Website"}
          </Typography> */}
        {/* 
          {buttonText && (
            <Button variant="contained" color="primary" size="large">
              {buttonText}
            </Button>
          )} */}
      </Box>
    </Box>
  );
};

export default Banner;
