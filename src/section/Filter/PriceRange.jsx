import React, { useState } from 'react';
import { Stack, InputLabel, Slider, TextField } from '@mui/material';

const PriceRange = () => {
    const [value, setValue] = useState([20, 75]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Stack spacing={1}>
            <InputLabel sx={{ fontSize: 14, fontWeight: 600 , pl:3}}>
                Price Range
            </InputLabel>

            <Slider
                valueLabelDisplay="auto"
                value={value}
                onChange={handleChange}
            />

            <Stack direction="row" alignItems="center" spacing={2}>
                <TextField
                    size="small"
                    label="Minimum"
                    type="number"
                    sx={{ml:3}}
                    value={value[0]}
                    onChange={(e) =>
                        setValue([parseInt(e.target.value), value[1]])
                    }
                />

                <TextField
                    size="small"
                    label="Maximum"
                    type="number"
                    sx={{ml:3}}
                    value={value[1]}
                    onChange={(e) =>
                        setValue([value[0], parseInt(e.target.value)])
                    }
                />
            </Stack>
        </Stack>
    );
}

export default PriceRange;
