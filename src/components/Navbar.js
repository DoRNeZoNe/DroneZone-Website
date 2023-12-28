import "../componentCss/nav.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const navigate = useNavigate();
  const handleClickModels = () => {
    navigate("/models");
  };
  const handleClickHome = () => {
    navigate("/");
  };
  const handleClickContact = () => {
    navigate("/contact");
  };
  return (
    <AppBar
      sx={{
        backdropFilter: "blur(12px)",
        backgroundColor: "rgb(31 24 24 / 10%)",
        width: "100%",
        position: "fixed",
        zIndex: 50,
        padding: "11px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              boxShadow: "none",
            }}
          >
            <div>
              <div className=" flex  items-center justify-center lg:relative logo text-5xl  mt-4 mx-9  w-2">
                <span className="logoD">D</span>
                <span className="logoZ">Z</span>
              </div>
            </div>
          </Typography>

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
              sx={{
                display: { xs: "block", md: "none" },
              }}
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
            >
              <div className="  flex flex-col justify-center items-center  text-black w-[120px]  shadow-neutral-600">
                <div
                  className="flex justify-center items-center 
						 hover:cursor-pointer hover:text-emerald-400    "
                  onClick={handleClickHome}
                >
                  Home
                </div>
                <div
                  className="flex justify-center items-center  
						 hover:cursor-pointer hover:text-emerald-400  "
                  onClick={handleClickModels}
                >
                  Models
                </div>
                <div
                  className="flex justify-center items-center  
						 hover:cursor-pointer hover:text-emerald-400  "
                  onClick={handleClickContact}
                >
                  Contact
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="button"
                    className="  hover:cursor-pointer  action_btn hover:border-2 border-[1px] w-[100px]  border-blue-400 "
                  >
                    Call Now
                  </button>
                </div>
              </div>
            </Menu>
          </Box>
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
            <div>
              <div className=" flex  items-center justify-center lg:relative logo text-5xl  mt-4 mx-9  w-2">
                <span className="logoD">D</span>
                <span className="logoZ">Z</span>
              </div>
            </div>
          </Typography>

          <div className="links relative mt-6 mx-auto flex text-xl md:mt-4 md:mx-36">
            <div className="home  text-cyan-50  mx-14 ">
              <div
                onClick={handleClickHome}
                className="hover:cursor-pointer -mt-[13px]  hover:text-2xl  fixed"
              >
                Home
              </div>
            </div>
            <div className="models  text-cyan-50 mx-14 ">
              <div
                onClick={handleClickModels}
                className="hover:cursor-pointer -mt-[13px]  hover:text-2xl  fixed"
              >
                Models
              </div>
            </div>
            <div className="contact  text-cyan-50 mx-14">
              <div
                onClick={handleClickContact}
                className="hover:cursor-pointer -mt-[13px]  hover:text-2xl  fixed"
              >
                Contact
              </div>
            </div>
            <div className="call-now mt-[-23px] right-[53px] fixed">
              <button
                type="button"
                className=" mx-2    mb-[39px] sm:mb-0    call w-[148px]   right-14  whitespace-nowrap hover:border-2   border-blue-400  text-white font-bold py-2 px-4 rounded border-[1px]"
              >
                Call now
              </button>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
