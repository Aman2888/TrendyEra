import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  TextField,
  InputAdornment,
  Button,
  Modal,
  Fade,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { blogPosts, categories, popularArticles } from '../allPages/data/productData';
import { styled } from '@mui/system';

const Blog = () => {
  const [open, setOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpen = (post) => {
    setSelectedPost(post);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPost(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          {filteredPosts.length === 0 ? (
            <Typography variant="h6">No posts found.</Typography>
          ) : (
            filteredPosts.map((post, index) => (
              <Card key={index} sx={{ mb: 4, boxShadow: 'none', borderRadius: 0 }}>
                <Grid container>
                  <Grid item xs={12} sm={4}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.image}
                      alt={post.title}
                      sx={{ borderRadius: 2 }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <CardContent sx={{ pl: { sm: 2 } }}>
                      <Typography variant="h5" component="div" gutterBottom>
                        {post.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {post.date} | {post.category} | {post.comments} Comments
                      </Typography>
                      <Typography variant="body1">
                        {post.excerpt}
                      </Typography>
                      <AnimatedButton
                        variant="contained"
                        onClick={() => handleOpen(post)}
                        sx={{
                          borderRadius: '10px',
                          padding: '5px 10px',
                          textTransform: 'none',
                          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        }}
                      >
                        Read More
                      </AnimatedButton>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            ))
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type a keyword and hit enter"
              value={searchTerm}
              onChange={handleSearchChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Categories
            </Typography>
            {categories?.map((category, index) => (
              <Typography key={index} variant="body1" gutterBottom>
                {category.name} ({category.count})
              </Typography>
            ))}
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom>
              Popular Articles
            </Typography>
            {popularArticles?.map((article, index) => (
              <Box key={index} sx={{ display: 'flex', mb: 2 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 80, height: 80, borderRadius: 1, mr: 2 }}
                  image={article.image}
                  alt={article.title}
                />
                <Box>
                  <Typography variant="subtitle1">{article.title}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {article.date} | {article.author} | {article.comments} Comments
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/*---------- Modal for displaying full post details ----------*/}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={{ bgcolor: 'background.paper', borderRadius: 2, p: 4, mx: 'auto', width: '80%' }}>
            <Typography variant="h4" gutterBottom>
              {selectedPost?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {selectedPost?.date} | {selectedPost?.category} | {selectedPost?.comments} Comments
            </Typography>
            <CardMedia
              component="img"
              height="540"
              image={selectedPost?.image}
              alt={selectedPost?.title}
              sx={{ borderRadius: 2, mb: 2 }}
            />
            <Typography variant="body1">
              {selectedPost?.fullContent}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
};

export default Blog;
