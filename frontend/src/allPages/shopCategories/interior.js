import React from 'react';
import { Box, Container, Typography, Grid, Button, Card, CardContent, Avatar } from '@mui/material';
import { Link } from 'react-router-dom'; 
import { styled } from '@mui/system';

const StylishCardSlider = () => {

  const AnimatedButton = styled(Button)({
    backgroundColor: '#ff6b6b',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '20px',
    '&:hover': {
        backgroundColor: '#ff5252',
        transform: 'scale(1.1)',
        transition: 'all 0.3s ease',
    },
    transition: 'all 0.3s ease',
});

  return (
    <>
      {/*--------- Hero Section ----------*/}
      <Box sx={{ position: 'relative' }}>
        <img
          src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Modern Interior"
          style={{
            width: '100%',
            height: 600,
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
            Elevate Your Interior
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
            Discover premium designs for modern living
          </Typography>
          <Link to="/shop"> 
            <AnimatedButton
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#ff4081',
                '&:hover': {
                  backgroundColor: '#f50057',
                },
              }}
            >
              Shop Now
            </AnimatedButton>
          </Link>
        </Box>
      </Box>

      {/*---------- Featured Collection Section ----------*/}
      <Container sx={{ mt: 8 }}>
        <Typography variant="h4" align="center" fontWeight="bold" mb={6}>
          Featured Collections
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
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
              <img
                src="https://images.pexels.com/photos/827518/pexels-photo-827518.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Living Room"
                style={{
                  width: '100%',
                  height: 'auto',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  p: 2,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Living Room Design
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    mt: 2,
                    backgroundColor: '#ff4081',
                    '&:hover': {
                      backgroundColor: '#f50057',
                    },
                  }}
                  onClick={() => window.open('https://www.pexels.com/search/living%20room%20design/', '_blank')}
                >
                  Explore
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
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
              <img
                src="https://images.pexels.com/photos/276567/pexels-photo-276567.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Office Design"
                style={{
                  width: '100%',
                  height: 'auto',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  p: 2,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Office Workspace Design
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    mt: 2,
                    backgroundColor: '#ff4081',
                    '&:hover': {
                      backgroundColor: '#f50057',
                    },
                  }}
                  onClick={() => window.open('https://www.pexels.com/search/office%20design/', '_blank')}
                >
                  Explore
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
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
              <img
                src="https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Bedroom Design"
                style={{
                  width: '100%',
                  height: 'auto',
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  p: 2,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Cozy Bedroom Setup
                </Typography>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    mt: 2,
                    backgroundColor: '#ff4081',
                    '&:hover': {
                      backgroundColor: '#f50057',
                    },
                  }}
                  onClick={() => window.open('https://www.pexels.com/search/bedroom%20design/', '_blank')}
                >
                  Explore
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/*---------- Inspiration Section ----------*/}
      <Container sx={{ mt: 8, mb: 8 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ mb: 4 }}
        >
          Interior Design Inspirations
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            p: 4,
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
          }}
        >
          <Typography variant="h5" sx={{ maxWidth: '800px' }}>
            "Your home should tell the story of who you are, and be a collection
            of what you love." <br />
            <strong>- Nate Berkus</strong>
          </Typography>
        </Box>
      </Container>

      {/*---------- Testimonials Section ----------*/}
      <Container sx={{ mb: 10 }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          sx={{ mb: 6 }}
        >
          What Our Clients Say
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <CardContent>
                <Avatar
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  sx={{ width: 56, height: 56, mb: 2 }}
                />
                <Typography variant="body1" mb={2}>
                  "The furniture and designs transformed my home into a cozy and
                  elegant space!"
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  - John Doe
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <CardContent>
                <Avatar
                  src="https://randomuser.me/api/portraits/women/32.jpg"
                  sx={{ width: 56, height: 56, mb: 2 }}
                />
                <Typography variant="body1" mb={2}>
                  "Every detail was taken care of, and I couldn't be happier with
                  my new office space!"
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  - Jane Smith
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <CardContent>
                <Avatar
                  src="https://randomuser.me/api/portraits/men/33.jpg"
                  sx={{ width: 56, height: 56, mb: 2 }}
                />
                <Typography variant="body1" mb={2}>
                  "I absolutely love my new bedroom design; it feels like a
                  sanctuary!"
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  - Mark Wilson
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default StylishCardSlider;
