import react from 'react';

export default (EnergyLevel = () => {
	return (
		<div>
			{[ ...Array(5) ].map((battery) => {
				return battery;
			})}
		</div>
	);
});
