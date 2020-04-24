import React, { Component, useState } from 'react';


import { RichText } from 'prismic-reactjs';


let TrackSingle = props => {


	const [selectedTrack, setSelectedTrack] = useState();

	let trackChange = () => {
		return (
			setSelectedTrack(props.trackName)
		)
	}

	// <li  onClick={ () => trackChange() } className={selectedTrack && selectedTrack[0].track_title.text === props.trackName ? ' tracklist-card__list-active-track' : ''}>

	console.log(selectedTrack)

	return (
		<li  onClick={ () => trackChange() }>
		 	<i className="material-icons" style={{fontSize: '20px'}}>play_arrow</i> <span className="mb-0">{RichText.asText(props.trackName)}</span>
		</li>
	)
}

export default TrackSingle;