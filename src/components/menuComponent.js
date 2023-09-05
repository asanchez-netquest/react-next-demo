import * as React from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

export default function MenuComponent() {
  const router = useRouter();
  const [openPanel, setOpenPanel] = React.useState(false);
  const [openAnalysis, setOpenAnalysis] = React.useState(false);

  const handleClickPanel = () => {
    setOpenPanel(!openPanel);
  };
  const handleClickAnalysis = () => {
    setOpenAnalysis(!openAnalysis);
  };
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" ? "auto" : 250 }}
      variant="permanent"
      role="presentation"
      /**onClick={toggleDrawer(anchor, false)}**/
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <img
          src="/static/images/logo_wakoopa_orange.png"
          alt="wakoopa"
          className="img-fluid"
        />
        <ListItem
          key={"Home"}
          onClick={() => router.push("/home")}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>

        <ListItem key={"Panel Management"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PeopleAltIcon />
            </ListItemIcon>

            <ListItemText primary={"Panel Management"} />
            {openPanel ? (
              <ListItemButton onClick={() => handleClickPanel()}>
                {" "}
                <ExpandLess />
              </ListItemButton>
            ) : (
              <ListItemButton onClick={() => handleClickPanel()}>
                <ExpandMore />
              </ListItemButton>
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={openPanel} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              key={"Profile"}
              onClick={() => router.push("/profile-panel")}
            >
              <ListItemButton>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>
           
          </List>
        </Collapse>

        <ListItem
              key={"Digital Exports"}
              onClick={() => router.push("/digital-exports")}
              disablePadding
            >
        <ListItemButton>
            <ListItemIcon>
              <FileDownloadIcon />
            </ListItemIcon>
            <ListItemText primary={"Digital Exports"} />
          </ListItemButton>
        </ListItem>

        <ListItem key={"Analysis"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <QueryStatsIcon />
            </ListItemIcon>
            <ListItemText primary={"Analysis"} />
            {openAnalysis ? (
              <ListItemButton onClick={() => handleClickAnalysis()}>
                {" "}
                <ExpandLess />
              </ListItemButton>
            ) : (
              <ListItemButton onClick={() => handleClickAnalysis()}>
                <ExpandMore />
              </ListItemButton>
            )}
          </ListItemButton>
        </ListItem>
        <Collapse in={openAnalysis} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              key={"Advance Search"}
              onClick={() => router.push("/advance-search")}
            >
              <ListItemButton>
                <ListItemText primary="Advance Search" />
              </ListItemButton>
            </ListItem>
          </List>

          <List component="div" disablePadding>
            <ListItem
              key={"Visual Report"}
              onClick={() => router.push("/visual-report")}
            >
              <ListItemButton>
                <ListItemText primary="Visual Report" />
              </ListItemButton>
            </ListItem>


            <ListItem
              key={"Rankings"}
              onClick={() => router.push("/rankings")}
            >
              <ListItemButton>
                <ListItemText primary="Rankings" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>

        <Divider />
        <List>
          <ListItem key={"Settings"}
            onClick={() => router.push("/settings")}
          >
            <ListItemButton>
              <ListItemIcon>
                <AdminPanelSettingsIcon />
              </ListItemIcon>
              <ListItemText primary={"Settings"} />
            </ListItemButton>
          </ListItem>
        </List>
      </List>
    </Box>
  );

  return (
    <div>
      {["menu"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            color="dark"
            aria-label=""
          >
            <Fab color="dark" aria-label="add">
              <MenuIcon />
            </Fab>
          </IconButton>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
