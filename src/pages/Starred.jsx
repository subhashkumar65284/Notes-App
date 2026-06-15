import { useNotes } from "../contexts/notesContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import onStarredClick from "./Home"
import onDeleteClick from "./Home"

const Starred = () => {
    const {id,title,desc,notes,notesDispatch} = useNotes();
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
    return (
        <>
        <div className="w-full h-full flex flex-col justify-center p-4">
            <div className="font-bold text-2xl mb-3"><h1>Starred Notes</h1></div>
          <div className="notes-container w-full min-[900px]:w-[70%] h-[75vh] overflow-y-auto flex flex-wrap content-start gap-3">
            {notes.map(({id,starred,title,desc}, index) => (
             starred===true && <Card
               key={id}
               sx={{
                 width: "100%",
                 height: "200px",
                 borderRadius: "15px",
                 backgroundColor: index % 2 === 0 ? "#F0FFF4" : "#CFECCF",
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
                   <Typography variant="h5">{title}</Typography>

                   <Typography
                     variant="body2"
                     sx={{
                       color: "text.secondary",
                       mt: 1,
                     }}
                   >
                     {desc}
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
    )
};

export default Starred;