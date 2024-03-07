import React from 'react';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import TypeOfPlace from './TypeOfPlace';
import PriceRange from './PriceRange';
import RoomsAndBeds from './RoomsAndBeds';
import BookingOptions from './BookingOptions';

const Filter = () => {
  return (
    <Box sx={{ py: 4, pl: 1 }}>
      <Card sx={{ width: '100%', pb: 3 }}>
        <Box sx={{ mb: 2, py: 2, px: 3, bgcolor: (theme) => theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[900] }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle1">Filters</Typography>
            <Button size="small">Clear All</Button>
          </Stack>
        </Box>
        <Stack spacing={2} sx={{ px: 3 }}>
          <TypeOfPlace />
        </Stack>
        <Divider sx={{mb:1}} />
        <PriceRange />
        <Divider sx={{mt:2}} />
        <RoomsAndBeds/>
        <Divider sx={{mt:1, pb:2}} />
        <BookingOptions/>
        <Divider sx={{mt:2}} />

         
      </Card>
    </Box>
  );
};

export default Filter;
