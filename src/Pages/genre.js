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
    }
    let pastAlpha = "";
    let tempArray = [];
    let mappingArray = new Map();
    categories.forEach((data) => {
      // console.log(data);
      tempArray = [data];
      if (pastAlpha === data.attributes.title[0]) {
        mappingArray.get(pastAlpha).push(data);
      } else {
        pastAlpha = data.attributes.title[0];
        mappingArray.set(pastAlpha, tempArray);
        // console.log(mappingArray);
      }
    });
    console.log(mappingArray);
    setDisplayData({ data: [mappingArray] });
    setSpinner(true);
  };

  useEffect(() => {
    if (!spinner) {
      fetchCategories();
    } else {
      console.log(displayData);
    }
  }, [spinner]);

  return (
    <div>
      {spinner ? (
        new Array(displayData).map((data) => {
          return (
            <div>
              <h1>{data.attributes}</h1>
            </div>
          );
        })
      ) : (
        // <div></div>
        <CircularProgress />
      )}
    </div>
  );
}
