import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Advertisement = () => {
  return (
    <Box
      sx={{
        maxWidth: "800px",
        minHeight: "100px",
        backgroundColor: "#E7E8E9",
        borderRadius: "15px",
        margin: { md: "50px auto", xs: "20px 20px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={{ color: "gray", fontSize: "14px" }}>
        Advertisement
      </Typography>
      <Typography sx={{ color: "gray", fontWeight: "bold", fontSize: "20px" }}>
        You Can Place Add Here
      </Typography>
      <Typography sx={{ color: "gray", fontSize: "16px" }}>750x100</Typography>
    </Box>
  );
};

export default Advertisement;
