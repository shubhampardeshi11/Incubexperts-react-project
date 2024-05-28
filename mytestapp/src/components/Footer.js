import React from "react";
import { Container, Grid, Typography, IconButton, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./Footer.scss";

const Footer = () => {
  return (
    <Box className="footer">
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} className="footer-links">
            <Typography className="footer-menu">CheckAlt Global Sites</Typography>
            <Typography className="footer-menu">CheckAlt Partner</Typography>
            <Typography className="footer-menu">Privacy Notice</Typography>
            <Typography className="footer-menu">Cookie Preferences</Typography>
            <Typography className="footer-menu">Terms Of Use</Typography>
            <Typography className="footer-menu">Security Teams</Typography>
            <Typography className="footer-menu">Adjust Preferences</Typography>
            <Typography className="footer-menu">CheckAlt Ready</Typography>
          </Grid>
          <Grid item xs={12} className="footer-icons">
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
                <IconButton 
                  href="https://www.linkedin.com" 
                  target="_blank" 
                  className="icon-button"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  className="icon-button"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton 
                  href="https://www.youtube.com" 
                  target="_blank" 
                  className="icon-button"
                  aria-label="YouTube"
                >
                  <YouTubeIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
