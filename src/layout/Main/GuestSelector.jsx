import React, { useState } from 'react';
import { TextField, Typography, Popover, Stack, IconButton, Divider } from '@mui/material';
import { PlusCircle, MinusCircle } from '@phosphor-icons/react';

const GuestSelector = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [guests, setGuests] = useState({
        adults: 2,
        pets: 1,
        children: 1,
        Boomers: 1,
    });

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleGuestChange = (type, value) => {
        setGuests((prevGuests) => ({
            ...prevGuests,
            [type]: Math.max(0, prevGuests[type] + value),
        }))
    }

    const displayGuests = `${guests.adults} Adults, ${guests.pets} Pets, ${guests.children} Children
    ${guests.Boomers} Boomers`;

    return (
        <div>
            <TextField
                onClick={handleClick}
                fullWidth
                value={displayGuests}
                placeholder="Enter guest details"
                variant="standard"
                InputProps={{
                    disableUnderline: true,
                    readOnly: true
                }}
            />
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
            >
                <Stack spacing={2} sx={{ px: 4, py: 2 }}>
                    <Stack spacing={2}>
                        <Stack sx={{ width: 300 }} direction="row" alignItems="center" justifyContent="space-between">
                            <Stack spacing={0.5}>
                                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>Adults</Typography>
                                <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>Age 13 or above</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <IconButton color="primary" onClick={() => handleGuestChange("adults", -1)} disabled={guests.adults === 0}>
                                    <MinusCircle />
                                </IconButton>
                                <TextField disabled value={guests.adults} type="number" style={{ width: '40px', textAlign: 'center' }} />
                                <IconButton color="primary" onClick={() => handleGuestChange("adults", 1)} disabled={guests.adults === 0}>
                                    <PlusCircle />
                                </IconButton>

                            </Stack>

                        </Stack>
                        <Divider />
                        <Stack sx={{ width: 300 }} direction="row" alignItems="center" justifyContent="space-between">
                            <Stack spacing={0.5}>
                                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>Pets</Typography>
                                <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}></Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <IconButton color="primary" onClick={() => handleGuestChange("pets", -1)} disabled={guests.pets === 0}>
                                    <MinusCircle />
                                </IconButton>
                                <TextField disabled value={guests.pets} type="number" style={{ width: '40px', textAlign: 'center' }} />
                                <IconButton color="primary" onClick={() => handleGuestChange("pets", 1)}>
                                    <PlusCircle />
                                </IconButton>

                            </Stack>

                        </Stack>
                        <Divider />
                        <Stack sx={{ width: 300 }} direction="row" alignItems="center" justifyContent="space-between">
                            <Stack spacing={0.5}>
                                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>Children</Typography>
                                <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}>Age 1-12</Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <IconButton color="primary" onClick={() => handleGuestChange("children", -1)} disabled={guests.children === 0}>
                                    <MinusCircle />
                                </IconButton>
                                <TextField disabled value={guests.children} type="number" style={{ width: '40px', textAlign: 'center' }} />
                                <IconButton color="primary" onClick={() => handleGuestChange("children", 1)} disabled={guests.children === 0}>
                                    <PlusCircle />
                                </IconButton>

                            </Stack>

                        </Stack>
                        <Divider />
                        <Stack sx={{ width: 300 }} direction="row" alignItems="center" justifyContent="space-between">
                            <Stack spacing={0.5}>
                                <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>Boomers</Typography>
                                <Typography variant="caption" sx={{ fontWeight: 600, color: "text.secondary" }}></Typography>
                            </Stack>
                            <Stack direction="row" alignItems="center" spacing={1}>
                                <IconButton color="primary" onClick={() => handleGuestChange("Boomers", -1)} disabled={guests.Boomers === 0}>
                                    <MinusCircle />
                                </IconButton>
                                <TextField disabled value={guests.Boomers} type="number" style={{ width: '40px', textAlign: 'center' }} />
                                <IconButton color="primary" onClick={() => handleGuestChange("Boomers", 1)} disabled={guests.Boomers === 0}>
                                    <PlusCircle />
                                </IconButton>

                            </Stack>

                        </Stack>
                        <Divider />
                    </Stack>
                    <Typography variant="caption" sx={{fontWeight:580}}>
                        {displayGuests}
                    </Typography>
                </Stack>
            </Popover>
        </div>
    );
}

export default GuestSelector;
