import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CardComponent from "@/components/CardComponent/CardComponent";
import blogs from "../../../src/assets/blogs.json";

const Author = () => {
  return (
    <>
      <Box
        sx={{
          margin: "50px 20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: "350px",
          backgroundColor: "#F6F6F7",
          borderRadius: "15px",
        }}
      >
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Image
            src="https://picsum.photos/100/100"
            alt=""
            height={50}
            width={50}
            style={{ borderRadius: "50%" }}
          />

          <Box>
            <Typography sx={{ fontSize: "20px" }}>Jonathan Doe</Typography>
            <Typography sx={{ fontSize: "14px", color: "gray" }}>
              Collaborator & Editor
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            maxWidth: "600px",
            textAlign: "center",
            padding: "24px 0",
            fontSize: "18px",
            color: "gray",
          }}
        >
          Meet Jonathan Doe, a passionate writer and blogger with a love for
          technology and travel. Jonathan holds a degree in Computer Science and
          has spent years working in the tech industry, gaining a deep
          understanding of the impact technology has on our lives.
        </Typography>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Typography
            sx={{
              color: "white",
              backgroundColor: "#696A75",
              padding: "5px 5px 0px 5px",
              borderRadius: "10px",
              ":hover": {
                backgroundColor: "green",
                color: "#f0f0f0",
              },
              cursor: "pointer",
            }}
          >
            <FacebookIcon />
          </Typography>
          <Typography
            sx={{
              color: "white",
              backgroundColor: "#696A75",
              padding: "5px 5px 0px 5px",
              borderRadius: "10px",
              ":hover": {
                backgroundColor: "green",
                color: "#f0f0f0",
              },
              cursor: "pointer",
            }}
          >
            <TwitterIcon />
          </Typography>
          <Typography
            sx={{
              color: "white",
              backgroundColor: "#696A75",
              padding: "5px 5px 0px 5px",
              borderRadius: "10px",
              ":hover": {
                backgroundColor: "green",
                color: "#f0f0f0",
              },
              cursor: "pointer",
            }}
          >
            <InstagramIcon />
          </Typography>
          <Typography
            sx={{
              color: "white",
              backgroundColor: "#696A75",
              padding: "5px 5px 0px 5px",
              borderRadius: "10px",
              ":hover": {
                backgroundColor: "green",
                color: "#f0f0f0",
              },
              cursor: "pointer",
            }}
          >
            <YouTubeIcon />
          </Typography>
        </Box>
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
    </>
  );
};

export default Author;
