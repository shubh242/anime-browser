import { TextField } from '@mui/material';
import React, { useState } from 'react'

export default function SearchBar({ searchString, updateSearchString }) {

    const [inputString, setInputString] = useState('');

    const getSearchChange = (event) => {
        setInputString(event.target.value);
        console.log('updating Search String');
        updateSearchString(event.target.value);
    }

    return (
        <div className='searchBar'>
            <TextField size='small' label='Search' sx={{
                top: '5px'
            }} onChange={getSearchChange} value={inputString}></TextField>
        </div>
    );
}