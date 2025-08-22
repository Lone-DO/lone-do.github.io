import React, { useState } from 'react';

const ProjectModel = (props) => {
	const modules = props.modules.map((module) => {
		return <span key={props.title + module}>{module}</span>;
	});
	const [isVisible, setVisible] = useState(false);

	const toggleDetails = () => setVisible(!isVisible);
	const details = isVisible ? <p className='App_content_projects-modules'>{modules}</p> : null;
	return (
		<article key={props.title} className={`App_content_projects_${props.title}`}>
			<h3 className='App_content_projects-title _title'>{props.name}</h3>
			<p className='App_content_projects-headline'>{props.headline}</p>
			<i className='App_content_projects-description'>{props.description}</i>

			<div>
				{props.type === 'app' ? (
					<button
						className='btn --transparent modal-open'
						onClick={() => props.modal(props.launch)}
					>
						<span>
							Launch <i className='fa-solid fa-circle-play' />
						</span>
					</button>
				) : props.launch !== 'disabled' ? (
					<a href={props.launch} target='_blank'>
						<button className='btn --transparent'>
							<span>
								Preview <i className='fa-solid fa-up-right-from-square' />
							</span>
						</button>
					</a>
				) : (
					<br></br>
				)}

				<a href={props.github} target='_blank'>
					<button className='btn --transparent' title='open github Link'>
						Github <i className='fa-solid fa-code'></i>
					</button>
				</a>
				<button className='btn --transparent' title='show project tags' onClick={toggleDetails}>
					<i className='fa-solid fa-comment-dots'></i>
				</button>
				{details}
			</div>
		</article>
	);
};

export default ProjectModel;
