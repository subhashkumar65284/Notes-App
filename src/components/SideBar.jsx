import {v4 as uuid} from 'uuid'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import {NavLink} from 'react-router-dom'

const SideBar = ({pages}) => {

  const handleClick = (e) =>{
    console.log(e.target.textContent)
  }
  
    return (
        <>
        <Box id="route-Container" sx={{ width: 256, height: '100%', bgcolor: '#CEE0CE', position: 'fixed', left: 0, top: '64px', zIndex: 5, display: { xs: 'none', md: 'block' } }}>
            <List>
        {pages.map((text) => {
          let icon;
          if(text==="Home") icon = <HomeIcon/>;
          else if(text==="Starred") icon = <LabelImportantIcon/>;
          else if(text==="Archive") icon = <ArchiveIcon/>
          else icon = <DeleteIcon/>
          return (
  <ListItem key={text} disablePadding onClick={handleClick}>
    <ListItemButton
      component={NavLink}
      to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
      sx={{
        "&.active": {
          backgroundColor: "action.selected",
        },
      }}
    >
      <ListItemIcon>
        {icon}
      </ListItemIcon>

      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>
)})}
      </List>
        </Box>
        </>
    )
}

export default SideBar;