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
      position="fixed"
      sx={{
        backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.95)' : 'rgba(180, 180, 180, 0.95)',
        backdropFilter: 'blur(10px)',
        boxShadow: isDarkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
        zIndex: 9999,
        width: '100%',
        top: 0,
        left: 0,
        right: 0
      }}
    >
      <Container maxWidth="xxl">
        <Toolbar disableGutters style={{ marginLeft: 20, marginRight: 20, minHeight: '64px' }}>
          {/* Desktop Logo */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: 'center'
            }}
          >
            <img src={logo} alt="logo-png" style={{ width: 60, height: 50 }} />
          </Box>
          
          {/* Mobile Layout */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: 'center',
              gap: 1,
              flexGrow: 1
            }}
          >
            {/* Menu Button */}
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ color: isDarkMode ? 'white' : 'black' }}
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
                zIndex: 10000,
                '& .MuiPaper-root': {
                  backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
                  color: isDarkMode ? '#ffffff' : '#000000',
                  minWidth: '200px',
                  maxWidth: '90vw',
                  marginTop: '8px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                },
                '& .MuiMenuItem-root': {
                  padding: '12px 16px',
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: isDarkMode ? '#333333' : '#f5f5f5',
                  }
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
                    style={{ textDecoration: "none", color: "inherit", width: '100%' }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem
                onClick={handleCloseNavMenu}
                style={{ cursor: "pointer" }}
              >
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={{ textDecoration: "none", color: "inherit", width: '100%' }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <ChatBubbleOutlineIcon sx={{ fontSize: 20 }} />
                    <Typography textAlign="center">Contact Me</Typography>
                  </Box>
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          
          {/* Mobile Logo and Theme Toggle */}
          <Box sx={{ 
            display: { xs: "flex", md: "none" }, 
            alignItems: 'center', 
            gap: 1,
            marginLeft: 'auto'
          }}>
            <ThemeToggle />
            <img src={logo} alt="logo-png" style={{ width: 50, height: 40 }} />
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: "none", md: "flex" },
            justifyContent: 'center',
            alignItems: 'center'
          }}>
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
                    fontWeight: 500,
                    fontSize: '1rem',
                    textTransform: 'none',
                    ":hover": {
                      color: "#FFD700",
                      paddingBottom: 0.5,
                      borderBottom: 3,
                      borderBottomColor: "#FFD700",
                      transform: "translateY(-1px)",
                    },
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          {/* Desktop Theme Toggle and Contact Button */}
          <Box sx={{ 
            display: { xs: "none", md: "flex" }, 
            alignItems: 'center',
            gap: 2
          }}>
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
                variant="contained"
                size="small"
                startIcon={<ChatBubbleOutlineIcon />}
                sx={{
                  color: isDarkMode ? "rgb(30, 30, 30)" : "white",
                  borderRadius: 15,
                  backgroundColor: isDarkMode ? "white" : "rgb(30, 30, 30)",
                  border: "none",
                  padding: "8px 20px",
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "0.875rem",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: isDarkMode ? "#f0f0f0" : "rgb(50, 50, 50)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  }
                }}
              >
                Contact Me
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
