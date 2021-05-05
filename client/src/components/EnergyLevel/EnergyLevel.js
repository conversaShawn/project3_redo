import react from 'react';

export default (EnergyLevel = () => {
	return (
		<div>
			{[ ...Array(5) ].map((battery) => {
				return <label>
                    battery
                </label>
			})}
		</div>
	);
});
