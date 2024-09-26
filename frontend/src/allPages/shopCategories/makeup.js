import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button, Box, CircularProgress, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/system';

const Makeup = () => {
  const [makeupData, setMakeupData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartMessage, setCartMessage] = useState(null);
  const [cartError, setCartError] = useState(null);

  useEffect(() => {
    const fetchMakeup = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8000/makeupData');
        setMakeupData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching makeup data:', err);
        setError(`Failed to load makeup data: ${err.message}`);
        setLoading(false);
      }
    };

    fetchMakeup();
  }, []);

  const handleAddToCart = async (item) => {
    try {
      const response = await axios.post('http://localhost:8000/cart', {
        productId: item._id,
        quantity: 1
      });
      if (response.data.success) {
        setCartMessage(`${item.title} has been added to the cart!`);
      } else {
        setCartError('Error adding item to cart.');
      }
    } catch (error) {
      console.error('Detailed error:', error);
      console.error('Response data:', error.response?.data);
      setCartError('Failed to add item to cart.');
    }
  };

  const handleCloseCartMessage = () => {
    setCartMessage(null);
    setCartError(null);
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

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography color="error">{error}</Typography>
      </Container>
    );
  }

  return (
   <>
      {/*---------- Hero Section ----------*/}
      <Box sx={{ position: 'relative', mb: 4 }}>
        <img
          src="https://images.pexels.com/photos/2547541/pexels-photo-2547541.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Makeup Collection"
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
            Explore Our Makeup Collection
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              p: '5px 15px',
              borderRadius: '6px',
            }}
          >
            Discover the latest trends and beauty essentials for your makeup routine.
          </Typography>
        </Box>
      </Box>
 <Container>
      <Grid container spacing={4}>
        {makeupData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
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
                height="300"
                image={item.image || 'https://via.placeholder.com/300x300?text=No+Image'}
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
                
                <AnimatedButton
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddToCart(item)}
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

      <Snackbar open={!!cartMessage} autoHideDuration={3000} onClose={handleCloseCartMessage}>
        <Alert onClose={handleCloseCartMessage} severity="success" sx={{ width: '100%' }}>
          {cartMessage}
        </Alert>
      </Snackbar>

      <Snackbar open={!!cartError} autoHideDuration={3000} onClose={handleCloseCartMessage}>
        <Alert onClose={handleCloseCartMessage} severity="error" sx={{ width: '100%' }}>
          {cartError}
        </Alert>
      </Snackbar>
    </Container>
    </>
  );
};

export default Makeup;