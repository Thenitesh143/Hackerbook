import * as React from "react";
import PropTypes from "prop-types";
import {AppBar,Box,CssBaseline,Drawer,IconButton,List,Toolbar,Button,Typography,MenuItemSelect, MenuItem, Select} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import logos from "../assets/logos.jpg";
import { Link } from "react-router-dom";

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
      <Link to="/about"> <Button sx={{ color: "black", fontFamily: "Jost" }}>
                About Us
              </Button>
              </Link>
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
            <Link to='/sales'><MenuItem value={10}>Vulnerablity Assesments</MenuItem></Link>
          <Link to="/corporal"><MenuItem value={20}>Web Application Penitration Testing</MenuItem></Link>
          <Link to="/online"><MenuItem value={30}>API Penitration Testing</MenuItem></Link>
          <Link to="/place"><MenuItem value={30}>Mobile Penitration Testing</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Thick Client Penitration Training</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>DevSecOps</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Vulnerablity Manangement</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>End Point Management</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Functional Testing </MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Automation Testing</MenuItem></Link>
        </Select>
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
                  <p style={{ fontFamily: "Jost", fontSize: "14px" }}>
                    Certifications
                  </p>
                )}
              >
                <Link to='/sales'><MenuItem value={10}>CEH</MenuItem></Link>
          <Link to="/corporal"><MenuItem value={20}>CCSE</MenuItem></Link>
          <Link to="/online"><MenuItem value={30}>CASE JAVA</MenuItem></Link>

       </Select>
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
                  <p style={{ fontFamily: "Jost", fontSize: "14px" }}>
                    Trainings
                  </p>
                )}
              >
                <Link to='/sales'><MenuItem value={10}>Cybersecurity - job Oriented Training</MenuItem></Link>
          <Link to="/corporal"><MenuItem value={20}>Cybersecurity - CEH from EC council</MenuItem></Link>
          <Link to="/online"><MenuItem value={30}>Cybersecurity - CEH + cloud security from EC-COUNCIl</MenuItem></Link>
          <Link to="/place"><MenuItem value={30}>Cybersecurity - Source Code Analyst</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Thick Client Penitration Training</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Cybersecurity Expert</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>SOC Analyst</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Clous Security</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Manual Testing </MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Selanium Automation </MenuItem></Link>
              </Select>
      </List>
      <List>
      </List>
      <List>
        <Button sx={{ color: "black", fontFamily: "Jost" }}>
          <SavedSearchIcon />
        </Button>
      </List>
      <List>
       <Link to='/registernow'> <Button sx={{ color: "white" }}>
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
        </Link>
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
             <Link to='/'> <img src={logos} alt="" style={{ width: "160px" }} /></Link>
            </Typography>
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
             <Link to="/about"> <Button sx={{ color: "black", fontFamily: "Jost" }}>
                About Us
              </Button>
              </Link>

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
                <Link to='/sales'><MenuItem value={10}>Vulnerablity Assesments</MenuItem></Link>
          <Link to="/corporal"><MenuItem value={20}>Web Application Penitration Testing</MenuItem></Link>
          <Link to="/online"><MenuItem value={30}>API Penitration Testing</MenuItem></Link>
          <Link to="/place"><MenuItem value={30}>Mobile Penitration Testing</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Thick Client Penitration Training</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>DevSecOps</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Vulnerablity Manangement</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>End Point Management</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Functional Testing </MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Automation Testing</MenuItem></Link>
              </Select>
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
                    Certifications
                  </p>
                )}
              >
                <Link to='/sales'><MenuItem value={10}>CEH</MenuItem></Link>
          <Link to="/corporal"><MenuItem value={20}>CCSE</MenuItem></Link>
          <Link to="/online"><MenuItem value={30}>CASE JAVA</MenuItem></Link>

              </Select>
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
                    Trainings
                  </p>
                )}
              >
                <Link to='/sales'><MenuItem value={10}>Cybersecurity - job Oriented Training</MenuItem></Link>
          <Link to="/corporal"><MenuItem value={20}>Cybersecurity - CEH from EC council</MenuItem></Link>
          <Link to="/online"><MenuItem value={30}>Cybersecurity - CEH + cloud security from EC-COUNCIl</MenuItem></Link>
          <Link to="/place"><MenuItem value={30}>Cybersecurity - Source Code Analyst</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Thick Client Penitration Training</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Cybersecurity Expert</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>SOC Analyst</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Clous Security</MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Manual Testing </MenuItem></Link>
          <Link to="/carrer"><MenuItem value={30}>Selanium Automation </MenuItem></Link>
              </Select>
              <Button sx={{ color: "black", fontFamily: "Jost" }}>
                <SavedSearchIcon />
              </Button>
              <Button sx={{ color: "white" }}>
              <Link to='/registernow'> <Button sx={{ color: "white" }}>
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
        </Link>
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
