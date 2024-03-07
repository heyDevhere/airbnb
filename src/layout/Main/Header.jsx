import React from 'react';
import { Stack, Box, Avatar } from '@mui/material';
import Logo from '../../components/Logo';
import Input from './Input';
import {faker} from "@faker-js/faker";

const Header = () => {
  return (
    <Stack spacing={2}>
      <Box sx={{ boxShadow: "0px 2px 4px rgba(0,0,0,0.1)" }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 3, py: 2 }}>
          <Logo />
          <Input />
          <Avatar alt={faker.person.fullName()} src={faker.image.avatar()} />
        </Stack>
      </Box>
    </Stack>
  );
}

export default Header;
