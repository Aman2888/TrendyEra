
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Typography, Grid, Button, Tabs, Tab, Card, CardMedia, CardContent, CardActions, CircularProgress, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/system';

function WomenCollection() {
    const [womenProducts, setWomenProducts] = useState([]);
    const [handbagsProducts, setHandbagsProducts] = useState([]);
    const [shoesProducts, setShoesProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedColors, setSelectedColors] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    const [cartMessage, setCartMessage] = useState(null);
    const [cartError, setCartError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const [womenResponse, handbagsResponse, shoesResponse] = await Promise.all([
                    axios.get('http://localhost:8000/womenProducts'),
                    axios.get('http://localhost:8000/handbagsProducts'),
                    axios.get('http://localhost:8000/shoesProducts')
                ]);
                setWomenProducts(womenResponse.data);
                setHandbagsProducts(handbagsResponse.data);
                setShoesProducts(shoesResponse.data);
                setSelectedColors(womenResponse.data.map(product => product.colors ? product.colors[0] : ''));
                setLoading(false);
            } catch (err) {
                console.error('Error fetching products:', err);
                setError(`Failed to load products: ${err.message}`);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleColorChange = (color, index) => {
        const newSelectedColors = [...selectedColors];
        newSelectedColors[index] = color;
        setSelectedColors(newSelectedColors);
    };

    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };

    const getCurrentProducts = () => {
        if (tabIndex === 0) {
            return womenProducts;
        } else if (tabIndex === 1) {
            return handbagsProducts;
        } else {
            return shoesProducts;
        }
    };

    const currentProducts = getCurrentProducts();

    const addToCart = async (product, selectedColor) => {
        try {
            const response = await axios.post('http://localhost:8000/cart', {
                productId: product._id,
                quantity: 1,
                color: selectedColor || product.colors?.[0] || 'default'
            });
            if (response.data.success) {
                setCartMessage(`${product.title} has been added to your cart!`);
            } else {
                setCartError('Error adding item to cart.');
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
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
        <Container sx={{ mt: 4 }}>
            <Tabs value={tabIndex} onChange={handleTabChange} centered>
                <Tab label="Women Clothes" />
                <Tab label="Hand Bags" />
                <Tab label="Shoes" />
            </Tabs>

            <Grid container spacing={4} sx={{ mt: 2 }}>
                {currentProducts?.map((product, index) => (
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
                                height="300"
                                image={product.colors ? product.image[selectedColors[index]] : product.image}
                                alt={product.title}
                                sx={{
                                    objectFit: 'cover',
                                    borderRadius: '8px 8px 0 0',
                                }}
                            />
                           
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                                    {product.title}
                                </Typography>
                                <Typography variant="body1" sx={{ color: 'green' }}>
                                    {product.price}
                                </Typography>
                            </CardContent>

                            {product.colors && (
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                                    {product.colors.map((color) => (
                                        <Button
                                            key={color}
                                            sx={{
                                                backgroundColor: color,
                                                minWidth: 10,
                                                height: 10,
                                                borderRadius: '50%',
                                                ml: 1,
                                                border: selectedColors[index] === color ? '2px solid black' : 'none'
                                            }}
                                            onClick={() => handleColorChange(color, index)}
                                        />
                                    ))}
                                </Box>
                            )}

                            <CardActions sx={{ justifyContent: 'center' }}>
                                <AnimatedButton
                                    variant="contained"
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
                                    onClick={() => addToCart(product, selectedColors[index])}
                                >
                                    Add to Cart
                                </AnimatedButton>
                            </CardActions>
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
    );
}

export default WomenCollection;