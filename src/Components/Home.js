// Importing necessary dependencies and components from Material-UI and Auth0 libraries
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useAuth0 } from "@auth0/auth0-react";

// Define an array of settings with a single item "Logout"
const settings = ["Logout"];

// Functional component named Home
const Home = (props) => {
  // Destructuring values from the useAuth0 hook
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  // State variables to manage menu anchor elements
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // Event handler for opening navigation menu
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // Event handler for opening user menu
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // Event handler for closing navigation menu
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Event handler for closing user menu
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo icon */}
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            {/* Title */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TODO LIST
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              {/* Menu icon for mobile view */}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* Navigation menu items */}
                {/* This part is currently empty in the code */}
              </Menu>
            </Box>
            {/* Logo icon for mobile view */}
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            {/* Logo title for mobile view */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {/* User status or login message */}
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  fontFamily: "Arial",
                  fontWeight: "800",
                  fontSize: "20px",
                }}
              >
                {isAuthenticated
                  ? "Welcome : " + props.user
                  : "Hello Guest User Please Login"}
              </Box>
            </Box>
            {/* Login/Logout button */}
            <Button
              onClick={() => (isAuthenticated ? logout() : loginWithRedirect())}
              variant="contained"
              sx={{ m: 2 }}
            >
              {isAuthenticated ? "Logout" : "Login"}
            </Button>
            <Box sx={{ flexGrow: 0 }}>
              {/* User avatar and settings menu */}
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={props.picture} />
                </IconButton>
              </Tooltip>
              {/* User settings menu */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  // Mapping over the settings array to create menu items
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

// Export the Home component
export default Home;
