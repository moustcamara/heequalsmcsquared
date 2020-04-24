import React, { Component } from 'react';

import { RichText } from 'prismic-reactjs';



import TrackCurrent from '../components/TrackCurrent.js';
import TrackList from '../components/TrackList.js';

let TracksCard = props => {


	return (
		<div className="tracklist-card col-md-6 px-0">
          <div className="tracklist-card__inner mx-auto shadow">
            <style>{`       
               .tracklist-card {
                    background-color: #f7f7f7;
                    color: #fff;
                    background-image: url(https://www.transparenttextures.com/patterns/asfalt-light.png);
                }

                .tracklist-card__inner {
                    width: 90%;
                    margin-top: 50px
                }

                  .tracklist-card__current {
                      padding: 20px;
                      padding-top: 20px;
                      border-radius: 3px 3px 0px 0px;
                      background-color: #212121;
                  }
            `}</style>

              <TrackCurrent state={props.state} trackSource={props.trackSource} />
              <TrackList setTrack={props.setTrack} state={props.state} listSource={props.trackSource} />
            
            </div>
	     </div>
	)
}

export default TracksCard;