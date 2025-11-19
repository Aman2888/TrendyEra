import React from 'react';
import { Container, Typography, Button, Box, Grid, Card, CardContent, CardMedia, TextField } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { styled } from '@mui/system';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

import { specialProducts, brands } from './data/productData';

const images = [
  {
    src: 'https://images.pexels.com/photos/5531540/pexels-photo-5531540.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Fashion Collection 2024',
    text: 'Discover the Latest Trends',
  },
  {
    src: 'https://images.pexels.com/photos/3641056/pexels-photo-3641056.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Exclusive Jewelry',
    text: 'Shine with Our Exclusive Jewelry',
  },
  {
    src: 'https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Men\'s Collection',
    text: 'Upgrade Your Wardrobe',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const features = [
  {
    icon: <LocalShippingIcon sx={{ fontSize: 50 }} />,
    title: 'FREE SHIPPING',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  },
  {
    icon: <AttachMoneyIcon sx={{ fontSize: 50 }} />,
    title: '30 DAYS MONEY BACK',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  },
  {
    icon: <HeadsetMicIcon sx={{ fontSize: 50 }} />,
    title: '24/7 HELP CENTER',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  },
  {
    icon: <CardGiftcardIcon sx={{ fontSize: 50 }} />,
    title: 'GIFT PROMOTION',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  },
];

const StyledSlider = styled(Slider)({
  '.slick-prev, .slick-next': {
    zIndex: 1,
    color: '#ff6b6b',
  },
  '.slick-dots li button:before': {
    color: '#ff6b6b',
  },
});

const SlideWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '600px',
  overflow: 'hidden',
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
}));

const SlideImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const TextOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '10%',
  transform: 'translateY(-50%)',
  color: 'white',
  textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
  maxWidth: '400px',
}));

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

const Home = () => {
  return (
    <>
      <StyledSlider {...sliderSettings}>
        {images.map((image, index) => (
          <SlideWrapper key={index}>
            <SlideImage src={image.src} alt={image.alt} />
            <TextOverlay>
              <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                {image.text}
              </Typography>
            </TextOverlay>
          </SlideWrapper>
        ))}
      </StyledSlider>

      <Container sx={{ mt: 4 }}>
        {/*----------  Popular Brands Section ----------*/}
        <Grid container spacing={2} sx={{ mt: 8 }} justifyContent="center">
          {brands.map((brand, index) => (
            <Grid item xs={6} sm={4} md={3} key={index}>
              <Box sx={{ textAlign: 'center' }}>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  style={{ width: '100px', height: 'auto', marginBottom: '10px' }}
                />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {brand.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/*---------- Special Products Section ----------*/}
        <Typography variant="h4" sx={{ mt: 7, mb: 2 }}>
          Special Products
        </Typography>
        <Grid container spacing={2}>
          {specialProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card sx={{
                position: 'relative',
                borderRadius: '15px', 
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}>
                <Box sx={{
                  position: 'absolute',
                  top: 10,
                  left: 10,
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  padding: '2px 8px',
                  borderRadius: '5px',
                }}>
                  {product.discount}
                </Box>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }} 
                />
                <CardContent>
                  <Typography variant="body1" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="h6" sx={{ color: '#ff6b6b', fontWeight: 'bold' }}>
                    {product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Features Section */}
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={4} justifyContent="center">
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index} sx={{ textAlign: 'center' }}>
                <Card sx={{ padding: 2, boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
                  {feature.icon}
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>
                    {feature.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        
      </Container>
      {/*--------------------- Footer------------------- */}

      <Grid container spacing={4} sx={{ mt: 10, backgroundColor: '#333', color: 'white', padding: '20px 0' }}>
          {/* Shop Section */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              SHOP
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>New Arrivals</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Sale & Special Offer</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Best Sellers</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              FOLLOW US
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <FacebookIcon sx={{ color: 'white', fontSize: 30 }} />
              <TwitterIcon sx={{ color: 'white', fontSize: 30 }} />
              <PinterestIcon sx={{ color: 'white', fontSize: 30 }} />
              <InstagramIcon sx={{ color: 'white', fontSize: 30 }} />
              <YouTubeIcon sx={{ color: 'white', fontSize: 30 }} />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              CONTACT
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Email: support@example.com</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Phone: +1 234 567 890</Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>Address: 123 Fashion St, NY</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              SUBSCRIBE
            </Typography>
            <TextField variant="outlined" label="Email" fullWidth sx={{ mb: 1 }} />
            <AnimatedButton variant="contained" fullWidth>Subscribe</AnimatedButton>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', padding: '10px', backgroundColor: '#222' }}>
          <Typography variant="body2" sx={{ color: 'white' }}>
            © 2024 Trendy Era. All rights reserved.
          </Typography>
        </Box>
    </>
  );
};

export default Home;
