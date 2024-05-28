import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "./GetInTouch.scss";

function GetInTouch() {
  return (
    <Box className="get-in-touch-container" sx={{ textAlign: "center", pb: 5 }}>
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12}>
          <Typography className="get-in-touch">
            Get In Touch
          </Typography>
          <Typography sx={{ mt: 5 }} className="enter-email-text">
            Enter your email and look for a message from CheckAlt.
          </Typography>
          <div>
            <TextField
              id="outlined-search"
              type="search"
              label="Email"
              placeholder="Enter your Email"
              disabled
              InputLabelProps={{
                shrink: true,
              }}
              className="email-input"
              sx={{ mt: 5 }}
            />
          </div>
          <Button variant="contained" sx={{ mt: 5, backgroundColor: "#52B947" }}>
            Contact Me
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GetInTouch;
