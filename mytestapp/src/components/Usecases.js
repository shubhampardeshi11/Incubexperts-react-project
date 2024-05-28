import React from "react";
import { Grid, Typography, Button, Paper, Container } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Usecases.scss";

const Usecases = () => {
  const slides = [
    {
      id: 1,
      content: "Authentication & Registration",
      description:
        "Unified authentication process with a cloud-based identity and access (IAM) offering",
    },
    {
      id: 2,
      content: "Configuration 2",
      description:
        "Learn how to run custom jobs to process transaction objects. Clearingworks offers a Configuration Service for managing system settings through automated jobs.",
    },
    {
      id: 3,
      content: "Get Customer Account",
      description:
        "Use account to interact with API. View account and invoice data through Clearingworks.",
    },
    {
      id: 4,
      content: "Title 4",
      description:
        "Learn how to run custom jobs to process transaction objects. Clearingworks offers a Configuration Service for managing system settings through automated jobs.",
    },
    {
      id: 5,
      content: "Title 5",
      description:
        "Use account to interact with API. View account and invoice data through Clearingworks.",
    },
  ];

  return (
    <Container>
      <Grid container spacing={3} sx={{ mt: 5 }}>
        <Grid item xs={6} md={3}>
          <Typography
            sx={{ mt: 4, mb: 2, pt: 4, fontWeight: 500 }}
            variant="body1"
            color="#3F6AB3"
            align="center"
          >
            Use Cases
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#52B947",
              textTransform: "none",
              marginRight: 1,
            }}
            endIcon={<ArrowForwardIcon />}
          >
            Explore the possibilities
          </Button>
        </Grid>
        <Grid item xs={6} md={9}>
          <Splide
            options={{
              type: "loop",
              perPage: 2,
              perMove: 1,
              gap: "1rem",
              pagination: false,
              arrows: false,
              autoplay: true,
              interval: 2000,
              breakpoints: {
                600: {
                  perPage: 1,
                },
              },
            }}
          >
            {slides.map((slide) => (
              <SplideSlide key={slide.id}>
                <Paper className="splide-paper" sx={{ p: 2 }}>
                  <div>
                    <Typography
                      variant="h6"
                      gutterBottom
                      className="slide-content"
                    >
                      {slide.content}
                    </Typography>
                    <Typography
                      variant="body1"
                      gutterBottom
                      className="slide-description"
                      sx={{
                        mt: 2,
                      }}
                    >
                      {slide.description}
                    </Typography>
                  </div>
                </Paper>
              </SplideSlide>
            ))}
          </Splide>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Usecases;
