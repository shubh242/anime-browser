import React, { useState } from "react";
import "../styles.css";
import DisplayTileComponent from "../Components/displayTileComponent";
import Sidenav from "../Components/sidenav";
import { Box } from "@mui/material";

export default function Home() {
  const [searchString, setSearchString] = useState("");
  const [animeCollection, setAnimeCollection] = useState([]);

  const updateSearchString = (inputString) => {
    setSearchString(inputString);
  };

  const updateAnimeCollection = (collection) => {
    setAnimeCollection([...animeCollection, collection.animeFetchData], () => {
      console.log(animeCollection);
    });
  };

  return (
    <div>
      <Sidenav
        searchString={searchString}
        updateSearchString={updateSearchString}
      />
      <Box component="main" sx={{ marginTop: 10, marginLeft: 10 }}>
        <DisplayTileComponent
          searchString={searchString}
          animeCollection={animeCollection}
          updateAnimeCollection={updateAnimeCollection}
          updateSearchString={updateSearchString}
        />
      </Box>
    </div>
  );
}
