import React, { useState } from 'react';
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import { Columns, MapTrifold } from '@phosphor-icons/react';
import useResponsive from "../../hooks/useResponsive";
import Map from "./Map"; 
import { countries } from "../../_mock/map/countries";
import CardView from './CardView';
import { MAPBOX_API } from "../../config";

const baseSettings = {
    mapboxAccessToken: MAPBOX_API,
    width: '100%',
    height: '100%',
    minZoom: 1,
};

const THEMES = {
    outdoors: "mapbox://styles/mapbox/outdoors-v11"
};

const Result = () => {
    const [view, setView] = useState("card");
    const isDesktop = useResponsive("up", "md");
    const [value, setValue] = useState(0);

    const handleChangeTab = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Stack sx={{ px: 3, py: 2 }} spacing={2}>
            <Box>
                <Grid container>
                    <Grid item md={6} xs={12}>
                        <Typography variant="body2" textAlign={{ xs: "center", md: "start" }} sx={{ fontWeight: 600 }}>
                        Additional 100 Search Results Available.
                        </Typography>
                    </Grid>
                    <Grid item container justifyContent={isDesktop ? "flex-end" : "center"} md={6} xs={12}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Chip
                                onClick={() => { setView("map"); }}
                                sx={{ p: 1 }}
                                color="primary"
                                variant={view === "map" ? "filled" : "outlined"}
                                label={<Typography variant="subtitle2">Map View</Typography>}
                                icon={<MapTrifold size={20} weight='bold' />}
                            />
                            <Chip
                                onClick={() => { setView("card"); }}
                                sx={{ p: 1 }}
                                color="primary"
                                variant={view === "card" ? "filled" : "outlined"}
                                label={<Typography variant="subtitle2">Card View</Typography>}
                                icon={<Columns size={20} weight='bold' />}
                            />
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            {view === "map" ? (
                <Box sx={{ width: '100%' }}>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12}>
                            {/* card view */}
                            <CardView view={view} value={value} handleChangeTab={handleChangeTab} />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            {/* map view */}
                            {/* <Map {...baseSettings} data={countries} mapStyle={THEMES.outdoors}/> */}
                            <Map/>
                        </Grid>
                    </Grid>
                </Box>
            ) : (
                <CardView view={view} value={value} handleChangeTab={handleChangeTab} />
            )}
        </Stack>
    );
};

export default Result;
