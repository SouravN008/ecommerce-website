import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, ToggleButton, ToggleButtonGroup, makeStyles } from '@material-ui/core';
import axios from 'axios';

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
  toggleButtons: {
    justifyContent: 'center',
    marginBottom: theme.spacing(2),
  },
}));

const ProductsPage = () => {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with your login status logic
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sorting, setSorting] = useState('Default');

  useEffect(() => {
    // Fetch categories
    axios.get('/products/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });

    // Fetch all products
    axios.get('/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // Filter products by selected category
  const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;

  // Sort products based on selected sorting option
  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    if (sorting === 'Price high to low') {
      return b.price - a.price;
    } else if (sorting === 'Price low to high') {
      return a.price - b.price;
    } else if (sorting === 'Newest') {
      return new Date(b.createdAt) - new Date(a.createdAt);
    } else {
      return 0;
    }
  });

  if (!isLoggedIn) {
    // Redirect to login page if the user is not logged in
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <ToggleButtonGroup className={classes.toggleButtons} value={selectedCategory} onChange={(event, newCategory) => setSelectedCategory(newCategory)}>
        <ToggleButton value={null}>All</ToggleButton>
        {categories.map(category => (
          <ToggleButton key={category} value={category}>{category}</ToggleButton>
        ))}
      </ToggleButtonGroup>

      <div className={classes.root}>
        {sortedProducts.map(product => (
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
