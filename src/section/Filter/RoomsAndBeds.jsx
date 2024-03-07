import { Box, InputLabel, Stack, Typography, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';

const RoomsAndBeds = () => {
  const [bedroom, setBedroom] = useState('1');

  const handleChangeBedroom = (event, newBedroom) => {
    if (newBedroom !== null) {
      setBedroom(newBedroom);
    }
  };

  return (
    <Stack spacing={1}>
      <InputLabel sx={{ fontSize: 14, fontWeight: 600, pl: 3 }}>
        Rooms and Beds
      </InputLabel>
      <Box sx={{ p: 1 }}>
        <Stack spacing={1}>
          <Typography variant="caption" sx={{ fontSize: 13, pl:1 }}>
            Bedrooms
          </Typography>
          <ToggleButtonGroup
            fullWidth
            color="primary"
            size="small"
            value={bedroom}
            onChange={handleChangeBedroom}
          >
            <ToggleButton value="1">1</ToggleButton>
            <ToggleButton value="2">2</ToggleButton>
            <ToggleButton value="3">3</ToggleButton>
            <ToggleButton value="4">4</ToggleButton>
            <ToggleButton value="5">5</ToggleButton>
            <ToggleButton value="6">6</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Box>
      <Box sx={{ p: 1 }}>
        <Stack spacing={1}>
          <Typography variant="caption" sx={{ fontSize: 13 , pl:1 }}>
            Beds
          </Typography>
          <ToggleButtonGroup
            fullWidth
            color="primary"
            size="small"
            value={bedroom}
            onChange={handleChangeBedroom}
          >
            <ToggleButton value="1">1</ToggleButton>
            <ToggleButton value="2">2</ToggleButton>
            <ToggleButton value="3">3</ToggleButton>
            <ToggleButton value="4">4</ToggleButton>
            <ToggleButton value="5">5</ToggleButton>
            <ToggleButton value="6">6</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Box>
      <Box sx={{ p: 1 }}>
        <Stack spacing={1}>
          <Typography variant="caption" sx={{ fontSize: 13, pl:1}}>
            Hall
          </Typography>
          <ToggleButtonGroup
            fullWidth
            color="primary"
            size="small"
            value={bedroom}
            onChange={handleChangeBedroom}
          >
            <ToggleButton value="1">1</ToggleButton>
            <ToggleButton value="2">2</ToggleButton>
            <ToggleButton value="3">3</ToggleButton>
            <ToggleButton value="4">4</ToggleButton>
            <ToggleButton value="5">5</ToggleButton>
            <ToggleButton value="6">6</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Box>
    </Stack>
  );
};

export default RoomsAndBeds;
