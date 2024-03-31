import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../Components/searchbar";
import { Box, Button, Container, Grid, Typography, ButtonGroup } from "@mui/material";
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';
import BookmarkAddedSharpIcon from '@mui/icons-material/BookmarkAddedSharp';
import Sidenav from "../Components/sidenav";
import DisplayTileComponent from "../Components/displayTileComponent";
import { useSnackbar } from 'notistack';

export default function AnimeInfo() {
    const params = useParams();
    const url = `https://kitsu.io/api/edge/anime/${params.id}`;
    const [animeData, setAnimeData] = useState({});
    const [searchString, setSearchString] = useState('');
    const [bookmark, setBookmark] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const updateSearchString = (inputString) => {
        setSearchString(inputString);
    }

    const data = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            console.log(result.data);
            setAnimeData({
                id: result.data.id,
                title: result.data.attributes.titles.en,
                type: result.datatype,
                description: result.data.attributes.description,
                averageRating: result.data.attributes.averageRating,
                userCount: result.data.attributes.userCount,
                startDate: result.data.attributes.startDate,
                endDate: result.data.attributes.endDate,
                img: result.data.attributes.
                .original,
                episodeLength: result.data.attributes.episodeLength,
                popularityRank: result.data.attributes.popularityRank,
                coverImage: result.data.attributes.coverImage.original,
            });
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        data();
    }, [searchString]);

    const handleBookmarkClick = (e, id, variant) => {
        setBookmark(true);
        enqueueSnackbar('Added to the bookmark!', { variant, autoHideDuration: 2000 });
    }

    const handleDeleteBookmarkClick = (e, id, variant) => {
        setBookmark(false);
        enqueueSnackbar('Removed from the bookmark!', { variant, autoHideDuration: 2000 });
    }

    return (
        <div>
            <Sidenav searchString={searchString} updateSearchString={updateSearchString} />
            {
                (searchString === '') ? (
                    <Box sx={{ width: "-webkit-fill-available", margin: "5.5% auto" }}>
                        <div style={{ display: "flex", backgroundImage: `url(${animeData.coverImage})` }}>
                            <Grid container spacing={2} border={2} marginLeft={8} width={"-webkit-fill-available"} paddingRight={20} sx={{ backdropFilter: "blur(10px)" }}>
                                <Grid item xs={4}>
                                    <img
                                        src={`${animeData.img}`}
                                        alt={animeData.title}
                                        style={{ height: "380px", border: "solid white", marginLeft: "-80px" }}
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="h3">
                                        {animeData.title}
                                    </Typography>
                                    <Typography variant="body1">
                                        {animeData.description}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </div>
                        <ButtonGroup variant="contained" sx={{ marginTop: "10px" }}>
                            <Button>Watch Now</Button>
                            {
                                bookmark ?
                                    <Button onClick={e => { handleDeleteBookmarkClick(e, animeData.id, 'error') }}>Bookmark <BookmarkAddedSharpIcon /></Button> :
                                    <Button onClick={e => { handleBookmarkClick(e, animeData.id, 'success') }}>Bookmark <BookmarkAddSharpIcon /></Button>
                            }
                        </ButtonGroup>
                    </Box>
                ) : (
                    <DisplayTileComponent searchString={searchString} updateSearchString={updateSearchString} />
                )
            }
        </div >
    );
}