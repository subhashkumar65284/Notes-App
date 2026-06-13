import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import { NavLink } from "react-router-dom";

function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  
  const handleClick = (e) =>{
    console.log(e.target.textContent)
  }

  const DrawerList = (
    <Box sx={{ width: 250}} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Home", "Starred", "Archive", "Bin"].map((text) => {
          let icon;
          if (text === "Home") icon = <HomeIcon />;
          else if (text === "Starred") icon = <LabelImportantIcon />;
          else if (text === "Archive") icon = <ArchiveIcon />;
          else icon = <DeleteIcon />;
          return (
            <ListItem key={text} onClick={handleClick} disablePadding>
              <ListItemButton
                component={NavLink}
                to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                sx={{
                  "&.active": {
                    backgroundColor: "action.selected",
                  },
                }}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ mr: 2}}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}
export default TemporaryDrawer;
