import React from "react";
import { useSelector } from "react-redux"

import Activity from "./Activity/Activity";
import useStyles from "./styles"

const Activities = () => {
    const activities = useSelector((state) => state.activities);
    const classes = useStyles();

    console.log(activities);
    return (
        <>
            <h1>ACTIVITIES</h1>
            <Activity />
            <Activity />
        </>
    )
}

export default Activities;