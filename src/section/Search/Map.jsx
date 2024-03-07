import React from 'react';
import { Card, CardContent } from '@mui/material';
import styled from '@emotion/styled'; // Import styled from @emotion/styled

const MapWrapperStyle = styled("div")(({ theme }) => ({
  zIndex: 0,
  height: 560,
  overflow: "hidden", // Missing colon (:) after overflow
  position: "relative",
  borderRadius: theme.shape.borderRadius,
}));

const Map = () => {
  return (
    <Card>
      <CardContent>
        <MapWrapperStyle>
          <iframe
            title="Map"
            width="430"
            height="550"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28787.499161001016!2d-79.38429305577165!3d43.65322517505729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1646800772458!5m2!1sen!2sus"
          ></iframe>
        </MapWrapperStyle>
      </CardContent>
    </Card>
  );
};

export default Map;
