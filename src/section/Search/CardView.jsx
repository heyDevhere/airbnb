import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, Box } from '@mui/material';
import { CastleTurret, Park, SwimmingPool, TreePalm, Umbrella, Bed , HouseLine} from '@phosphor-icons/react';
import Properties from './Properties';
import Properties2 from './Properties2';
import Properties3 from './Properties3';
import Properties4 from './Properties4';
import Properties5 from './Properties5';

const CardView = (props) => {
  const [activeTab, setActiveTab] = useState(0); // State to track the active tab index

  const handleChangeTab = (event, newValue) => {
    setActiveTab(newValue); // Update the active tab index when tab changes
    if (props.handleChangeTab) {
      props.handleChangeTab(event, newValue);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          onChange={handleChangeTab} // Pass handleChangeTab as the onChange event handler
          value={activeTab} // Use activeTab as the value for the Tabs component
          variant="scrollable"
          scrollButtons="auto"
          allowScrollButtonsMobile
        >
          <Tab label="Villas" icon={<HouseLine size={20} />} />
          <Tab label="Castle" icon={<CastleTurret size={20} />} />
          <Tab label="Beach" icon={<Umbrella size={20} />} />
          <Tab label="Tropical" icon={<TreePalm size={20} />} />
          <Tab label="Rooms" icon={<Bed size={20} />} />
          <Tab label="SwimmingPool" icon={<SwimmingPool size={20} />} />
        </Tabs>
      </Box>
      <CustomTabPanel value={activeTab} index={0}>
        <Properties view={props.view}/>
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={1}>
        <Properties2 view={props.view}/>
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={2}>
        <Properties3 view={props.view}/>
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={3}>
        <Properties view={props.view}/>
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={4}>
        <Properties4 view={props.view}/>
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={5}>
        <Properties5 view={props.view}/>
      </CustomTabPanel>
    </Box>
  );
};

CardView.propTypes = {
  value: PropTypes.number,
  handleChangeTab: PropTypes.func,
  view:PropTypes.string,
};

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default CardView;
