import React from "react";
import { Stack, Paper, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";

const OverViewDetails = () => {
  return (
    <div>
      <Paper sx={{ padding: "1rem" }} elevation={11}>
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          padding="0rem 2rem"
        >
          <Typography variant="h6" fontWeight="600">
            Overview
          </Typography>
          <Stack flexDirection="row" gap="1rem">
            <Button
              sx={{ padding: ".5rem 2rem" }}
              variant="contained"
              color="success"
            >
              Edit
            </Button>
            <Button variant="outlined" color="error">
              Delete
            </Button>
          </Stack>
        </Stack>
      </Paper>
      <Stack justifyContent="center" alignItems="center">      
        <Box
          sx={{
            width: {
              sm: "900px",
            },
            margin:'3rem',
          }}
        >
          <Typography paragraph>
            Butterflies are the adult flying stage of certain insects belonging
            to an order or group called Lepidoptera. The word "Lepidoptera"
            means "scaly wings" in Greek. This name perfectly suits the insects
            in this group because their wings are covered with thousands of tiny
            scales overlapping in rows.
          </Typography>
          <Typography paragraph>
            An agency of the Governmental Wildlife Conservation is planning to
            implement an automated system based on computer vision so that it
            can identify butterflies based on captured images. As a consultant
            for this project, you are responsible for developing an efficient
            model.
          </Typography>
          <Typography paragraph>
            Your Task is to build an Image Classification Model using CNN that
            classifies to which class of weather each image belongs to.
          </Typography>
        </Box>
      </Stack>
    </div>
  );
};

export default OverViewDetails;
