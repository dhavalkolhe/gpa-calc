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
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    borderRadius: '2rem',
                }}
            >
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="scrollable auto tabs example"
                    // className="tabs-panel"
                    variant="scrollable"
                    scrollButtons="auto"
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: '#2FCFB3',
                            height: '100%',
                            borderRadius: '2rem',
                            zIndex: '1',
                        },
                    }}
                    sx={{
                        background: 'rgba(47,207,179,0.3)',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'space-around',
                        borderRadius: '2rem',
                    }}
                >
                    <Tab
                        className="feature-label"
                        label="Calculate GPA"
                        {...a11yProps(0)}
                        sx={{
                            borderRadius: '2rem',
                            flex: '1',
                            zIndex: '10',
                            color: '#000',
                            fontWeight: 'bold',
                        }}
                    />
                    <Tab
                        className="feature-label"
                        label="Calculate CGPA"
                        {...a11yProps(1)}
                        sx={{
                            marginLeft: 'auto',
                            borderRadius: '2rem',
                            flex: '1',
                            zIndex: '10',
                            color: '#000',
                            fontWeight: 'bold',
                        }}
                    />
                    <Tab
                        className="feature-label"
                        label="FAT Passing Marks"
                        {...a11yProps(1)}
                        sx={{
                            marginLeft: 'auto',
                            borderRadius: '2rem',
                            flex: '1',
                            zIndex: '10',
                            color: '#000',
                            fontWeight: 'bold',
                        }}
                    />
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
        </Box>
    );
}
