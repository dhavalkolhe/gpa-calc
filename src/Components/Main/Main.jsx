import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Calculator from '../Calculators/Calculator';
import Cgpa from '../Calculators/CGPA';
import FatPassingMarks from '../Calculators/FatPassingMarks';
import './Main.css';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="scrollable auto tabs example"
                    // className="tabs-panel"
                    variant="scrollable"
                    scrollButtons="auto"
                    TabIndicatorProps={{ style: { background: '#fff' } }}
                >
                    <Tab
                        className="feature-label"
                        label="Calculate GPA"
                        {...a11yProps(0)}
                    />
                    <Tab
                        className="feature-label"
                        label="Calculate CGPA"
                        {...a11yProps(1)}
                    />
                    <Tab
                        className="feature-label"
                        label="FAT Passing Marks"
                        {...a11yProps(1)}
                    />
                    {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Calculator />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Cgpa />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <FatPassingMarks />
            </TabPanel>
            {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
        </Box>
    );
}
