import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Menu, MenuItem, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { styled } from '@mui/system';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(90deg, #ff6b6b 30%, #ff4081 100%)',
  color: 'white',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
}));

const NavItem = styled(Typography)(({ theme }) => ({
  marginRight: '20px',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '0.9rem',
  fontFamily: 'Arial, sans-serif', 
  '&:hover': {
    color: '#ffeb3b',
    textDecoration: 'underline',
  },
}));

const DropdownWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'relative',
});

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#ff4081',
    color: 'white',
  },
}));

export default function BigBoomAppBar() {
  const [shopAnchor, setShopAnchor] = useState(null);

  const handleShopClick = (event) => setShopAnchor(event.currentTarget);

  const handleClose = () => {
    setShopAnchor(null);
  };

  return (
    <StyledAppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold', color: '#fff', ml: 3, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
        >
          <StorefrontIcon sx={{ mr: 1 }} />
          TrendyEra
        </Typography>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <NavItem>HOME</NavItem>
        </Link>
        <DropdownWrapper onClick={handleShopClick}>
          <NavItem>SHOP </NavItem>
        </DropdownWrapper>

        <Menu open={Boolean(shopAnchor)} anchorEl={shopAnchor} onClose={handleClose}>
          <Link to="/shop" style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledMenuItem onClick={handleClose}>Shop All</StyledMenuItem>
          </Link>
          <Link to="/shop/interior" style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledMenuItem onClick={handleClose}>Interior</StyledMenuItem>
          </Link>
          <Link to="/shop/jewellery" style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledMenuItem onClick={handleClose}>Jewellery</StyledMenuItem>
          </Link>
          <Link to="/shop/men" style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledMenuItem onClick={handleClose}>Men's Collection</StyledMenuItem>
          </Link>
          <Link to="/shop/women" style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledMenuItem onClick={handleClose}>Women's Collection</StyledMenuItem>
          </Link>
          <Link to="/shop/kids" style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledMenuItem onClick={handleClose}>Kids Collection</StyledMenuItem>
          </Link>
          <Link to="/shop/makeup" style={{ textDecoration: 'none', color: 'inherit' }}>
            <StyledMenuItem onClick={handleClose}>Makeup</StyledMenuItem>
          </Link>
        </Menu>
        <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
          <NavItem>BLOG</NavItem>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
          <NavItem>CONTACT</NavItem>
        </Link>
      </Toolbar>
    </StyledAppBar>
  );
}
