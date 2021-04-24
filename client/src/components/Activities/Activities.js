import React from "react";
import Activity from "./Activity/Activity";

import useStyles from "./styles"

const Activities = () => {
    const classes = useStyles();
    return (
        <>
            <h1>ACTIVITIES</h1>
            <Activity />
            <Activity />
        </>
    )
}

export default Activities;