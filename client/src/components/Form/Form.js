import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core'
// for selectedFile
import FileBase from 'react-file-base64';
import { useSelector, useDispatch } from 'react-redux';

import useStyles from './styles'
import { updateActivity, createActivity } from '../../actions/activities';

const Form = ({ currentId, setCurrentId }) => {
    const [activityData, setActivityData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    const activity = useSelector((state) => currentId ? state.activities.find((a) => a._id === currentId) : null);
    const classes = useStyles();
    // allows to dispactch actions
    const dispatch = useDispatch();
    
    // console.log(activityData)
    useEffect(() => {
        if (activity) setActivityData(activity);
        // console.log('useEffect working form')
    }, [activity])

    const clear = () => {
        setCurrentId(null);
        setActivityData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updateActivity(currentId, activityData))
        } else {
            dispatch(createActivity(activityData))
        }
        // clear form on submit
        clear();
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? 'Editing' : 'Creating'} an Activity</Typography> 
                <TextField name='creator' variant='outlined' label='Creator' fullWidth value={activityData.creator} onChange={(e) => setActivityData({ ...activityData, creator: e.target.value})}/>
                <TextField name='title' variant='outlined' label='Title' fullWidth value={activityData.title} onChange={(e) => setActivityData({ ...activityData, title: e.target.value})}/>
                <TextField name='message' variant='outlined' label='Message' fullWidth value={activityData.message} onChange={(e) => setActivityData({ ...activityData, message: e.target.value})}/>
                <TextField name='tags' variant='outlined' label='Tags' fullWidth value={activityData.tags} onChange={(e) => setActivityData({ ...activityData, tags: e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={({base64}) => setActivityData({ ...activityData, selectedFile: base64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;