import React, { useState } from 'react';
import { Container, Typography, Tabs, Tab, Grid, Card, CardContent, CardMedia, Button, CardActions } from '@mui/material';
import { kidsData } from '../data/productData';
import { styled } from '@mui/system';

const KidsCollection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [cart, setCart] = useState([]); 

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]); 
    alert(`${item.title} has been added to your cart!`); 
  };

  const getFilteredData = () => {
    if (activeTab === 0) return kidsData;
    if (activeTab === 1) return kidsData.filter(item => item.category === 'Clothes');
    if (activeTab === 2) return kidsData.filter(item => item.category === 'Shoes');
    if (activeTab === 3) return kidsData.filter(item => item.category === 'Toys');
  };

  const AnimatedButton = styled(Button)( {
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
    <Container>
      <Typography variant="h4" sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>Kids Collection</Typography>

      {/*---------- Tabs for Categories ----------*/}
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable" 
        scrollButtons="auto"
        sx={{ 
          mb: 4, 
          display: 'flex', 
          justifyContent: 'center', 
          '& .MuiTab-root': { minWidth: '100px' } 
        }} 
      >
        <Tab label="All Categories" />
        <Tab label="Clothes" />
        <Tab label="Shoes" />
        <Tab label="Toys" />
      </Tabs>

      <Grid container spacing={4}>
        {getFilteredData().map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardMedia
                component="img"
                height="300" 
                image={item.image}
                alt={item.title}
                sx={{
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${item.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <AnimatedButton
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddToCart(item)}
                  sx={{
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
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default KidsCollection;
