import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, Button, Box } from '@mui/material';
import { mensProduct } from '../data/productData';
import { styled } from '@mui/system';

const MenCollection = () => {
  const handleAddToCart = (item) => {
    console.log('Added to cart:', item);
  };
  const AnimatedButton = styled(Button)({
    backgroundColor: '#ff4081',
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#f50057',
      transform: 'scale(1.1)',
      transition: 'all 0.3s ease',
    },
    transition: 'all 0.3s ease',
  });
  return (
   <>
      {/*---------- Hero Section ----------*/}
      <Box sx={{ position: 'relative', mb: 4 }}>
        <img
          src="https://thumbs.dreamstime.com/b/men-s-clothing-store-interior-view-fashion-shop-hongkong-central-china-asia-51415650.jpg"
          alt="Men's Fashion"
          style={{
            width: '100%',
            height: '60vh',
            objectFit: 'cover',
            filter: 'brightness(75%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '5%',
            transform: 'translateY(-50%)',
            color: 'white',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              p: '10px 20px',
              borderRadius: '8px',
            }}
          >
            Explore Our Men's Collection
          </Typography>
        </Box>
      </Box>
 <Container sx={{mt: 10}}>
      <Grid container spacing={4}>
        {mensProduct.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                '&:hover img': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardMedia
                component="img"
                alt={product.name}
                height="200"
                image={product.image}
                sx={{
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Rating: {product.rating} ★
                </Typography>
                <AnimatedButton
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddToCart(product)}
                  sx={{
                    mt: 2,
                    backgroundColor: '#ff4081',
                    '&:hover': {
                      backgroundColor: '#f50057',
                    },
                    borderRadius: '10px',
                    padding: '5px 10px',
                    textTransform: 'none',
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  Add to Cart
                </AnimatedButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  );
};

export default MenCollection;
