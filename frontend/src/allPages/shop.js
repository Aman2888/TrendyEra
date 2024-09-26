import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import {
  products,
  interiorDesigns,
  womenShoesDesigns,
  kidsShoesDesigns,
  makeupDesigns,
  jewelryDesigns,
  menShoesDesigns,
  mensCollectionDesigns,
  womensCollectionDesigns
} from '../allPages/data/productData';

const Shop = () => {
  const [open, setOpen] = useState(false);
  const [selectedDesigns, setSelectedDesigns] = useState([]);

  const handleClickOpen = (designs) => {
    setSelectedDesigns(designs);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const designsMap = {
    "Interior": interiorDesigns,
    "Women's Shoes": womenShoesDesigns,
    "Kids' Shoes": kidsShoesDesigns,
    "Makeup Collection": makeupDesigns,
    "Jewelry Collection": jewelryDesigns,
    "Men's Shoes": menShoesDesigns,
    "Men's Collection": mensCollectionDesigns,
    "Women's Collection": womensCollectionDesigns,
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4, mb: 2, fontWeight: 'bold' }}>Shop Our Collections</Typography>
      <Typography>Discover men's, women's, and kids' collections along with jewelry and makeup.</Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card
              sx={{
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
                height="250"
                image={product.image}
                alt={product.title}
                onClick={designsMap[product.title]?.length ? () => handleClickOpen(designsMap[product.title]) : undefined}
                sx={{ cursor: designsMap[product.title]?.length ? 'pointer' : 'default', borderRadius: '8px 8px 0 0' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>{product.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" sx={{ mt: 1 }}>{product.price}</Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/*------------ Dialog For Selected Designs------------ */}
      <Dialog
        maxWidth="lg"
        PaperProps={{
          style: { width: 950 }
        }}
        open={open}
        onClose={handleClose}
        fullWidth
      >
        <DialogTitle>More Designs</DialogTitle>
        <DialogContent sx={{ width: 900 }}>
          <Grid container spacing={2}>
            {selectedDesigns.map((design) => (
              <Grid item xs={12} sm={6} md={4} key={design.id}>
                <Card
                  sx={{
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
                    height="140"
                    image={design.image}
                    alt={design.title}
                    sx={{ borderRadius: '8px 8px 0 0' }}
                  />
                  <CardContent>
                    <Typography variant="h6">{design.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {design.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Shop;
