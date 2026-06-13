import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useReducer } from "react";
import {v4 as uuid} from "uuid"
import notesReducer from "../reducers/notesReducer";
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const Home = () => {
const initialState = {
  id:'',
  title:'',
  desc:'',
  notes:[]
}

  const [{id,title,desc,notes},notesDispatch] = useReducer(notesReducer,initialState);
  
  const onTitleChange = (e) => {
    console.log(e);
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
    console.log(notes)
  }
  {/*very light green , tea green*/}
  return (
    <>
    <div className="main-area flex min-[900px]:flex-row max-[900px]:items-center flex-col w-full h-full justify-around">
        {/*Form section */}
        <div className="flex flex-col w-75 mb-4 border-none focus:outline-none">
        <input value={title} onChange={(e) => onTitleChange(e.target.value)} placeholder="Enter Title..." />
        <textarea
          value={desc}
          onChange={(e) => onDescChange(e.target.value)}
          className=" max-[900px]:h-35 h-60 resize-none rounded-lg border"
          placeholder="Enter Note..."
        />
        <button onClick={onAddClick} className="w-full bg-emerald-700 mt-1 text-amber-50 p-1.5 rounded-2xl font-bold">Add</button>
      </div>

      <div className="notes-container w-full min-[900px]:w-[40%] max-[900px]:justify-center max-[900px]:h-[60%] overflow-y-auto flex flex-wrap">
          {notes.map((note,index) => (
  <Card
    key={uuid()}
    sx={{
      margin: 2,
      width: "280px",
      height: "280px",
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
          {note.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", mt: 1 }}
        >
          {note.desc}
        </Typography>

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
          <FavoriteIcon
            sx={{
              cursor: "pointer",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />

          <StarBorderIcon
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
