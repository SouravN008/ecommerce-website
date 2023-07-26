// ManageProductsPage.js

import React, { useState, useEffect } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import ProductsPage from './ProductsPage';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const ManageProductsPage = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products for admin to manage
    axios.get('/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Manage Products
      </Typography>
      <ProductsPage products={products} />
    </div>
  );
};

export default ManageProductsPage;
