import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();
  const PRIMARY_MAIN = theme.palette.primary.main;

  // Airbnb logo image URL
  const airbnbLogoUrl = "https://w7.pngwing.com/pngs/100/817/png-transparent-airbnb-logo-travel-social-network-trademark-accommodation-brand-thumbnail.png";

  const airbnbLogo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <img src={airbnbLogoUrl} alt="Airbnb Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
    </Box>
  );

  if (disabledLink) {
    return <>{airbnbLogo}</>;
  }

  return <RouterLink to="/">{airbnbLogo}</RouterLink>;
}
