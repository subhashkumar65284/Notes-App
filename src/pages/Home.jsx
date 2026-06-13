import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import {v4 as uuid} from "uuid"
const Home = () => {
  const cards = [
    {
      id: 1,
      title: "Plants",
      description: "Plants are essential for all life.",
    },
    {
      id: 2,
      title: "Animals",
      description: "Animals are a part of nature.",
    },
    {
      id: 1,
      title: "Plants",
      description: "Plants are essential for all life.",
    },
    {
      id: 2,
      title: "Animals",
      description: "Animals are a part of nature.",
    },
    {
      id: 1,
      title: "Plants",
      description: "Plants are essential for all life.",
    }
  ];
  return (
    <>
    <div className="main-area flex min-[900px]:flex-row flex-col w-full h-full justify-around">
        <div className="flex flex-col w-75 border-none focus:outline-none">
        <input placeholder="Enter Title..." />
        <textarea
          className="h-60 resize-none rounded-lg border"
          placeholder="Enter Note..."
        />
      </div>
      <div className="notes-container w-full min-[900px]:w-[40%] overflow-y-auto flex flex-wrap">
          {cards.map((card, index) => (
            <Card key={uuid()} sx={{margin:2,width:"400px",height:"400px"}}>
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
                <CardContent sx={{ height: "100%" }}>
                  <Typography variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {card.description}
                  </Typography>
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
