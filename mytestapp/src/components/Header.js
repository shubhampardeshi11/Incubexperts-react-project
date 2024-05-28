import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Container from "@mui/material/Container";
import "./Header.scss";
import Rectangle116 from "../images/Rectangle 116.png";

const drawerWidth = 240;
const navItems = [
  "Products",
  "Resources",
  "Guides",
  "Community",
  "About",
  "Contact",
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} className="DrawerBox">
      <Typography variant="h6" className="DrawerLogo">
        Your Logo Here
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton className="DrawerNavItem">
              <ListItemText className="ListItemText" primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <IconButton size="large" aria-label="search" className="SearchIcon">
        <SearchIcon />
      </IconButton>
      <Button variant="contained" className="SignInButton">
        Sign In
      </Button>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" className="AppBar">
        <Toolbar className="Toolbar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="div" className="Logo">
            Your Logo Here
          </Typography>
          <Box className="NavItems">
            {navItems.map((item) => (
              <Button key={item} className="NavItem" sx={{ color: "#233E76" }}>
                {item}
              </Button>
            ))}
            <IconButton size="large" aria-label="search" className="SearchIcon">
              <SearchIcon />
            </IconButton>
            <Button
              variant="contained"
              color="success"
              className="SignInButton"
            >
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Container>
        <Box component="main" className="MainContent">
          <Toolbar />
          <BasicGrid />
          <Typography sx={{ mt: { xs: 0, md: 20 } }}>
            Financial institutions and businesses need a partner with the
            technology, talent and imagination to provide solutions across the
            payments spectrum. From processing paper checks, which are still a
            mainstay of the payment ecosystem, to providing software and APIs,
            CheckAlt manages complex payment flows – so you can focus on what
            matters.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function BasicGrid() {
  return (
    <Box className="BasicGrid">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4">Welcome Developers!</Typography>
          <Typography sx={{ mt: 5 }} variant="h1">
            Developer Portal
          </Typography>
          <Typography variant="h6">
            Payment, Lockbox and Treasury Solutions
          </Typography>
          <Typography
            className="StartHereText"
            color="initial"
            sx={{ mt: 3, mb: 2 }}
          >
            Start Here
          </Typography>
          <ButtonGroup
            className="primaryButtonGroup"
            variant="contained"
            
            aria-label=""
          >
            <Button
              className="primaryButton"
              sx={{ mr: 2 }}
              endIcon={<ArrowForwardIcon />}
            >
              Create Your Account{" "}
            </Button>
            <Button className="primaryButton" endIcon={<ArrowForwardIcon />}>
              Developer Guide
            </Button>
          </ButtonGroup>

          <Typography className="StartHereText" variant="body1" color="initial" sx={{ my: 3}}>
            Directly to API
          </Typography>

          <ButtonGroup
            variant="contained"
            
            aria-label="button group"
            className="APIButtonGroup"
          >
            <Button
              href=""
              className="APIButton"
              endIcon={<ArrowForwardIcon />}
            >
              View Documentation
            </Button>

            <Button className="APIButton" endIcon={<ArrowForwardIcon />}>
              <Box
                component="span"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  component="span"
                  sx={{ textDecoration: "underline" }}
                >
                  D
                </Typography>
                <Typography component="span">ownload</Typography>
              </Box>
              <Typography component="span" sx={{ ml: 1 }}>
                Postman Collection
              </Typography>
            </Button>
          </ButtonGroup>
        </Grid>

        <Grid item xs={12} md={6}>
          <Item className="ImageContainer">
            <img
              src={Rectangle116}
              alt="placeholder"
              style={{ width: "100%", height: "auto" }}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
