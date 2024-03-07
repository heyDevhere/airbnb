import { Box, Button, Card, Divider, Grid, IconButton, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system'; // Correct import statement
import useResponsive from '../../hooks/useResponsive';
import { MagnifyingGlass } from '@phosphor-icons/react';
import LocationSearch from './LocationSearch';
import { DateRangePicker, MobileDatePicker, SingleInputDateRangeField } from '@mui/x-date-pickers-pro';
import { useState } from 'react';
import dayjs from 'dayjs';
import GuestSelector from './GuestSelector';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  background: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark
  }
}));

const Input = () => {
  const isMobile = useResponsive("down", "md");
  const [value, setValue] = useState();
  const shortcutItems = [
    {
    label: 'This week',
    getValue: () => {
      const today = dayjs();
      return [today.startOf('week'), today.endOf('week')];
    }
    },
    {
      label: 'Last 7 days',
    getValue: () => {
      const today = dayjs();
      return [today.subtract(7,'day'), today];
    }
    },



  ];

  return (
    <Box sx={{ px: { xs: 2, md: 0 } }}>
      <Card sx={{ borderRadius: isMobile ? 2 : 10, py: 2, px: 4 }}>
        <Stack direction={isMobile ? "column" : "row"} alignItems="center" spacing={2}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Stack spacing={{ xs: 1, md: 0 }}>
                  <Typography variant="subtitle2" sx={{ width: "80vh" }}>Destination</Typography>
                  <LocationSearch />
                </Stack>
              </Grid>
              <Grid item md={5} xs={12}>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={0.2}>
                  {!isMobile && (
                    <Divider orientation="vertical" sx={{ height: 40, ml: 1 }} />
                  )}
                  <Stack spacing={{ xs: 1, md: 0 }}>
                    <Typography variant="subtitle2" sx={{ width: "80%" }}>Check in - out</Typography>
                    {isMobile ? (
                      <MobileDatePicker
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                      />
                    ) : (
                      <DateRangePicker 
                        slots={{
                          field: SingleInputDateRangeField,
                          textField: TextField,
                        }}
                        slotProps={{
                          shortcuts: { items: shortcutItems },
                          textField: {
                            fullWidth: true,
                            variant: "standard"
                          }
                        }}
                        sx={{ width: isMobile ? "100%" : 220 }} // Adjust the width as needed
                        disablePast
                        name="allowedRange"
                      />
                    )}
                  </Stack>
                  {!isMobile && (
                    <Divider orientation="vertical" sx={{ height: 40, ml: 1 }} />
                  )}
                </Stack>
              </Grid>
              <Grid item md={3} xs={12}>
              <Stack spacing={{ xs: 1, md: 0 }}>
                  <Typography variant="subtitle2">
                    Guests</Typography>
                    <GuestSelector/>
                </Stack>
              </Grid>
            </Grid>
          </Box>

          {isMobile ? (
            <Button variant="contained" fullWidth startIcon={<MagnifyingGlass />}>
              Search
            </Button>
          ) : (
            <Button>
              <StyledIconButton>
                <MagnifyingGlass style={{ color: 'white' }} />
              </StyledIconButton>
            </Button>
          )}
        </Stack>
      </Card>
    </Box>
  );
}

export default Input;
