// AppBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar as MuiAppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: 'white',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    marginRight: theme.spacing(2),
  },
}));

const AppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MuiAppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              upGrad Eshop
            </Link>
          </Typography>
          <Button color="inherit">
            <Link to="/add-product" className={classes.link}>
              Add Product
            </Link>
          </Button>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
};

export default AppBar;
