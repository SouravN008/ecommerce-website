// ProductsPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, IconButton, makeStyles } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
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
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  iconButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const ProductsPage = ({ products }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {products.map(product => (
        <Card key={product.id} className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={product.imageUrl}
            title={product.name}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Price: ${product.price}
            </Typography>
            <div className={classes.iconButtons}>
              <IconButton color="primary" component={Link} to={`/edit-product/${product.id}`} className={classes.link}>
                <EditIcon />
              </IconButton>
              <IconButton color="secondary">
                <DeleteIcon />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProductsPage;
