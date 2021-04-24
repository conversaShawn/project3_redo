import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Activities from "./components/Activities/Activities"
import Form from "./components/Form/Form"

import memories from "./images/giphy.gif"

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">Memories</Typography>
        <img src={memories} alt="Memories" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={13} sm={7}>
              <Activities />
            </Grid>
            <Grid item xs={13} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;