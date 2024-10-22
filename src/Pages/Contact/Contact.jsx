import Advertisement from "@/components/Advertisement/Advertisement";
import Banner from "@/components/Banner/Banner";
import CardComponent from "@/components/CardComponent/CardComponent";
import { Button, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import blogs from "../../../src/assets/blogs.json";
import Image from "next/image";

const Contact = () => {
  return (
    <>
      {/* Banner */}
      <Box sx={{ position: "relative", marginBottom: "150px" }}>
        <Banner
          height="600px"
          width="100%"
          bgImage="https://via.placeholder.com/1216x600"
        />
        <Box
          sx={{
            maxHeight: { sm: "320px", xs: "200px" },
            maxWidth: { sm: "600px", xs: "330px" },
            padding: { sm: "40px", xs: "10px" },
            backgroundColor: "white",
            position: "absolute",
            bottom: "-60px",
            left: { sm: "80px", xs: "20px" },
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
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
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
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
              <Image
                src="https://picsum.photos/100/100"
                alt=""
                height={50}
                width={50}
                style={{ borderRadius: "50%" }}
              />
              <Typography
                sx={{ color: "gray", fontSize: { sm: "16px", xs: "12px" } }}
              >
                Jason Francisco
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "gray",
                  fontSize: { sm: "16px", xs: "12px" },
                  marginTop: "15px",
                }}
              >
                August 20, 2022
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Advertisement */}
      <Box>
        <Advertisement />
      </Box>
      {/* Latest Post */}
      <Box sx={{ margin: "0 20px" }}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "25px",
            textAlign: "center",
            margin: "80px 0",
          }}
        >
          Latest Posts
        </Typography>

        {/* cards */}
        <Grid container spacing={3}>
          {blogs?.map((blog, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4}>
              <CardComponent
                buttonText={blog?.buttonText}
                headerText={blog?.headerText}
                writerName={blog?.writerName}
                date={blog?.date}
                image={blog?.image}
                writerImg={blog?.writerImage}
              />
            </Grid>
          ))}
        </Grid>
        {/* all post button */}
        <Box
          sx={{ display: "flex", justifyContent: "center", margin: "40px 0" }}
        >
          <Button size="medium" sx={{}} variant="outlined">
            See All Post
          </Button>
        </Box>
      </Box>
      {/* Advertisement */}
      <Box sx={{ paddingBottom: "50px", paddingTop: "10px" }}>
        <Advertisement />
      </Box>
    </>
  );
};

export default Contact;
