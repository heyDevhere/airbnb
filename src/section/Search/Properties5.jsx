import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import { Box, Grid, Card, CardMedia, Chip, IconButton, CardContent, Typography, Stack, Divider } from '@mui/material';
import { Star, FavoriteBorder } from '@mui/icons-material';
import { useTheme, alpha } from '@mui/material';
import { Bathtub, MapPin } from '@phosphor-icons/react';
import { Bed } from 'phosphor-react';

const images = [
  "https://st.hzcdn.com/simgs/pictures/pools/beverly-ddla-design-landscape-architecture-img~352107440d90dc06_14-1682-1-1907823.jpg",
  "https://t3.ftcdn.net/jpg/02/80/11/26/240_F_280112608_32mLVErazmuz6OLyrz2dK4MgBULBUCSO.jpg",
  "https://st.hzcdn.com/simgs/pictures/pools/beverly-ddla-design-landscape-architecture-img~352107440d90dc06_14-1682-1-1907823.jpg",
  "https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg",
  "https://img.vistarooms.com/gallery/vista-sadh-villa-c227d4.jpg",
  "https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4=",
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
