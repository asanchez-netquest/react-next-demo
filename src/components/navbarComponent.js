import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { useRouter } from "next/router";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Rating from "@mui/material/Rating";
import ScrollToTop from "react-scroll-to-top";
import AccountCircle from "@mui/icons-material/AccountCircle";
import FeedbackIcon from "@mui/icons-material/Feedback";
import MoreIcon from "@mui/icons-material/MoreVert";
import MenuComponent from "./menuComponent";
import { Divider } from "@mui/material";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import LogoutIcon from "@mui/icons-material/Logout";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function NavbarComponent(props) {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => router.push("/my-profile")}>
        <ManageAccountsIcon /> My Profile
      </MenuItem>

      <Divider />
      <MenuItem onClick={() => router.push("/login")}>
        <LogoutIcon /> Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <button class="button is-rounded is-light" onClick={handleModalOpen}>
          <FeedbackIcon />
          Feedback
        </button>
      </MenuItem>

      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <MenuComponent />
            &nbsp; 
            <ManageAccountsIcon />
            &nbsp; 
            <div class="select is-rounded is-primary">
              <select>
                <option>Select Client</option>
                <option>Client 1</option>
                <option>Client 2</option>
                <option>Client 3</option>
                <option>Client 4</option>
                <option>Client 5</option>
              </select>
            </div>
            <small> &nbsp; * filter only available for administrators</small>
            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <button
                class="button is-rounded is-light"
                onClick={handleModalOpen}
              >
                <FeedbackIcon />
                Feedback
              </button>

              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <ScrollToTop smooth />

      {/* MODAL */}
      <div class={modalOpen ? "modal is-active" : "modal"}>
        <div class="modal-background"></div>
        <div class="modal-content">
          <div class="card">
            <div class="card-content">
              <div class="content">
                <center>
                  <h2>FEEDBACK</h2>
                </center>
                <center>
                  <small>Please, rate our service</small>
                  <br />
                  <Rating name="no-value" value={null} />
                </center>

                <div class="control">
                  <textarea class="textarea" placeholder="Feedback"></textarea>
                </div>
                <br />
                <center>
                  <button
                    class="button is-primary is-rounded"
                    onClick={handleModalOpen}
                  >
                    Submit
                  </button>
                </center>
                <button
                  class="modal-close is-large"
                  aria-label="close"
                  onClick={handleModalOpen}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
