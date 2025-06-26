import React from 'react';

const ProjectModel = (props) => {
	const modules = props.modules.map((module) => {
		return <span key={props.title + module}>{module}</span>;
	});
	return (
		<section key={props.title} className={`App_content_projects_${props.title}`}>
			<h3 className='App_content_projects-title _title'>{props.name}</h3>
			<p className='App_content_projects-headline'>{props.headline}</p>
			<p className='App_content_projects-description'>{props.description}</p>

			{props.type === 'app' ? (
				<button className='btn --transparent modal-open' onClick={() => props.modal(props.launch)}>
					<span>
						Launch <i className='fa-solid fa-circle-play' />
					</span>
				</button>
			) : props.launch !== 'disabled' ? (
				<a href={props.launch}>
					<button className='btn --transparent'>
						<span>
							Preview <i className='fa-solid fa-up-right-from-square' />
						</span>
					</button>
				</a>
			) : (
				<br></br>
			)}

			<a href={props.github}>
				<button className='btn --transparent'>
					Github <i className='fa-solid fa-code'></i>
				</button>
			</a>
			<button
				className='btn --transparent'
				onClick={() => props.toggle(`.App_content_projects_${props.title}`, 'article')}
			>
				<i className='fa-solid fa-comment-dots'></i>
			</button>
			<article className={`App_content_projects-modules ${props.title}-modules`}>{modules}</article>
		</section>
	);
};

export default ProjectModel;
