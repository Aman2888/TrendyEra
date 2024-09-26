import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Grid, Card, CardContent, CardMedia, Button, CircularProgress, Snackbar, Alert } from '@mui/material';

const Jewellery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jewelleryData, setJewelleryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartMessage, setCartMessage] = useState(null); 
  const [cartError, setCartError] = useState(null);  

  useEffect(() => {
    const fetchJewellery = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8000/jewellery');
        setJewelleryData(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching jewellery data:', err);
        setError(`Failed to load jewellery data: ${err.message}`);
        setLoading(false);
      }
    };

    fetchJewellery();
  }, []);

  const filteredJewellery = jewelleryData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <Container>
      <Typography variant="h4" sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>Jewellery</Typography>
      <TextField
        label="Search Jewellery"
        variant="outlined"
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          width: '30%',
          mb: 4,
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          '& .MuiOutlinedInput-root': {
            height: '60px',
            fontSize: '14px',
          },
          '& .MuiInputLabel-root': {
            fontSize: '14px',
          }
        }}
      />
      <Grid container spacing={2}>
        {filteredJewellery.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                position: 'relative',
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
                height="200"
                image={item.image || 'https://via.placeholder.com/200x200?text=No+Image'}
                alt={item.title}
                sx={{ objectFit: 'cover', borderRadius: '8px 8px 0 0' }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>{item.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 8 }}>{item.description}</Typography>
              </CardContent>
              <Button
                onClick={() => handleAddToCart(item)}
                variant="contained"
                color="primary"
                sx={{
                  position: 'absolute',
                  bottom: '15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: '#ff4081',
                  '&:hover': {
                    backgroundColor: '#f50057',
                  },
                  borderRadius: '10px',
                  padding: '8px 16px',
                  textTransform: 'none',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                }}
              >
                Add to Cart
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/*---------- Snackbar for success message ----------*/}
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
  );
};

export default Jewellery;
