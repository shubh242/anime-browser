import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import TileComponent from './tiles';
import CategoriesComponent from './categories';
import { useParams } from 'react-router-dom';

export default function DisplayTileComponent({ searchString, animeCollection, updateAnimeCollection, updateSearchString }) {

    const [animeData, setAnimeData] = useState([]);
    const [categoryData, setCategoryData] = useState();
    const params = useParams();

    const fetchData = async (queryString) => {
        if (queryString === '' && (params.categoryId === undefined)) {
            try {
                const url = 'https://kitsu.io/api/edge/trending/anime';
                const response = await fetch(url);
                const result = await response.json();
                const animeFetchData = result.data.map((anime) => {
                    return {
                        id: anime.id,
                        title: anime.attributes.titles.en === undefined ? (anime.attributes.titles.en_us === undefined ? anime.attributes.titles.en_jp : anime.attributes.titles.en_us) : anime.attributes.titles.en,
                        type: anime.type,
                        description: anime.attributes.description,
                        averageRating: anime.attributes.averageRating,
                        userCount: anime.attributes.userCount,
                        startDate: anime.attributes.startDate,
                        endDate: anime.attributes.endDate,
                        img: anime.attributes.posterImage.original,
                        episodeLength: anime.attributes.episodeLength,
                    }
                });
                setAnimeData([animeFetchData]);
            } catch (error) {
                console.error(error);
            }
        }
        else if (searchString) {
            const url = `https://kitsu.io/api/edge/anime?filter[text]=${searchString}&page[limit]=20&page[offset]=20`;
            const response = await fetch(url);
            const result = await response.json();
            const animeFetchData = result.data.map((anime) => {
                return {
                    id: anime.id,
                    title: anime.attributes.titles.en === undefined ? (anime.attributes.titles.en_us === undefined ? anime.attributes.titles.en_jp : anime.attributes.titles.en_us) : anime.attributes.titles.en,
                    type: anime.type,
                    description: anime.attributes.description,
                    averageRating: anime.attributes.averageRating,
                    userCount: anime.attributes.userCount,
                    startDate: anime.attributes.startDate,
                    endDate: anime.attributes.endDate,
                    img: anime.attributes.posterImage.original,
                    episodeLength: anime.attributes.episodeLength,
                }
            });
            console.log(animeFetchData);
            setAnimeData([animeFetchData]);
        }

        else if (categoryData) {
            console.log(`IN ${categoryData} Category`);
            const url = `https://kitsu.io/api/edge/anime?filter[categories]=${categoryData}&sort=-favoritesCount&page[limit]=20&page[offset]=20`;
            const response = await fetch(url);
            const result = await response.json();
            const animeFetchData = result.data.map((anime) => {
                return {
                    id: anime.id,
                    title: anime.attributes.titles.en === undefined ? (anime.attributes.titles.en_us === undefined ? anime.attributes.titles.en_jp : anime.attributes.titles.en_us) : anime.attributes.titles.en,
                    type: anime.type,
                    description: anime.attributes.description,
                    averageRating: anime.attributes.averageRating,
                    userCount: anime.attributes.userCount,
                    startDate: anime.attributes.startDate,
                    endDate: anime.attributes.endDate,
                    img: anime.attributes.posterImage.original,
                    episodeLength: anime.attributes.episodeLength,
                }
            });
            console.log(animeFetchData);
            setAnimeData([animeFetchData]);
        }
    }

    function updateCategoryData(title) {
        updateSearchString('');
        setCategoryData(title);
    }

    useEffect(() => {
        fetchData(searchString);
        // eslint-disable-next-line
    }, [searchString]);

    useEffect(() => {
        fetchData(searchString);
        console.log(animeData);
        console.log(categoryData);
        // eslint-disable-next-line
    }, [categoryData]);

    return (
        <div className='displaytilecomponent'>
            <CategoriesComponent updateCategoryData={updateCategoryData} />
            <Typography gutterBottom variant="h4" sx={{ "margin": "auto" }}>
                Trending Animes
            </Typography>
            <Grid container spacing={3} gap={2} columns={16} sx={{ margin: "auto", justifyContent: "center", width: "100%" }}>
                {
                    !(animeData[0] === undefined) ? animeData[0].map((anime) => <TileComponent anime={anime} key={anime.id} updateSearchString={updateSearchString} />) : null
                }
            </Grid>
        </div>
    );
}