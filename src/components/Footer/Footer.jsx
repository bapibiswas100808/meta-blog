import { Grid, Box, Typography, Link, TextField, Button } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          padding: "100px 40px 60px",
          backgroundColor: "#f5f5f5",
          borderBottom: "1px solid gray",
        }}
      >
        <Grid container spacing={4}>
          {/* Column 1: About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6">About</Typography>
            <Typography
              variant="body2"
              sx={{ marginTop: "10px", fontSize: "18px", color: "gray" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </Typography>
            <Typography
              variant="body2"
              sx={{ marginTop: "10px", fontSize: "17px", color: "gray" }}
            >
              <span style={{ color: "black", marginRight: "3px" }}>Email:</span>
              info@jstemplate.net
            </Typography>
            <Typography
              sx={{ marginTop: "5px", fontSize: "17px", color: "gray" }}
              variant="body2"
            >
              <span style={{ color: "black", marginRight: "3px" }}>Phone:</span>
              880 123 456 789
            </Typography>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6">Quick Links</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
              <Link
                href="#"
                underline="hover"
                sx={{ marginBottom: "10px", color: "gray" }}
              >
                Home
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ marginBottom: "10px", color: "gray" }}
              >
                About
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ marginBottom: "10px", color: "gray" }}
              >
                Blog
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ marginBottom: "10px", color: "gray" }}
              >
                Archived
              </Link>
              <Link
                href="/"
                underline="hover"
                sx={{ marginBottom: "10px", color: "gray" }}
              >
                Author
              </Link>
              <Link
                href="/"
                underline="hover"
                sx={{ marginBottom: "10px", color: "gray" }}
              >
                Contact
              </Link>
            </Box>
          </Grid>

          {/* Column 3: Categories */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6">Categories</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "10px",
              }}
            >
              <Link
                href="#"
                underline="hover"
                sx={{ marginBottom: "10px", color: "gray" }}
              >
                Life style
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ marginBottom: "10px", color: "gray" }}
              >
                Technology
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ marginBottom: "10px", color: "gray" }}
              >
                Travel
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ marginBottom: "10px", color: "gray" }}
              >
                Business
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ marginBottom: "10px", color: "gray" }}
              >
                Economy
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ marginBottom: "10px", color: "gray" }}
              >
                Sports
              </Link>
            </Box>
          </Grid>

          {/* Column 4: Newsletter */}
          <Grid
            item
            xs={12}
            md={4}
            minHeight="200px"
            sx={{
              backgroundColor: "white",
              padding: "20px 30px",
              borderRadius: "15px",
              paddingBottom: "20px",
              width: "fullWidth",
              marginLeft: { xs: "30px", lg: "0" },
              marginTop: { xs: "25px", lg: "0" },
            }}
          >
            <Typography sx={{ textAlign: "center" }} variant="h6">
              Weekly Newsletter
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: "10px",
                textAlign: "center",
                fontSize: "16px",
                color: "gray",
              }}
            >
              Get blog articles and offers via email
            </Typography>
            <Box sx={{ marginTop: "10px" }}>
              <TextField
                label="Your Email"
                variant="outlined"
                size="small"
                fullWidth
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "10px", width: "100%" }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* Footer Ground */}
      <Box
        sx={{
          color: "gray",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "32px",
          backgroundColor: "#f5f5f5",
          flexDirection: {
            xs: "column",
            md: "row",
            lg: "row",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "top",
          }}
        >
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
            <Typography sx={{ color: "gray" }}>
              © JS Template 2023. All Rights Reserved.
            </Typography>
          </Typography>
        </Box>
        <Typography sx={{ marginTop: { xs: "10px", lg: "0px" } }}>
          Terms of Use | Privacy Policy | Cookie Policy
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
