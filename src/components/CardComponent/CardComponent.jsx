import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const CardComponent = ({
  image,
  buttonText,
  headerText,
  writerName,
  date,
  writerImg,
}) => {
  console.log(writerImg);
  return (
    <Box
      sx={{
        maxHeight: "500px",
        padding: { sm: "20px", xs: "10px" },
        backgroundColor: "white",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
      }}
    >
      <Image
        src={image}
        alt="Post image"
        height={240}
        width={360}
        style={{ width: "100%", height: "auto" }}
      />
      <br />
      <Box sx={{ padding: "24px 6px" }}>
        <Button
          sx={{ marginBottom: { sm: "16px", xs: "8px" } }}
          variant="outlined"
        >
          {buttonText}
        </Button>

        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: { sm: "24px", xs: "18px" },
            lineHeight: 1.2,
          }}
        >
          {headerText}
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
              src={writerImg}
              alt=""
              height={50}
              width={50}
              style={{ borderRadius: "50%" }}
            />
            <Typography
              sx={{ color: "gray", fontSize: { sm: "16px", xs: "12px" } }}
            >
              {writerName}
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
              {date}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardComponent;
