import React, { Component, useState } from 'react';

import { RichText } from 'prismic-reactjs';





let TrackCurrent = props => {

	 const [selectedTrackName, setSelectedTrackName] = useState();

	 

	return (
		<div className="tracklist-card__current">
          {props.trackSource.filter((track, index) => index === 0).map( (track, index) => {

              return (
                <div>

                	

                   <audio />
                    <div className="tracklist-card__current-cover-holder d-inline-block">                          
                     <div className="tracklist-card__current-cover">
                        <div className="tracklist-card__current-action text-shadow"><i className="material-icons" style={{fontSize: '40px'}}>play_circle_outline</i></div>
                     </div>
                  </div>
                  <div className="tracklist-card__current-text d-inline-block">
                    <p className="tracklist-card__current-title h5">{selectedTrackName} {props.state.selectedTrackName} {RichText.asText(track.track_title)}</p>
                    <p className="tracklist-card__current-time" mp3File={track.track_mp3_file.url} purchaseLink={track.purchase_link.url}>{'0:00 / 3:06'}</p>
                    <div className="tracklist-card__navigate">
                        <i className="tracklist-card__navigate-previous material-icons" style={{fontSize: '20px'}}>fast_rewind</i>
                        <i className="tracklist-card__navigate-next material-icons" style={{fontSize: '20px'}}>fast_forward</i>
                    </div>
                  </div>
                  <div className="tracklist-card__progress mt-3">
                    <div className="progress" style={{height: '3px'}}>
                      <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>

                  <style>{`
	                  .tracklist-card__current-cover {
	                      width: 100px;
	                      height: 100px;
	                      background-color: #c14343;
	                      position: relative;
	                      background-image: url("https://cdn.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL…l0cyI6eyJyZXNpemUiOnsiZml0IjpudWxsLCJ3aWR0aCI6MjAwLCJoZWlnaHQiOjIwMH19fQ==");
	                      background-size: cover;
	                      border-radius: 2px;
	                  }

	                 .tracklist-card__current-action {
	                      position: absolute;
	                      top: 50%;
	                      left: 50%;
	                      transform: translate(-50%, -50%);
	                      text-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
	                      cursor: pointer;
	                      transition: .3s ease all;
	                      line-height: 80%;
	                  }

	                  .tracklist-card__current-action:hover {
	                    top: 48%
	                  }

	                  .tracklist-card__current-cover-holder {
	                      position: relative;
	                      margin-right: 20px
	                  }

	                  .tracklist-card__navigate-previous, .tracklist-card__navigate-next {
	                    cursor: pointer;
	                    transition: .3s ease-in-out all;
	                    position: relative
	                  }

	                  .tracklist-card__navigate-previous {
	                    margin-right: 30px
	                  }

	                  .tracklist-card__navigate-previous:hover {
	                    left:-1px
	                  }  

	                  .tracklist-card__navigate-next:hover {
	                    right:-1px
	                  }           

	                  .tracklist-card__current-title {
	                     font-family: 'Montserrat';
	                     font-weight: 500
	                  }

	                  .tracklist-card__progress .progress-bar {
	                      background-color: #c14343;
	                  }

	                  .tracklist-card__progress:after {
	                      content: "";width: 15px;
	                      height: 15px;
	                      background: #c14343;
	                      border-radius: 100%;
	                      position: absolute;
	                      left: 25%;
	                      top: -6px;
	                      z-index: 99
	                  }

	                  .tracklist-card__progress {
	                      position: relative;
	                  }`
              }</style>

                </div>
              )
           })}
        </div>
	)
}

export default TrackCurrent;