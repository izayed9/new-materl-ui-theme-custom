"use client";

import { InfoRounded } from "@mui/icons-material";
import {
  Card,
  CardMedia,
  Box,
  Typography,
  Chip,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

const ProductSmallCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        p: 2,
        display: "flex",
        flexWrap: "wrap",
        zIndex: 1,
      }}
    >
      <CardMedia
        component="img"
        width="100"
        height="100"
        alt="123 Main St, Phoenix, AZ cover"
        src="https://picsum.photos/100"
        sx={{
          borderRadius: "6px",
          width: { xs: "100%", sm: 100 },
        }}
      />

      <Box sx={{ alignSelf: "center", px: 2 }}>
        <Typography variant="body2" color="text.secondary" fontWeight="regular">
          123 Main St, Phoenix, AZ, USA
        </Typography>

        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="body2" fontWeight="bold" noWrap gutterBottom>
            $280k
          </Typography>
          <Box
            mt={2}
            sx={{
              //   border: "1px solid",
              //   bgcolor: "red",
              color: "black",
              display: "flex",
              borderRadius: "20px",
              padding: "5px",
            }}
          >
            <IconButton
              aria-label="delete"
              sx={{ padding: "0" }}
              size="small"
              color="primary"
            >
              <ControlPointOutlinedIcon />
            </IconButton>
            <Typography mx={1} sx={{ fontSize: "15px", marginTop: "5px" }}>
              12
            </Typography>
            <IconButton
              aria-label="delete"
              size="small"
              sx={{ padding: "0" }}
              color="primary"
            >
              <ControlPointOutlinedIcon />
            </IconButton>
          </Box>
          {/* <Chip
            size="small"
            variant="outlined"
            sx={(theme) => ({
              ".MuiChip-icon": {
                fontSize: 16,
                ml: "4px",
                color: "success.500",
              },
              bgcolor: "success.50",
              borderColor: "success.100",
              color: "success.900",
            })}
            icon={<AddIcon />}
            deleteIcon={<InfoRounded />}
          /> */}
        </Stack>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end" }} mb={3}>
        <CloseIcon />
      </Box>
    </Card>
  );
};

export default ProductSmallCard;
