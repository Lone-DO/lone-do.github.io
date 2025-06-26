import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import '../assets/styles/vendor/materialize/materialize.scss';
import '../assets/styles/App.scss';

/** Components */
import Header from '../components/Header.jsx';
import Landing from '../components/Landing';
import ACTunesApp from '../components/projects/_actunes/index';
import AlbumNew from '../components/projects/_actunes/albums/AlbumNew';
import Footer from '../components/Footer';

function App() {
	const [modal, setModal] = useState('');
	const [showModal, setModalVisibility] = useState(false);

	function toggleModal(content = '') {
		try {
			if (content.length === 0) {
				setModalVisibility(false);
				// modal.style.opacity = 0;
				// modal.style.visibility = "hidden";
			} else {
				setModalVisibility(true);

				// modal.style.opacity = 1;
				// modal.style.visibility = "visible";
			}

			setModal(content);
		} catch (err) {
			alert(err);
		}
	}
	return (
		<div className='App'>
			<div className='App-body'>
				<Header modal={toggleModal} />
				<Landing modal={toggleModal} />
				<Footer modal={toggleModal} />
				<Routes>
					<Route path={`/actunes`} Component={ACTunesApp} />
					<Route path={`/actunes/new`} Component={AlbumNew} />
				</Routes>
				<div className='modal' data-visible={showModal || null}>
					<span className='modal__close' onClick={() => toggleModal('')}>
						X
					</span>
					{modal}
				</div>
			</div>
		</div>
	);
}

export default App;
