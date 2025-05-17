import React, { useState } from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import logo from "/Logo.png";

function Navbarx() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const menuItems = ["Problem & Solution", "Industries We Serve", "How It Works", "Testimonials","FAQs"];

  return (
    <div className=" mx-5  mt-10">
      <AppBar
        className="r"
        position="static"
        sx={{
          backgroundColor: "#C9E5EF",
          color: "black",
          maxWidth: "1400px",
          marginX: "auto",
          borderRadius:"25px",
          
          
        }}
      >
        <Toolbar>
          {isMobile ? (
            <div className="flex justify-between w-full items-center">
              <div>
                <img src={logo} alt="Logo" className="w-1/2" />
              </div>
              <div>
                <IconButton color="inherit" onClick={() => setOpen(true)}>
                  <MenuIcon />
                </IconButton>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ flexGrow: 1 }}>
                <img src={logo} alt="Logo" className="text-[#0FF1F6] w-2/3" />
              </Typography>
              <div className="flex gap-6 lg:gap-36 md:gap-6">
                <div className="flex flex-wrap">
                  {menuItems.map((item) => (
                    <div>
                      <Button color="inherit" key={item}>
                        {item}
                      </Button>
                    </div>
                  ))}
                </div>
                <Typography>
                  <div className="flex gap-2">
                    <div>
                      <Button
                        variant="outlined"
                        sx={{
                          backgroundColor: "#059DBE",
                          color: "white",
                          borderRadius: "45px",
                          margin:"5px",
                          "&:hover": {
                            backgroundColor: "white",
                            border: "1px solid white",
                            color: "black",
                          },
                        }}
                      >
                        <span className="text-xs lg:text-sm ">Get Started Today</span>
                      </Button>
                    </div>
                  </div>
                </Typography>
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List
          sx={{
            backgroundColor: "#C9E5EF",
            color: "black",
            backgroundImage: "url(bg.svg)",
            height:"100vh"
          }}
        >
          <ListItem>
            <img src={logo} alt="Logo" />
          </ListItem>
        
            <hr />
        
          {menuItems.map((item) => (
            <ListItem key={item} onClick={() => setOpen(false)}>
              <ListItemButton>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
          <div className="flex-col">
            <ListItem>
              <Button
                variant="outlined"
                sx={{
                          backgroundColor: "#059DBE",
                          color: "white",
                          borderRadius: "45px",
                          "&:hover": {
                            backgroundColor: "white",
                            border: "1px solid white",
                            color: "black",
                          },
                        }}
                      >
                        Get Started Today
              </Button>
            </ListItem>
          </div>
          <ListItem onClick={() => setOpen(false)}></ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Navbarx;