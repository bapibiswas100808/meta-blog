import Advertisement from "@/components/Advertisement/Advertisement";
import Banner from "@/components/Banner/Banner";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const SinglePage = () => {
  return (
    <Box>
      <Box sx={{ margin: "40px 20px" }}>
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
            alignItems: "center",
            gap: "100px",
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
                marginTop: { sm: "15px", xs: "8px" },
              }}
            >
              August 20, 2022
            </Typography>
          </Box>
        </Box>
      </Box>
      <Banner
        bgImage="https://via.placeholder.com/800x462"
        height="400px"
        width="100%"
      />
      <Typography sx={{ margin: "20px 20px", fontSize: "20px" }}>
        Traveling is an enriching experience that opens up new horizons, exposes
        us to different cultures, and creates memories that last a lifetime.
        However, traveling can also be stressful and overwhelming, especially if
        you dont plan and prepare adequately. In this blog article, well explore
        tips and tricks for a memorable journey and how to make the most of your
        travels.
        <br />
        <br />
        One of the most rewarding aspects of traveling is immersing yourself in
        the local culture and customs. This includes trying local cuisine,
        attending cultural events and festivals, and interacting with locals.
        Learning a few phrases in the local language can also go a long way in
        making connections and showing respect.
      </Typography>
      <Box sx={{ margin: "20px 20px" }}>
        <Typography sx={{ fontSize: "30px" }}>Plan Your Itinerary</Typography>
        <Typography sx={{ fontSize: "20px" }}>
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you dont plan and prepare adequately. In this blog
          article, well explore tips and tricks for a memorable journey and how
          to make the most of your travels.
          <br />
          <br />
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </Typography>
      </Box>
      <Box sx={{ margin: "20px 20px" }}>
        <Typography sx={{ fontSize: "30px" }}>
          Research Your Destination
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you dont plan and prepare adequately. In this blog
          article, well explore tips and tricks for a memorable journey and how
          to make the most of your travels.
          <br />
          <br />
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </Typography>
      </Box>
      <Box sx={{ margin: "20px 20px" }}>
        <Typography
          sx={{
            maxWidth: "600px",
            margin: "0 auto",
            fontStyle: "italic",
            backgroundColor: "#F6F6F7",
            padding: "32px",
            fontSize: "24px",
            borderRadius: "15px",
          }}
        >
          “ Traveling can expose you to new environments and potential health
          risks, so its crucial to take precautions to stay safe and healthy. ”
        </Typography>
      </Box>
      <Banner
        bgImage="https://via.placeholder.com/800x462"
        height="400px"
        width="100%"
      />
      <Advertisement />
      {/* Pack Lightly and Smartly */}
      <Box sx={{ margin: "40px 20px" }}>
        <Typography sx={{ fontSize: "30px", marginBottom: "20px" }}>
          Pack Lightly and Smartly
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          Packing can be a daunting task, but with some careful planning and
          smart choices, you can pack light and efficiently. Start by making a
          packing list and sticking to it, focusing on versatile and comfortable
          clothing that can be mixed and matched. Invest in quality luggage and
          packing organizers to maximize space and minimize wrinkles.
        </Typography>
      </Box>
      {/* Stay Safe and Healthy */}
      <Box sx={{ margin: "40px 20px" }}>
        <Typography sx={{ fontSize: "30px", marginBottom: "20px" }}>
          Stay Safe and Healthy
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          Packing can be a daunting task, but with some careful planning and
          smart choices, you can pack light and efficiently. Start by making a
          packing list and sticking to it, focusing on versatile and comfortable
          clothing that can be mixed and matched. Invest in quality luggage and
          packing organizers to maximize space and minimize wrinkles.
        </Typography>
      </Box>
      {/* Immerse Yourself in the Local Culture */}
      <Box sx={{ margin: "40px 20px" }}>
        <Typography sx={{ fontSize: "30px", marginBottom: "20px" }}>
          Immerse Yourself in the Local Culture
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          Packing can be a daunting task, but with some careful planning and
          smart choices, you can pack light and efficiently. Start by making a
          packing list and sticking to it, focusing on versatile and comfortable
          clothing that can be mixed and matched. Invest in quality luggage and
          packing organizers to maximize space and minimize wrinkles.
        </Typography>
      </Box>
      {/* Capture Memories */}
      <Box sx={{ margin: "40px 20px" }}>
        <Typography sx={{ fontSize: "30px", marginBottom: "20px" }}>
          Capture Memories
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          Packing can be a daunting task, but with some careful planning and
          smart choices, you can pack light and efficiently. Start by making a
          packing list and sticking to it, focusing on versatile and comfortable
          clothing that can be mixed and matched. Invest in quality luggage and
          packing organizers to maximize space and minimize wrinkles.
        </Typography>
      </Box>
      {/* conclusion */}
      <Box sx={{ margin: "40px 20px" }}>
        <Typography sx={{ fontSize: "30px", marginBottom: "20px" }}>
          Conclusion:
        </Typography>
        <Typography sx={{ fontSize: "20px" }}>
          Traveling is an art form that requires a blend of planning,
          preparation, and spontaneity. By following these tips and tricks, you
          can make the most of your journey and create memories that last a
          lifetime. So pack your bags, embrace the adventure, and enjoy the
          ride.
        </Typography>
      </Box>
    </Box>
  );
};

export default SinglePage;
