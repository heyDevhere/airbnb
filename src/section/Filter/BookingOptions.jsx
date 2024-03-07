import React from 'react';
import { Stack, Typography, Switch, InputLabel } from '@mui/material';

const BookingOptions = () => {
  return (
    <Stack spacing={1}>
      <InputLabel sx={{
        fontSize: 14,
        fontWeight: 600,
        mt:1,
        pl:1,
        pt:2,
      }}>
        Booking Options
      </InputLabel>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="caption" sx={{ fontSize: 13, pl:2 }}>Instant Book</Typography>
        <Switch defaultChecked />
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="caption" sx={{ fontSize: 13, pl:2}}>Self Check in</Typography>
        <Switch />
      </Stack>
    </Stack>
  );
};

export default BookingOptions;
