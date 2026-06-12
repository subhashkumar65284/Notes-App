import {v4 as uuid} from 'uuid'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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
        <div id="route-Container" className="w-64 h-full bg-[#CEE0CE] fixed left-0 top-16 z-5">
            <List>
        {pages.map((text) => (
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
        {text === "Home" ? (
          <HomeIcon />
        ) : text === "Starred" ? (
          <LabelImportantIcon />
        ) : text === "Archive" ? (
          <ArchiveIcon />
        ) : (
          <DeleteIcon />
        )}
      </ListItemIcon>

      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>
))}
      </List>
        </div>
        </>
    )
}

export default SideBar;