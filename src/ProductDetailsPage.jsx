import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, TextField, Button, makeStyles } from '@material-ui/core';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
  },
  card: {
    width: 300,
    margin: theme.spacing(1),
  },
  cardContent: {
    paddingBottom: theme.spacing(1),
  },
  cardMedia: {
    height: 150,
  },
  quantityInput: {
    marginTop: theme.spacing(2),
  },
  buyButton: {
    marginTop: theme.spacing(2),
  },
}));

const ProductDetailsPage = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fetch product details using the provided API endpoint
    axios.get(`/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleBuyButtonClick = () => {
    // Implement the buy functionality here using the product details and quantity
    console.log('Product purchased:', product, 'Quantity:', quantity);
  };

  if (!product) {
    return <Typography variant="body1">Loading...</Typography>;
  }

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={product.imageUrl}
          title={product.name}
          alt={product.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: ${product.price}
          </Typography>
          <TextField
            className={classes.quantityInput}
            label="Quantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            InputProps={{ inputProps: { min: 1 } }}
          />
          <Button
            className={classes.buyButton}
            variant="contained"
            color="primary"
            onClick={handleBuyButtonClick}
          >
            Buy
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetailsPage;
