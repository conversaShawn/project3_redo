import React, { useEffect } from "react"; //useEffect dipatches action
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux" //dispatches action

import { getActivities } from "./actions/activities"
import Activities from "./components/Activities/Activities"
import Form from "./components/Form/Form"
import activityImage from "./images/memories.png"
import useStyles from "./styles"

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch])

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Lone Wolf</Typography>
        <img className={classes.image} src={activityImage} alt="Activities" height="60"/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Activities />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;