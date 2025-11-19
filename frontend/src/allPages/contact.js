import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Snackbar, Box, Grid, Paper } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setSnackbarMessage('Please fill in all required fields.');
      setOpenSnackbar(true);
      return;
    }

    console.log('Form submitted:', formData);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setSnackbarMessage('Message sent successfully!');
    setOpenSnackbar(true);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold', color: '#ff6b6b', textAlign: 'center' }}>
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, textAlign: 'center' }}>
        Get in touch with our team for any inquiries or support.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 4, borderRadius: '8px' }}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                fullWidth
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Subject"
                name="subject"
                variant="outlined"
                fullWidth
                value={formData.subject}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Message"
                name="message"
                variant="outlined"
                fullWidth
                required
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                sx={{ mb: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mb: 2, bgcolor: '#ff6b6b', '&:hover': { bgcolor: '#ff4c4c' } }}
              >
                Send Message
              </Button>
            </form>

            <Snackbar
              open={openSnackbar}
              autoHideDuration={3000}
              onClose={() => setOpenSnackbar(false)}
              message={snackbarMessage}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 4, borderRadius: '8px' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Contact Details</Typography>
            <Typography variant="body1">📞 Phone: +1 (555) 012-3456</Typography>
            <Typography variant="body1">✉️ Email: contact@yourcompany.com</Typography>
            <Typography variant="body1">🏠 Address: 123 Main Street, Your City, Your Country</Typography>

            {/*---------- Map Integration ----------*/}
            <Box sx={{ mt: 4 }}>
              <Typography variant="h6">Our Location</Typography>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.8327002564644!2d-77.03450078464712!3d38.89767697957013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7c3f2cfa1f7%3A0x49cf7f04ff206865!2s1600%20Amphitheatre%20Parkway%2C%20Mountain%20View%2C%20CA%2094043%2C%20USA!5e0!3m2!1sen!2s!4v1618830245375!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
