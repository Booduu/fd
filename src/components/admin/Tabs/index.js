import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rows from './Rows';
import { connect } from 'react-redux';
import { 
  deleteLiveItem, 
  deleteAlbum, 
  getListProducts, 
  deleteProduct,
  getLives, 
  getAlbums, 
} from '../../../store/actions';

import style from './Tabs.module.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const ScrollableTabsButtonAuto = ({
  getLives,
  lives,
  deleteLiveItem,
  getAlbums,
  albums,
  deleteAlbum,
  getListProducts,
  deleteProduct,
  products,
}) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    getLives();
    getAlbums();
    getListProducts();
  }, []);

  return (
    <div className={style.container}>
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="shows" {...a11yProps(0)} />
            <Tab label="disco" {...a11yProps(1)} />
            <Tab label="shop" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Rows 
            data={lives} 
            deleteLiveItem={deleteLiveItem}
            name="shows"
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Rows 
            data={albums} 
            deleteAlbumItem={deleteAlbum}
            name="disco"
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Rows 
            data={products} 
            deleteProductItem={deleteProduct}
            name="shop"
          />
        </TabPanel>
      </div>
    </div>
  );
}

export default connect(state => ({
  lives: state.apiDataReducer.lives,
  albums: state.apiDataReducer.albums,
  products: state.apiDataReducer.products,
}), {
  getLives,
  deleteLiveItem,
  getAlbums,
  deleteAlbum,
  getListProducts,
  deleteProduct,
})(ScrollableTabsButtonAuto);