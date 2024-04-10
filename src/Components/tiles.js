import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Paper,
  Grid,
  styled,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function TileComponent({ anime, updateSearchString }) {
  const handleClickTile = (e, key) => {
    updateSearchString("");
    console.log(key);
  };

  return (
    <Link to={`/anime/${anime.id}`} style={{ textDecoration: "none" }}>
      <Grid xs={4} onClick={(event) => handleClickTile(event, anime.id)}>
        <Item>
          <Card sx={{ width: 280, height: 570 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="380"
                image={anime.img}
                alt={anime.title}
                sx={{ objectFit: "fill" }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {anime.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {anime.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Item>
      </Grid>
    </Link>
  );
}
