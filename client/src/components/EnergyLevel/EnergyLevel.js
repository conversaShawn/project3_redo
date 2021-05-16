import { React, useState } from 'react';
// import Rating from '@material-ui/lab/Rating'
import StarIcon from '@material-ui/icons/Star'

import useStyles from './styles';

const EnergyLevel = (e) => {
	// const [rating, setRating] = useState(null)
	const classes = useStyles();


	return (
		<div>
			{[ ...Array(5)].map((star, i) => {
				const ratingValue = i + 1;
				
				return(
					<label>
						<input className={classes.starInput} type='radio' name='rating' value={ratingValue} />
						<StarIcon className='star' size='large'/>
					</label>
				)
			})}
		</div>
	)
}

// export default EnergyLevel;

// const EnergyLevel = (e) => {
	
// 	return (
// 	  <div>
// 		  <Rating />
// 	  </div>
// 	)
//   }

  export default EnergyLevel;
