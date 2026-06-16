import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useReducer } from "react";
import {v4 as uuid} from "uuid"
import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ArchiveIcon from "@mui/icons-material/Archive";
import { useNotes } from "../contexts/notesContext";

const Home = () => {
  const {id,title,desc,notes,notesDispatch} = useNotes();
  
  const onTitleChange = (e) => {
    notesDispatch({
      type:'TITLE',
      payload:e,
    })
  }
  const onDescChange = (e) => {
    notesDispatch({
      type:'DESC',
      payload:e,
    })
  }
  const onAddClick = () => {
    if(title!=="" && desc!==""){
      notesDispatch({
      type:'ADD',
    })
    notesDispatch({
      type:"RESET"
    })
    }
  }
  const onDeleteClick = (id) => {
    notesDispatch({
      type:"DELETE",
      payload:id
    })
  }
  const onStarredClick = (id) => {
      notesDispatch({
        type:"STARRED",
        payload:id
      })
  }
  const onArchiveClick = (id) => {
      notesDispatch({
        type:"ARCHIVE",
        payload:id
      })
  }

  return (
    <>
    <div className="main-area flex relative min-[900px]:flex-row max-[900px]:items-center max-[900px]:justify-between flex-col w-full h-full justify-around">
        {/*Form section */}
        <div className="flex flex-col w-75 mb-4 border-none focus:outline-none ">
         <h1 className="text-6xl text-emerald-800 font-bold mb-5 max-[767]:text-[20px]">Home </h1>
        <input value={title} onChange={(e) => onTitleChange(e.target.value)} placeholder="Enter Title..." />
        <textarea
          value={desc}
          onChange={(e) => onDescChange(e.target.value)}
          className=" max-[900px]:h-30 h-60 resize-none rounded-lg border"
          placeholder="Enter Note..."
        />
        <button onClick={onAddClick} className="w-full bg-emerald-700 mt-1 text-amber-50 p-1.5 rounded-2xl font-bold">Add</button>
      </div>

      <div className="notes-container w-full min-[900px]:w-[40%] overflow-y-auto flex flex-wrap content-start gap-3">
          {notes.map(({id,title,desc,starred},index) => (
  <Card
    key={id}
    sx={{
      width: "100%",
      height: "200px",
      borderRadius: "15px",
      backgroundColor:`${index%2===0?"#F0FFF4":"#CFECCF"}`
    }}
  >
    <CardActionArea
      sx={{
        height: "100%",
        "&[data-active]": {
          backgroundColor: "action.selected",
          "&:hover": {
            backgroundColor: "action.selectedHover",
          },
        },
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          position: "relative",
        }}
      >
        <Typography variant="h5" component="div">
          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mt: 1 }}
        >
          {desc}
        </Typography>
        {/* Bottom Left Icon */}
        <Box
          sx={{
            position: "absolute",
            bottom: 12,
            left: 12,
            display: "flex",
            gap: 1,
          }}
        >
          {<ArchiveIcon onClick={() => onArchiveClick(id)}/>}
          
        </Box>

        {/* Bottom Right Icons */}
        <Box
          sx={{
            position: "absolute",
            bottom: 12,
            right: 12,
            display: "flex",
            gap: 1,
          }}
        >
          {(starred!==true)?<StarBorderIcon
          onClick={() => onStarredClick(id)}
            sx={{
              color:"black",
              cursor: "pointer",
              "&:hover": {transform: "scale(1.1)" },
            }}
          />:<StarIcon
          onClick={() => onStarredClick(id)}
            sx={{
              color:"red",
              cursor: "pointer",
              "&:hover": {transform: "scale(1.1)" },
            }}
          />}
          <DeleteIcon 
            onClick={() => onDeleteClick(id)}
            sx={{
              cursor: "pointer",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
          
        </Box>
      </CardContent>
    </CardActionArea>
  </Card>
))}
      </div>
    </div>  
    </>
  );
};

export default Home;
