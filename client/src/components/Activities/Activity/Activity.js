import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
// likes
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// trash can
import DeleteIcon from '@material-ui/icons/Delete';
// edit
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// x amount of time ago
import moment from 'moment';
import { useDispatch } from 'react-redux'

import { likeActivity, deleteActivity } from '../../../actions/activities';

import EnergyLevel from '../../EnergyLevel/EnergyLevel' 

import useStyles from './styles';

const Activity = ({ activity, setCurrentId }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	return (
		<Card className={classes.card}>
			<CardMedia className={classes.media} image={activity.selectedFile} title={activity.title} />
			<div className={classes.overlay}>
				<Typography variant='h6'>{activity.creator}</Typography>
				<Typography variant='body2'>{moment(activity.createdAt).fromNow()}</Typography>
			</div>
			<div className={classes.overlay2}>
				<Button 
					style={{ color: 'white' }} 
					size='small' 
					onClick={() => setCurrentId(activity._id)}>
					<MoreHorizIcon fontSize='default' />
				</Button>
			</div>
			<div className={classes.details}>
				<Typography variant='body2' color='textSecondary'>
					{activity.tags.map((tag) => `#${tag} `)}
				</Typography>
			</div>
				<Typography className={classes.title} variant='h5' gutterBottom>
					{activity.title}
				</Typography>
			<CardContent>
				<Typography variant='body2' color='textSecondary' component='p'>
					{activity.message}
				</Typography>
			</CardContent>
			< EnergyLevel />
			<CardActions className={classes.cardActions}>
				<Button 
					size='small' 
					color='primary' 
					onClick={() => dispatch(likeActivity(activity._id))}>
					<ThumbUpAltIcon fontSize='small' />
					&nbsp; Like &nbsp;
					{activity.likeCount}
				</Button>
        		<Button 
					size='small' 
					color='primary' 
					onClick={() => dispatch(deleteActivity(activity._id))}>
					<DeleteIcon fontSize='small' />
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default Activity;
