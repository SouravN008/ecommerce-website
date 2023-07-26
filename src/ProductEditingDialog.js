// ProductEditingDialog.js

import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  dialog: {
    minWidth: 300,
  },
}));

const ProductEditingDialog = ({ open, handleClose, product, isEdit }) => {
  const classes = useStyles();
  const [name, setName] = useState(product.name || '');
  const [price, setPrice] = useState(product.price || '');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSave = () => {
    const editedProduct = {
      name,
      price,
      // Add other properties as needed
    };
    // Implement logic to add/edit the product using the API
    // You can use the /products and /products/{id} endpoints for this
    if (isEdit) {
      // Edit product logic
    } else {
      // Add product logic
    }
