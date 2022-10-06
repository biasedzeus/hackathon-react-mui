import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

const HeroSectionStatCard = ({ stat }) => {
  return (
    <>
        <Stack
          flexDirection="row"
          alignItems="center"
          gap={"1rem"}
        >
          <img src={stat.logo} height="60px" width="60px" />
          <Stack>
            <Typography color="white" fontWeight="600">
              {stat.stat} +
            </Typography>
            <Typography color="white" fontSize=".8rem" fontWeight="light">
              {stat.description}
            </Typography>
          </Stack>
        </Stack>
      {stat.stat !== "100" && (
        <Divider
          sx={{ height: "70%", }}
          variant="middle"
          color="white"
          orientation="vertical"
        />
      )}
    </>
  );
};

export default HeroSectionStatCard;
