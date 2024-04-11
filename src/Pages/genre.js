import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidenav from "../Components/sidenav";

export default function GenreComponent() {
  const [spinner, setSpinner] = useState(false);
  const [displayData, setDisplayData] = useState({ data: [] });

  const fetchCategories = async () => {
    let categories = [];
    console.log("entered fetchcate");
    let lastoffset = 200;
    let offset = 0;
    while (lastoffset > offset) {
      let url = `https://kitsu.io/api/edge/categories?sort=title&page[limit]=20&page[offset]=${offset}`;
      let result = await fetch(url);
      result = await result.json();
      categories.push(...result.data);
      offset = offset + 20;
    }
    let mappedArray = categorization(categories);
    setDisplayData({ data: [mappedArray] });
    setSpinner(true);
  };

  const categorization = (categories) => {
    let pastAlpha = "";
    let tempArray = [];
    let mappingArray = new Map();
    categories.forEach((data) => {
      tempArray = [data];
      if (pastAlpha === data.attributes.title[0]) {
        mappingArray.get(pastAlpha).push(data);
      } else {
        pastAlpha = data.attributes.title[0];
        mappingArray.set(pastAlpha, tempArray);
      }
    });
    return mappingArray;
  };

  useEffect(() => {
    if (!spinner) {
      fetchCategories();
    }
  }, [spinner]);

  return (
    <div style={{ marginTop: "60px" }}>
      <Sidenav />
      {spinner ? (
        <>
          <Typography gutterBottom variant="h4" sx={{ margin: "auto" }}>
            Anime Categories
          </Typography>
          <Grid container spacing={1}>
            {[...displayData.data[0].keys()].map((keys) => {
              return (
                <>
                  <Grid item xs={6} key={keys}>
                    <Typography variant="h2">{keys}</Typography>
                    {displayData.data[0].get(keys).map((data) => {
                      return (
                        <>
                          <Link
                            to={`/anime/category/${data.attributes.title}`}
                            style={{ textDecoration: "none", color: "white" }}
                            key={data.id}
                          >
                            <Typography variant="subtitle1">
                              <Tooltip
                                title={data.attributes.description}
                                placement="top-end"
                              >
                                <Button>{data.attributes.title}</Button>
                              </Tooltip>
                            </Typography>
                          </Link>
                        </>
                      );
                    })}
                  </Grid>
                </>
              );
            })}
          </Grid>
        </>
      ) : (
        // <div></div>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}
