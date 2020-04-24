import React, { Component } from 'react';

import { RichText } from 'prismic-reactjs';

import TrackSingle from '../components/TrackSingle.js';


let TrackList = props => {
	return (
		<div className="tracklist-card__list">
		 <style>{`       
              .tracklist-card__list .list-group-item {
                  background-color: transparent;
                  border-bottom: 1px solid #fff;
                  display: flex;
                  align-items: center;
              }

              .tracklist-card__list .list-group-item i {
                  margin-right: 25px;
              }

              .tracklist-card__list ul li {
                  color: #353535;
                  list-style: none;
                  padding: 20px;
                  display: flex;
                  align-items: center;
                  background: #fff;
                  border-bottom: 1px solid rgba(0,0,0,.1);
                  cursor: pointer
              }

              .tracklist-card__list ul li:hover {
                background-color: #f7f7f7
              }

              .tracklist-card__list ul li.tracklist-card__list-active-track {
                  background-color: #e7e7e7;
              }

              .tracklist-card__list ul li i {
                  margin-right: 20px;
              }

              .tracklist-card__list ul li span {
                  font-weight: 500;
                  font-size: 16px;
              }

              .tracklist-card__list ul {
                  padding: 0;
                  margin: 0;
              }              
        `}</style>
        <ul>
          {props.listSource.map( (track, index) => {
            console.log(track)
           return (
                <TrackSingle
                    currentTrack={track}
                    setTrack={props.setTrack}
                    key={'track_' + (index+1)}
                    trackName={track.track_title}
                    trackFile={track.track_mp3_file.url}
                    state={props.state}

                 />
            )}
        )}
        </ul> 
      </div>
	)
}

export default TrackList;