import React from 'react';

import Bio from './Bio';

export default {
	title: 'Components/Bio',
	component: Bio
};

const Template = () => (
	<Bio
		headshot='https://avatars.githubusercontent.com/u/5428219?s=460&u=93741c2f57fcef66e2eed64ba4d13b606eeb1ac6&v=4'
		name='Peter Jones'
		tagline='Helping others learn by doing'
		role='Front End Web Developer'
	/>
);

export const Default = Template.bind({});
