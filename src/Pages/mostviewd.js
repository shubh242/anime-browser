import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DisplayTileComponent from "../Components/displayTileComponent";
import Sidenav from "../Components/sidenav";

export default function MostViewedComponent() {
  return (
    <div>
      <Sidenav />
      <Box component="main" sx={{ marginTop: 10, marginLeft: 10 }}>
        <DisplayTileComponent />
      </Box>
    </div>
  );
}
