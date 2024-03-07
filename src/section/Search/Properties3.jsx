import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { Box, Grid, Card, CardMedia, Chip, IconButton, CardContent, Typography, Stack, Divider } from '@mui/material';
import { Star, FavoriteBorder } from '@mui/icons-material';
import { useTheme, alpha } from '@mui/material';
import { Bathtub, MapPin } from '@phosphor-icons/react';
import { Bed } from 'phosphor-react';

const images = [
  "https://hips.hearstapps.com/hmg-prod/images/cayman-islands-villa-kempa-kai-2020-021-1616076929.jpg",
  "https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://deartravallure.com/wp-content/uploads/2020/03/villa-4220677_1920-1440x809.jpg",
  "https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg",
  "https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg",
  "https://www.engelvoelkers.com/images/8e1d5576-e715-46a1-8927-e53cf2c37281/  modern-villa-in-an-exclusive-development-in-mijas",
  "https://amazingarchitecture.com/storage/711/Deep-Villa-Atrey-and-Associates-New-Delhi-ndia-Amazing-Architecture-House.jpg",
  "https://homes-and-villas.marriott.com/hvmb-pictures/40311112/638324213186183413.jpg",
  "https://homes-and-villas.marriott.com/hvmb-pictures/40311112/638324213186183413.jpg",
];

const Properties = ({ view }) => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        {
          [...Array(9)].map((enf, index) => (
            <Grid key={index} xs={12} md={view === "map" ? 12 : 6} item>
              <Card>
                <Box sx={{ position: "relative" }}>
                  <CardMedia sx={{ height: 320 }} title="villa" image={images[index]} />
                  <Chip
                    sx={{
                      position: 'absolute',
                      top: 10,
                      left: 10,
                      color: theme.palette.common.white,
                      bgcolor: alpha(theme.palette.common.black, 0.4)
                    }}
                    icon={<Star style={{ color: theme.palette.warning.dark }} />}
                    label={4.5}
                  />
                  <IconButton
                    sx={{
                      position: 'absolute',
                      top: 10,
                      right: 10
                    }}
                  >
                    <FavoriteBorder style={{ color: theme.palette.error.main }} />
                  </IconButton>
                </Box>
                <CardContent>
                  <Stack spacing={1}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                      <Typography variant="subtitle2" sx={{
                        fontWeight: 600,
                        fontSize: 16,
                        color: "text.secondary"
                      }}>
                        Place to stay
                      </Typography>
                      <Stack direction="row" spacing={0.5} alignItems="center">
                        <Typography variant="subtitle1" sx={{
                          fontWeight: 500,
                          fontSize: 18,
                          color: "text.secondary",
                          textDecoration: "line-through"
                        }}>
                          $80
                        </Typography>
                        <Stack direction="row" alignItems="center">
                          <Typography variant="subtitle2" sx={{
                            fontSize: 18,
                            color: "text.secondary"
                          }}>$67</Typography>
                          <Typography>/Night</Typography>
                        </Stack>
                        <Divider orientation="vertical" sx={{ height: 20 }} />
                        <Typography variant="subtitle1">$111 total</Typography>
                      </Stack>
                    </Stack>
                    <Stack spacing={1} direction="row" alignItems="center">
                      <MapPin weight="bold" />
                      <Typography variant='subtitle2'>Toronto, Canada</Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Bed size={20}
                          weight="bold"
                          style={{
                            color: theme.palette.grey[600],
                          }}
                        />
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                          6 Beds
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Divider orientation="vertical" sx={{ height: 15 }} />
                        <Bathtub size={20}
                          weight="bold"
                          style={{
                            color: theme.palette.grey[600],
                          }}
                        />
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                          1 Bath
                        </Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} alignItems="center">
                        <Divider orientation="vertical" sx={{ height: 15 }} />
                        <Bed size={20}
                          weight="bold"
                          style={{
                            color: theme.palette.grey[600],
                          }}
                        />
                        <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
                          3 BedRoom
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
}

// Define prop types for the Properties component
Properties.propTypes = {
  view: PropTypes.oneOf(['map', 'card']).isRequired // Ensure that the 'view' prop is either 'map' or 'card'
};

export default Properties;
