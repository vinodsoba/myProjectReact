import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
// Styles and imports were ommited
const drawerWidth = 240;

const useStyles = withStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 10,
  },
  footer: {
    marginLeft: 20,
    fontSize: 17,
    display: `none`,
  },
}));
function Footer() {
  const classes = withStyles();
  return (
    <BottomNavigation position='fixed' className={classes.BottomNavigation}>
    <Toolbar>
      <IconButton
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='menu'
      >
        <MenuIcon />
      </IconButton>
      <MenuItem>
        <Typography variant='p' className={classes.title}>
          blog
        </Typography>
      </MenuItem>
    
    </Toolbar>
      <Typography variant='h6' className={classes.footer}>
        © Copyright 2019
      </Typography>
    </BottomNavigation>
  );
}

export default Footer;
