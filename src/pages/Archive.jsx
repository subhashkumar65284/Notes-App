import { useNotes } from "../contexts/notesContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import DeleteIcon from "@mui/icons-material/Delete";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import ArchiveIcon from "@mui/icons-material/Archive";

const Archive = () => {
  const { archive, notesDispatch } = useNotes();
  const onUnarchiveClick = (id) => {
        notesDispatch({
            type:"UNARCHIVE",
            payload:id,
        })
  }
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center p-4">
        <h1 className="text-3xl text-emerald-800 font-bold mb-5 max-[767px]:mr-50">
          Archive
        </h1>
        <div className="notes-container w-full min-[900px]:w-[70%] h-[75vh] overflow-y-auto flex flex-wrap content-start gap-3">
          {archive.map(({ id, title, desc }, index) => (
            <Card
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
                  {/* Bottom Left Icon */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 12,
                      left: 12,
                      display: "flex",
                      gap: 1,
                      color:"green",
                    }}
                  >
                    {<ArchiveIcon onClick={() => onUnarchiveClick(id)} />}
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

export default Archive;
