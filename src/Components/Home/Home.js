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

function Home() {
  return (
    <div className={homestyles.container}>
      <div className={homestyles.viewone}>
        <h1 style={{textAlign:"center"}} >Games ADSA</h1>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <div style={{display: "flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}><h1>ReSpawn</h1></div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1 style={{textAlign:"center"}}>ReSpawn</h1>
          </Grid>
        </Grid>
      </div>
      <Box sx={{ flexGrow: 1 }} style={{ marginLeft: "10px" }}>
        <div className={homestyles.viewtwo}>
          <h2 style={{textAlign:"center"}}>Select the game</h2>
          <Grid container spacing={2} columns={12}>
            <Grid item md={4} sm={12} lg={4}>
              <Card style={{background:"#faf0ca"}}sx={{ maxWidth: 320 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={tictactoeicon}
                  alt="tic tac toe"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Tic Tac Toe
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Tic-tac-toe is played on a three-by-three grid by two
                    players, who alternately place the marks X and O in one of
                    the nine spaces in the grid.The player with the first three
                    in a row wins. Our Unbeatable AI uses Alpha Beta Pruning
                    based on Minimax Algorithm to find the best move.
                  </Typography>
                </CardContent>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Link to="/tictactoe">
                    <Button size="large" variant="contained" color="warning">
                      Play Now
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={4} sm={12} lg={4}>
              <Card sx={{ maxWidth: 320 }}>
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
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button size="large" variant="contained" color="success">
                    Play Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item md={4} sm={12} lg={4}>
              <Card sx={{ maxWidth: 320 }}>
                <CardMedia
                  component="img"
                  height="250"
                  image={connectfouricon}
                  alt="Connect Four"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Connect Four
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button  size="large" variant="contained" color="success">
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
