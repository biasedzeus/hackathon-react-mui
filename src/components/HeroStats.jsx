import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { heroStats } from "../utils/heroStats";
import HeroSectionStatCard from "./HeroSectionStatCard";

const HeroStats = () => {
  return (
    <Stack
      sx={{
          backgroundColor: "#002A3B",
          flexDirection: "row",
          justifyContent: "space-around",
          padding:'2rem',
        }}
        >

    <Stack
      sx={{
          backgroundColor: "#002A3B",
          flexDirection: "row",
          justifyContent: "space-around",
          minWidth:'900px',
          maxWidth:'950px'
        }}
        >
      {heroStats.map((stat) => {
          return <HeroSectionStatCard key={stat.stat} stat={stat} />;
        })}
    </Stack>
        </Stack>
  );
};

export default HeroStats;
