import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';

const LocationSearch = () => {
    const [inputText, setInputText] = useState('');
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(false);

    // Simulated data for demonstration
    const cities = [
        'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose',
    // Cities from India
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Kolkata',
    'Chennai',
    'Hyderabad',
    'Ahmedabad',
    'Pune',
    'Surat',
    'Jaipur',
        // Add more cities as needed
    ];

    // Function to filter options based on input text
    const filterOptions = (inputValue) => {
        return cities.filter(city =>
            city.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    const fetchLocations = (inputValue) => {
        setLoading(true);
        setTimeout(() => {
            setOptions(filterOptions(inputValue));
            setLoading(false);
        }, 1000); // Simulating a delay of 1 second
    };

    return (
        <Autocomplete
            fullWidth
            freeSolo
            options={options}
            loading={loading}
            inputValue={inputText}
            onInputChange={(event, newValue) => {
                setInputText(newValue);
                fetchLocations(newValue);
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    placeholder="Enter Location"
                    variant="standard"
                    InputProps={{
                        ...params.InputProps,
                        disableUnderline: true,
                        endAdornment: (
                            <>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </>
                        )
                    }}
                />
            )}
        />
    );
};

export default LocationSearch;
