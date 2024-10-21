import Banner from "@/components/Banner/Banner";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Homepage = () => {
  return (
    <Box style={{ position: "relative" }}>
      <Banner
        height="600px"
        width="1220px"
        bgImage="https://via.placeholder.com/1216x600"
      />
      <Box
        sx={{
          maxHeight: { sm: "500px", xs: "200px" },
          maxWidth: { sm: "600px", xs: "330px" },
          padding: { sm: "40px", xs: "10px" },
          backgroundColor: "white",
          position: "absolute",
          bottom: "-50px",
          left: { sm: "80px", xs: "20px" },
          border: "1px solid black",
          boxShadow: "10px",
          borderRadius: "15px",
        }}
      >
        <Button
          sx={{ marginBottom: { sm: "16px", xs: "8px" } }}
          variant="contained"
        >
          Technology
        </Button>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { sm: "36px", xs: "18px" },
            lineHeight: 1.2,
          }}
        >
          The Impact of Technology on the Workplace: How Technology is Changing
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginTop: { sm: "16px", xs: "8px" },
            }}
          >
            <Typography
              sx={{
                height: "60px",
                width: "60px",
                backgroundColor: "gray",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#f5f5f5",
              }}
            >
              100x100
            </Typography>
            <Typography
              sx={{ color: "gray", fontSize: { sm: "16px", xs: "12px" } }}
            >
              Jason Francisco
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ color: "gray", fontSize: { sm: "16px", xs: "12px" } }}
            >
              August 20, 2022
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
