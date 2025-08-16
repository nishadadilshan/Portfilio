import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Link } from "react-scroll";
import { useTheme } from "../../context/ThemeContext";
import ThemeToggle from "../ThemeToggle";
import logo from "../../assets/logo.png";

const pages = [
  { name: "Home", to: "intro" },
  { name: "About", to: "about" },
  { name: "Portfolio", to: "works" },
  { name: "Clients", to: "clientsandContact" }
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { isDarkMode } = useTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
      position="sticky"
      sx={{
        backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.95)' : 'rgba(180, 180, 180, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: isDarkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Container maxWidth="xxl">
        <Toolbar disableGutters style={{ marginLeft: 20, marginRight: 20 }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { md: "flex", xs: "none" },
            }}
          >
            <img src={logo} alt="logo-png" style={{ width: 60, height: 50 }} />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
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
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                '& .MuiPaper-root': {
                  backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
                  color: isDarkMode ? '#ffffff' : '#000000',
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  style={{ cursor: "pointer" }}
                >
                  <Link
                    to={page.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <img src={logo} alt="logo-png" style={{ width: 60, height: 50 }} />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link
                key={page.name}
                to={page.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    my: 2,
                    color: isDarkMode ? "white" : "black",
                    display: "block",
                    marginX: 2,
                    ":hover": {
                      color: "#FFD700",
                      paddingBottom: 0.5,
                      borderBottom: 3,
                      borderBottomColor: "#FFD700",
                    },
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: 'center' }}>
            <ThemeToggle />
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="outlined"
                size="small"
                startIcon={<ChatBubbleOutlineIcon />}
                sx={{
                  color: isDarkMode ? "white" : "black",
                  borderRadius: 15,
                  backgroundColor: isDarkMode ? "transparent" : "white",
                  borderColor: isDarkMode ? "white" : "black",
                  "&:hover": {
                    backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                    borderColor: isDarkMode ? "yellow" : "#1976d2",
                  }
                }}
              >
                Contact Me
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: 'center' }}>
            <ThemeToggle />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
