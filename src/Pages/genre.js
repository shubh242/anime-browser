import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      console.log(offset);
    }
    console.log("exiting fetchcate");
    setDisplayData({ data: categories });
    console.log("Displaying Data");
    setSpinner(true);
  };

  useEffect(() => {
    if (!spinner) {
      fetchCategories();
    } else {
      setDisplayData([...displayData.data]);
    }
  }, [spinner]);

  return (
    <div>
      {spinner ? (
        displayData.data.map((data) => {
          return (
            <div key={data.id}>
              <h1 style={{ color: "white" }}>{data}</h1>
            </div>
          );
        })
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
