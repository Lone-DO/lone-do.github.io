import React from 'react';
import Search from './WeatherForm';

import sunny from '../../../assets/images/AC_App/weather-normal.svg';
import raining from '../../../assets/images/AC_App/weather-raining.svg';
import winter from '../../../assets/images/AC_App/weather-winter.svg';

const Player = ({ props, state, loadSong, loadGeolocation, loadWeather, handleChange }) => {
	if (state.hasStarted) {
		let time = props.time.hours + '00';
		if (props.time.period === 'PM' && new Date().getHours() > 12) {
			time = parseInt(props.time.hours) + 12 + '00';
		} else {
			time = props.time.hours + '00';
		}
		return [
			<div className='clock' key='time'>
				<img src={`/images/AC_App/Timeline/(${time}).png`} alt='Clock' />
				<div className='clock_time'>
					<i>{props.time.hours}</i>
					<i>:{props.time.minutes}</i>
				</div>
			</div>,
			<h4 key='Song Title'>
				{state.setAlbum}, {state.title}, {state.weather}
				{state.location}
			</h4>,
			<iframe
				src={`https://drive.google.com/file/d/${state.song}/preview`}
				width='300'
				height='150'
				allow='autoplay'
				loop
				key='player'
				type='audio/mp3'
			>
				Your browser does not support the audio element.
			</iframe>,
			<div key='songDials' className='timeline'>
				<button className='btn timeline-item' onClick={() => loadSong('Original')}>
					Orignal
				</button>
				<button className='btn timeline-item' onClick={() => loadSong('CityFolk')}>
					City Folk
				</button>
				<button className='btn timeline-item' onClick={() => loadSong('NewLeaf')}>
					NewLeaf
				</button>
			</div>,
			<div key='controls'>
				<img
					onClick={() => loadSong(state.setAlbum, 'Raining')}
					className='btn weatherIcon'
					alt='Change Weather to Rain Theme'
					src={raining}
				/>

				<img
					onClick={() => loadSong(state.setAlbum, 'Winter')}
					className='btn weatherIcon'
					alt='Change Weather to Winter Theme'
					src={winter}
				/>

				<img
					onClick={() => loadSong(state.setAlbum, 'Normal')}
					className='btn weatherIcon'
					alt='Change Weather to Normal Theme'
					src={sunny}
				/>

				<button onClick={() => loadGeolocation()} className='btn weatherIcon geo'>
					<i className='fa-solid fa-location-dot' />
				</button>
			</div>,

			<Search
				key='WeatherForm'
				props={state}
				handleChange={handleChange}
				loadWeather={loadWeather}
			/>,
		];
	} else {
		return (
			<button className='btn' onClick={() => loadSong()}>
				Start
			</button>
		);
	}
};

export default Player;
