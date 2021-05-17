import { React, useState } from 'react';
// import Rating from '@material-ui/lab/Rating'
import StarIcon from '@material-ui/icons/Star'

import useStyles from './styles';

const EnergyLevel = (e) => {
	// const [rating, setRating] = useState(null)
	const classes = useStyles();
	const [rating, setRating] = useState(null);

	return (
		<div>
			{[ ...Array(5)].map((star, i) => {
				const ratingValue = i + 1;
				
				return(
					<label key={i}>
						<input className={classes.starInput}  type='radio' name='rating' value={ratingValue} onClick={() => setRating(ratingValue)}/>
						<StarIcon className={classes.stars} size='large' color={ratingValue <= rating ? 'primary' : 'secondary'}/>
					</label>
				)
			})}
		</div>
	)
}

export default EnergyLevel;