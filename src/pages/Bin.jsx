import { useNotes } from "../contexts/notesContext";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import DeleteIcon from "@mui/icons-material/Delete";
import RecyclingIcon from "@mui/icons-material/Recycling";

const Bin = () => {
  const { bin, notesDispatch } = useNotes();
  const onRecycleClick = (id) => {
    notesDispatch({
      type: "RECYCLE",
      payload: id,
    });
  }
  const onDeleteForeverClick = (id) => {
    notesDispatch({
      type:"DELETE_FOREVER",
      payload:id,
    })
  }
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center p-4">
        <h1 className="text-6xl text-emerald-800 font-bold mb-5 max-[767px]:mr-50  max-[767]:text-2xl">
          Bin
        </h1>
        <div className="notes-container w-full min-[900px]:w-[70%] h-[75vh] overflow-y-auto flex flex-wrap content-start gap-3">
          {bin.map(({ id, starred, title, desc }, index) => (
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
                    {" "}
                    <RecyclingIcon
                      onClick={() => onRecycleClick(id)}
                      sx={{
                        cursor: "pointer",
                        "&:hover": { transform: "scale(1.1)" },
                      }}
                    />
                    <DeleteIcon
                      onClick={() => onDeleteForeverClick(id)}
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

export default Bin;
