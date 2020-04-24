import React, { Component } from 'react';

import { RichText } from 'prismic-reactjs';



let TracksCardAlt = props => {


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
            `}</style>

            <iframe width="100%" height="800" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1038660490&color=%23040404&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            
            </div>
	     </div>
	)
}

export default TracksCardAlt;