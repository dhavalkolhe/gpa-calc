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
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const [dropdownLabel, setDropdownLabel] = React.useState('Calculators');

    const dropdownClickHandler = (event) => {
        setDropdownLabel(() => event.target.innerText);
        setValue(Number(event.target.id));
    };

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(() => window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ minWidth: '10rem' }}>
            {windowWidth > 600 ? (
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
                            fontSize: '1rem',
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
                                alignSelf: 'center',
                                minWidth: '10rem',
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
                                alignSelf: 'center',
                                minWidth: '10rem',
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
                                alignSelf: 'center',
                                minWidth: '10rem',
                            }}
                        />
                    </Tabs>
                </Box>
            ) : (
                <div class="dropdown calc">
                    <button
                        class="btn btn-secondary dropdown-toggle calc"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        {dropdownLabel}
                    </button>
                    <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                    >
                        <li
                            onClick={dropdownClickHandler}
                            className="dropdown-item"
                            id="0"
                        >
                            Calculate GPA
                        </li>
                        <li
                            onClick={dropdownClickHandler}
                            className="dropdown-item"
                            id="1"
                        >
                            Calculate CGPA
                        </li>
                        <li
                            onClick={dropdownClickHandler}
                            className="dropdown-item"
                            id="2"
                        >
                            FAT Passing Marks
                        </li>
                    </ul>
                </div>
            )}

            <TabPanel value={value} index={0} className="tab-panel">
                <Calculator />
            </TabPanel>
            <TabPanel value={value} index={1} className="tab-panel">
                <Cgpa />
            </TabPanel>
            <TabPanel value={value} index={2} className="tab-panel">
                <FatPassingMarks />
            </TabPanel>
        </Box>
    );
}
