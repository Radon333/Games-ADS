import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import tictactoeicon from "../images/tic-tac-toe.png";
import sudokuicon from "../images/sudoku.png";
import connectfouricon from "../images/connect-four.png";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import homestyles from "./home.module.css";
import {motion} from "framer-motion";

function Home() {
  return (
    <div className={homestyles.container}>
      <div className={homestyles.viewone}>
        <br />
        
        <div style={{paddingTop:"20vh", textAlign: "center" }}>
        <motion.div initial={{ y:-300 }} animate={{y:0}} transition={{delay:0.5,duration:0.5}}>
          <h1
            style={{
              color: "#fc4273",
              fontSize: "5rem",
            }}
          >
            Game City
          </h1>
          </motion.div>
          <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1,duration:2}}
            >
          <p style={{ textAlign: "center", color: "white", fontSize: "x-large" }}>
            Algorithm based games for learning
          </p>
          <Button
            href="#scrollhere"
            style={{ textDecoration: "none" }}
            size="large"
            variant="contained"
            color="primary"
          >
            Select Games to play
          </Button>
          </motion.div>

        </div>
      </div>
      <Box
        sx={{ flexGrow: 1 }}
        style={{
          display: "flex",
          textAlign: "center",
          marginLeft: "10px",
          justifyContent: "center",
        }}
      >
        <div className={homestyles.viewtwo}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "xx-large",
              color: "#cb03df",
            }}
          >
            Select the game
          </h2>
          <br />
          <Grid
            style={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}
            container
            spacing={2}
            columns={12}
          >
            <Grid id="scrollhere" item md={4} sm={12} lg={4}>
              <Card style={{ background: "#faf0ca" }} sx={{ maxWidth: 320 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={tictactoeicon}
                  alt="tic tac toe"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Unbeatable Tic Tac Toe
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Classic Tic Tac Toe Game is here,but this one with an
                    Unbeatable AI opponent. Try the game and see how you do.
                  </Typography>
                </CardContent>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Link to="/tictactoe">
                    <Button
                      style={{ textDecoration: "none" }}
                      size="large"
                      variant="contained"
                      color="success"
                    >
                      Play Now
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={4} sm={12} lg={4}>
              <Card style={{ background: "#faf0ca" }} sx={{ maxWidth: 320 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={sudokuicon}
                  alt="Sudoku"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Sudoku
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The number placing puzzle with three different difficulty
                    modes. You can try use solver to help you out solving the
                    puzzle.
                  </Typography>
                </CardContent>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    href="https://gametree-respawn-sudoku.netlify.app/"
                    size="large"
                    variant="contained"
                    color="success"
                  >
                    Play Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={4} sm={12} lg={4}>
              <Card style={{ background: "#faf0ca" }} sx={{ maxWidth: 320 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={connectfouricon}
                  alt="Connect Four"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Connect Four against AI
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Connect Four startegy game with against AI opponent with
                    three difficulty levels. Can you beat the the AI?
                  </Typography>
                </CardContent>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    href="https://gametree-respawn-connectfour.netlify.app/"
                    size="large"
                    variant="contained"
                    color="success"
                  >
                    Play Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Box>
    </div>
  );
}

export default Home;
