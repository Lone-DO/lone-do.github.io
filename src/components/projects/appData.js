import React from 'react';
import ACTunes from './_actunes';
// import Elevator from "../projects/_extra/components/Elevator";
// import Invoice from "./_extra/components/invoice";

const appData = [
	{
		id: 1,
		type: 'app',
		title: 'ACTunesApp',
		name: 'Animal Crossing Tunes',
		headline: 'Second Project, built using EmberCLI & MongoDB',
		description:
			"Creative application that brings the daily soundtracks of Animal Crossing back, and now it's here to stay for our daily endeavors, unlike never before. Able to choose smoothly between the user's desired Generation, from the hit classics like original Animal Crossing from GameCube, to City Folk from the WII U, and the latest New Leaf on the 3DS. Built with the MERN stack, the backend API utilizes MongoDB as its database.",
		launch: ACTunes,
		github: 'https://github.com/Lone-DO/animalcrossing',
		modules: [
			'MERN Stack',
			'Mongo',
			'Express',
			'Ember.js',
			'Node.js',
			'SASS',
			'jQuery',
			'HTML5',
			'CSS3',
			'JavaScript - ES6',
		],
	},
	{
		id: 2,
		type: '.url',
		title: 'EmailyApp',
		name: 'Emaily',
		headline: 'Course Project, Built while learning Node & React',
		description: '',
		launch: 'https://lonedo-emaily.herokuapp.com/',
		github: 'https://github.com/Lone-DO/Emaily',
		modules: [
			'Heroku',
			'HTML5',
			'CSS3',
			'JavaScript - ES6',
			'MongdoDB',
			'Express',
			'React',
			'Redux',
			'Node.js',
			'Materialize.css',
			'Sendgrid',
			'Stripe',
			'OAuth',
		],
	},
	{
		id: 3,
		type: '.url',
		title: 'AirlineApp',
		name: 'Airline',
		headline: 'Course Project, Built while learning ES6',
		description: '',
		launch: 'https://lone-do.github.io/travel-site',
		github: 'https://github.com/Lone-DO/travel-site',
		certificate: 'https://www.udemy.com/certificate/UC-MRA7ABA8/',
		modules: ['HTML5', 'CSS3', 'JavaScript - ES6', 'Gulp', 'PostCSS', 'jQUery', 'Normalize.CSS'],
	},

	{
		id: 4,
		type: '.url',
		title: 'CSharp',
		name: 'C# Shorts',
		headline: 'Projects built while studying C# via Treehouse',
		description:
			'My small projects, short and sweet, using Node & C#. After going a year with JavaScript, picking up this language felt natural, given the exposure I managed to dabble in.',
		launch: 'disabled',
		github: 'https://github.com/Lone-DO/Treehouse/tree/master/C%23',
		modules: ['Node.js', 'C#', '.Net'],
	},
	{
		id: 5,
		type: '.url',
		title: 'UndertaleApp',
		name: 'Undertale',
		headline: 'First project, built using Ember.js',
		description:
			"Recreational Project that restructures the original site into a more updated formality. Built using Ember, my first Project I've built as a Developer. Complete overhaul of hands-on coding and features that utilize API information for the user's discretion. Allows fans to post 'Mail' on the site for the Undertale Devs to see, and others to respond to. Built with Ember.js, Backend localStorage.",
		launch: 'https://lone-do.github.io/#/undertale/',
		github: 'https://github.com/Lone-DO/Undertale-Recreation',
		modules: ['HTML5', 'CSS3', 'JavaScript - ES6', 'Ember.js', 'localStorage', 'SASS', 'jQuery'],
	},
	// {
	//    id: 6,
	//    type: "app",
	//    title: "ElevatorApp",
	//    name: "Elevator",
	//    headline: "JavaScript Short: Elevator Simulator 2019",
	//    description:
	//       "JavaScript Short: Created an app that simulates an elevator, testing state management skills",
	//    launch: [<Elevator />],
	//    github:
	//       "https://github.com/Lone-DO/javascript-widgets/blob/master/src/components/Elevator.js",
	//    modules: ["JavaScript", "React.js"],
	// },
	// {
	//    id: 7,
	//    type: "app",
	//    title: "InvoiceApp",
	//    name: "Invoice Generator",
	//    headline: "JavaScript Short: Data Manipulation",
	//    description:
	//       "JavaScript Short: Sorting generated invoices, testing data manipulation skills.",
	//    launch: [<Invoice />],
	//    github:
	//       "https://github.com/Lone-DO/javascript-widgets/blob/master/src/components/Invoice.js",
	//    modules: ["JavaScript", "React.js"],
	// },
	{
		id: 8,
		type: '.url',
		title: 'FCC_Tribute',
		name: 'FCC: Tribute Page',
		headline: 'Free Code Camp Project: Tribute Page',
		description:
			'First Project for the Responsive Web Design track, build a tribute page, hosted via CodePen',
		launch: 'https://codepen.io/lone-do/full/LemKLM',
		github: 'https://codepen.io/lone-do/pen/LemKLM',
		modules: ['HTML, CSS, JavaScript'],
	},
	{
		id: 9,
		type: '.url',
		title: 'FCC_Tribute',
		name: 'FCC: Form Page',
		headline: 'Free Code Camp Project: Form Page',
		description:
			'Second Project for the Responsive Web Design track, build a form that simulates user input, hosted via CodePen',
		launch: 'https://codepen.io/lone-do/full/MWaeZVB',
		github: 'https://codepen.io/lone-do/pen/MWaeZVB',
		modules: ['HTML, CSS, JavaScript'],
	},
	{
		id: 10,
		type: '.url',
		title: 'Scratch',
		name: 'Scratch Game: Pong',
		headline: 'Harvard CS Introduction: Scratch Assignment',
		description: 'Built Pong using Scratch, short and sweet.',
		launch: 'https://scratch.mit.edu/projects/387488765/',
		github: 'https://scratch.mit.edu/projects/387488765/editor',
		modules: ['Scratch'],
	},
	{
		id: 11,
		type: '.url',
		title: 'Python',
		name: 'Reddit Client Console',
		headline: 'Code Louisville: Python Course',
		description:
			'A console application that is built on the Reddit API, allows you to surf the trending page straight into your console.',
		launch: 'disabled',
		github: 'https://github.com/Lone-DO/Python',
		modules: ['Python', 'Reddit API', 'OOP'],
	},
	{
		id: 12,
		type: '.url',
		title: 'C#',
		name: 'Reddit Client UI: r/PhotoshopBattles',
		headline: 'Blazor interface for viewing photoshop submissions in a streamlined view',
		description: 'Built Pong using Blazor 2020, C#',
		launch: 'disabled',
		github: 'https://github.com/Lone-DO/csharp',
		modules: ['Scratch'],
	},
];

export default appData;
