import React from 'react';
import { InputLabel, Stack, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material'; // Added missing imports

const TypeOfPlace = () => {
  return (
    <Stack spacing={1}>
      <InputLabel sx={{
        fontSize: 14,
        fontWeight: 600,
      }}>
        Type of Label
      </InputLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="any-type"
        name="radio-buttons-group"
      >
        <FormControlLabel value="any-type" control={<Radio />} label={
          <Typography variant="subtitle1" sx={{ fontSize: 13, fontWeight: 500 }}>
            Any Type
          </Typography>
        } />
        <FormControlLabel value="room" control={<Radio />} label={
          <Typography variant="subtitle1" sx={{ fontSize: 13, fontWeight: 500 }}>
            Room
          </Typography>
        } />
        <FormControlLabel value="entire-home" control={<Radio />} label={
          <Typography variant="subtitle1" sx={{ fontSize: 13, fontWeight: 500 }}>
            Entire Home
          </Typography>
        } />
      </RadioGroup>
    </Stack>
  );
}

export default TypeOfPlace;
