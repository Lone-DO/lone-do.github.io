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
	const [TargetModal, setModal] = useState<string | null>('');
	const [showModal, setModalVisibility] = useState(false);

	function toggleModal(Content: string | null = null) {
		try {
			setModalVisibility(Boolean(Content));
			setModal(() => Content);
		} catch (err) {
			alert(err);
		}
	}

	function GetModal() {
		if (!showModal || !TargetModal) return <span></span>;
		/** IF Composite */
		if (TargetModal.length !== undefined) return <TargetModal />;
		/** Else */
		return TargetModal;
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
					<GetModal />
				</div>
			</div>
		</div>
	);
}

export default App;
