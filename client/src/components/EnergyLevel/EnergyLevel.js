import react from 'react';
import { FaStar } from 'react-icons/fa';

export default (EnergyLevel = () => {
	return (
		<div>
			{[ ...Array(5) ].map((star, i) => {
				return <label>
                    <input type='radio' name='rating'></input>
					<FaStar className='star' size={100} />
                </label>
			})}
		</div>
	);
});
