import * as React from "react";
import PropTypes from "prop-types";
import {AppBar,Box,CssBaseline,Drawer,IconButton,List,Toolbar,Button,Typography,MenuItemSelect, MenuItem, Select} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import logos from "../assets/logos.jpg";

const drawerWidth = "100%";

function Navbar({ window }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = (event) => {
    console.log("event", event);

    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        <Button sx={{ color: "black", fontFamily: "Jost" }}>About Us</Button>
      </List>
      <List>
        <Select
          sx={{
            backgroundColor: "white",
            color: "black",

            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: "none",
              },
            "& .MuiSelect-icon": {
              color: "black",
            },
          }}
          displayEmpty
          renderValue={() => (
            <p style={{ fontFamily: "Jost", fontSize: "14px" }}>SERVICES</p>
          )}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </List>
      <List>
        <Button sx={{ color: "black", fontFamily: "Jost" }}>Courses</Button>
      </List>
      <List>
        <Button sx={{ color: "black", fontFamily: "Jost" }}>Internship</Button>
      </List>
      <List>
        <Button sx={{ color: "black", fontFamily: "Jost" }}>Contact Us</Button>
      </List>
      <List>
        <Button sx={{ color: "black", fontFamily: "Jost" }}>About Us</Button>
      </List>
      <List>
        <Button sx={{ color: "black", fontFamily: "Jost" }}>
          <SavedSearchIcon />
        </Button>
      </List>
      <List>
        <Button sx={{ color: "white" }}>
          <Button
            variant="contained"
            sx={{
              background: "#fd4a18",
              padding: "15px",
              fontFamily: "Jost",
            }}
          >
            Register Now
          </Button>
        </Button>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{ background: "white" ,paddingLeft:'40px',paddingRight:'70px',position:'relative'}}
        >
          <Toolbar sx={{ color: "black" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: {},
                color: "black",
              }}
            >
              <img src={logos} alt="" style={{ width: "160px" }} />
            </Typography>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              <Button sx={{ color: "black", fontFamily: "Jost" }}>
                About Us
              </Button>

              <Select
                sx={{
                  backgroundColor: "white",
                  color: "black",

                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      border: "none",
                    },
                  "& .MuiSelect-icon": {
                    color: "black",
                  },
                }}
                displayEmpty
                renderValue={() => (
                  <p style={{ fontFamily: "Jost", fontSize: "14px" }}>
                    SERVICES
                  </p>
                )}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>

              <Button sx={{ color: "black", fontFamily: "Jost" }}>
                Courses
              </Button>
              <Button sx={{ color: "black", fontFamily: "Jost" }}>
                Internship
              </Button>
              <Button sx={{ color: "black", fontFamily: "Jost" }}>
                Contact Us
              </Button>
              <Button sx={{ color: "black", fontFamily: "Jost" }}>
                About Us
              </Button>
              <Button sx={{ color: "black", fontFamily: "Jost" }}>
                <SavedSearchIcon />
              </Button>
              <Button sx={{ color: "white" }}>
                <Button
                  variant="contained"
                  sx={{
                    background: "#fd4a18",
                    padding: "15px",
                    fontFamily: "Jost",
                  }}
                >
                  Register Now
                </Button>
              </Button>
            </Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            anchor="top"
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            PaperProps={{
              style: {
                position: "absolute",
                // adjust this to the desired distance from the top
                transform: `translateY(${mobileOpen ? 0 : "-100%"})`,
                border: "1px",
                borderColor: "",
                width: "100%",
                zIndex: 1000,
              },
            }}
            sx={{
              display: { lg: "none" },
              top: { md: "150px", xs: "100px" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </div>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
