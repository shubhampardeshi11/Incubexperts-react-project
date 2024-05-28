import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import "./Form.scss";

function Form() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="title-container">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Typography variant="h6">Developers Registration</Typography>
            <Typography className="main-title">Create Your Account</Typography>
            <Typography variant="body1" className="already-have-account">
              Already have an account?{" "}
              <Typography variant="body1" component="span" className="sign-in">
                Sign In
              </Typography>
            </Typography>

            <Typography variant="body1" className="required-fields">
              All fields are required
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        component="form"
        className="form-container"
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-first-name"
            label="First Name"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              placeholder: "Enter Your First Name",
              disabled: true,
            }}
            className="text-field-container"
          />

          <TextField
            id="outlined-last-name"
            label="Last Name"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              placeholder: "Enter Your Last Name",
              disabled: true,
            }}
            className="text-field-container"
          />
        </div>
        <div>
          <TextField
            id="outlined-email-address"
            label="Email Address"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              placeholder: "Enter Your Email Address",
              disabled: true,
            }}
            className="text-field-container"
          />

          <TextField
            id="outlined-organization"
            label="Organization"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              placeholder: "Enter Your Organization",
              disabled: true,
            }}
            className="text-field-container"
          />
        </div>
        <div>
          <TextField
            id="outlined-website"
            label="Website"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              placeholder: "Enter Your Website",
              disabled: true,
            }}
            className="text-field-container"
          />

          <TextField
            id="outlined-country-region"
            label="Country/Region"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              placeholder: "Enter Your Country/Region",
              disabled: true,
            }}
            className="text-field-container"
          />
        </div>
        <div>
          <TextField
            id="outlined-password"
            label="Password"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              placeholder: "Enter Your Password",
              disabled: true,
            }}
            className="text-field-container"
          />

          <TextField
            id="outlined-confirm-password"
            label="Confirm Password"
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              placeholder: "Enter Your Confirm Password",
              disabled: true,
            }}
            className="text-field-container"
          />
        </div>

        <Button variant="contained" sx={{ mt: 10, backgroundColor: "#52B947" }}>
          Submit
        </Button>
      </Box>
    </>
  );
}

export default Form;
