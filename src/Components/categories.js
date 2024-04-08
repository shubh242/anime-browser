import { Button, ButtonGroup, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CategoriesComponent({ updateCategoryData }) {
  const url = `https://kitsu.io/api/edge/categories?sort=-totalMediaCount`;
  const [categories, setCategories] = useState([]);

  const categoryData = async () => {
    let category = await fetch(url);
    category = await category.json();
    setCategories(category.data);
  };

  useEffect(() => {
    // eslint-disable-next-line
    categoryData();
  }, []);

  const handleClick = (e, title) => {
    updateCategoryData(title);
  };

  return (
    <div>
      {/* <Grid></Grid> */}
      <ButtonGroup
        variant="text"
        aria-label="Basic button group"
        sx={{ flexWrap: "wrap" }}
      >
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <Link to={`/anime/category/${category.id}`}>
                <Button
                  onClick={(event) =>
                    handleClick(event, category.attributes.title)
                  }
                >
                  {category.attributes.title}
                </Button>
              </Link>
            </div>
          );
        })}
      </ButtonGroup>
    </div>
  );
}
