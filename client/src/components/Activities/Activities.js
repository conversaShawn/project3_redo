import React from "react";
import { Grid, CircularProgress } from "@material-ui/core"
import { useSelector } from "react-redux"

import Activity from "./Activity/Activity";
import useStyles from "./styles"

const Activities = ({ setCurrentId }) => {
    const activities = useSelector((state) => state.activities);
    const classes = useStyles();

    console.log(activities);
    return (
        !activities.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {activities.map((activities) => (
                    <Grid key={activity._id} item xs={12} sm={6}>
                        <Activity activities={activities} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Activities;