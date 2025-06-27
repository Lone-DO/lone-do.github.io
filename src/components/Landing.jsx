import React from 'react';

import Intro from './Intro';
import Projects from './Projects';

const Landing = (props) => {
	return (
		<main className='App_content'>
			<Intro />
			<Projects modal={props.modal} />
		</main>
	);
};

export default Landing;
