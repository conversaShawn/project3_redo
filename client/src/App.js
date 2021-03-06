import React, { useState, useEffect } from 'react'; //useEffect dipatches action
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux' //dispatches action

import { getActivities } from './actions/activities'
import Activities from './components/Activities/Activities'
import Form from './components/Form/Form'
import batteryDrain from './images/batteryDrain.gif'
import useStyles from './styles'

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles();
  // dispactches action
  const dispatch = useDispatch();

  // componentDidMount/ componentDidUpdate
  useEffect(() => {
    dispatch(getActivities());
  }, [currentId, dispatch])

  return (
    <Container maxidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Butterfly Battery</Typography>
        <img className={classes.image} src={batteryDrain} alt='Battery Draining' height='60'/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Activities setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;