/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';


const SideBar = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ fontSize: "50px" }}>
        <ListItem button onClick={onClose}>
          <ListItemText primary="Owner Login" />
        </ListItem>
        <ListItem button onClick={onClose} >
          <ListItemText primary="Stock" />
        </ListItem>
      </List>
    </Drawer>
  );
};

// Define PropTypes for the Sidebar component
SideBar.propTypes = {
  open: PropTypes.bool.isRequired, // 'open' should be a required boolean
  onClose: PropTypes.func.isRequired, // 'onClose' should be a required function
};

export default SideBar;