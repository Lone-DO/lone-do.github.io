import React, { Component } from 'react';

import appData from '../assets/data/appData.js';
import ProjectModel from './_projectModel.jsx';

class Projects extends Component {
	constructor() {
		super();
		this.state = {
			apps: appData,
		};
	}

	render() {
		const Applications = this.state.apps.map((app, index) => {
			return (
				<ProjectModel
					modal={this.props.modal}
					key={app.title + index}
					title={app.title}
					name={app.name}
					headline={app.headline}
					description={app.description}
					launch={app.launch}
					github={app.github}
					modules={app.modules}
					type={app.type}
				/>
			);
		});

		return (
			<div className='App_content_projects' data-matching-link='#project-link'>
				<h2 className='App_content-title'>List of personal applications</h2>
				{Applications}
			</div>
		);
	}
}

export default Projects;
