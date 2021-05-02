import React from 'react';
// Circular spinner
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'

import Activity from './Activity/Activity';
import useStyles from './styles'

const Activities = ({ setCurrentId }) => {
    const activities = useSelector((state) => state.activities); //activities in reducers
    const classes = useStyles();

    // console.log(activities);
    return (
        !activities.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {activities.map((activity) => (
                    <Grid key={activity._id} item xs={12} sm={6}>
                        <Activity activity={activity} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Activities;