import Link from 'next/link';
import { getHomePageAPI, getBlogPostsAPI } from '../api';
// We create this in just a tick
import { linkResolver } from '../helpers';

import { RichText } from 'prismic-reactjs';


import React, { Component } from 'react'

import ProfileCard from '../components/ProfileCard.js';
import TracksCard from '../components/TracksCard.js';

/**
* As you can see we are importing our layout here,
* and below we wrap all of the page in it.
*/
import DefaultLayout from '../layouts';



function getTime(time) {
  if (!isNaN(time)) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
}


class Index extends React.Component {
     constructor(props) {
        super(props)



        this.setTrack = this.setTrack.bind(this);

        this.state = {
          value: null,
          selectedTrack: null,
          selectedTrackName:'default',
          selectedTrackNumber: null,
          selectedTrackFile: null,
          player: "stopped",
          currentTime: null,
          duration: null
        };

      }

      setTrack(trackName, trackFile, trackNumber) {

           this.setState({
                selectedTrack: null,
                selectedTrackName: trackName,
                selectedTrackFile: trackFile, //trackFile
                selectedTrackNumber: trackNumber,
                player: "playing", 
                duration: this.player.duration
           }, function () {
                console.log(this.state.selectedTrackNumber);
           });

            this.player.play();

      }
  


    componentDidMount() {
      this.player.addEventListener("timeupdate", e => {
        this.setState({
          currentTime: e.target.currentTime,
          duration: e.target.duration
        });
      });
    }

    componentWillUnmount() {
      this.player.removeEventListener("timeupdate", () => {});
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.state.selectedTrackFile !== prevState.selectedTrackFile) {
        let track = this.state.selectedTrackFile;

       // if (track) {
          this.player.src = track;
          this.player.play();
          this.setState({ player: "playing", duration: this.player.duration,  selectedTrackNumber: 'track-1'});
      //  }
      }
      if (this.state.player !== prevState.player) {
        if (this.state.player === "paused") {
          this.player.pause();
        } else if (this.state.player === "stopped") {
          this.player.pause();
          this.player.currentTime = 0;
          this.setState({ selectedTrackFile: null });
        } else if (
          this.state.player === "playing" &&
          prevState.player === "paused"
        ) {
          this.player.play();
        }
      }
    }


  static async getInitialProps() {
    const response = await getHomePageAPI({ pageSize: 1 });
     return {
      home: response.results
    };
  }

  render() {


    function handleChange(newValue) {
      setValue(newValue);
    }


    const currentTime = getTime(this.state.currentTime);
    const duration = getTime(this.state.duration);

    let tracklistData = this.props.home[0].data.body.find(slice => slice.slice_type == "tracklist").items;


    return (
        <DefaultLayout>
            {this.props.home.map(homepage => (
              <div>

                <div>
                  {this.state.player === "paused" && (
                    <button onClick={() => this.setState({ player: "playing" })}>
                      Play
                    </button>
                  )}
                  {this.state.player === "playing" && (
                    <button onClick={() => this.setState({ player: "paused" })}>
                      Pause
                    </button>
                  )}
                  {this.state.player === "playing" || this.state.player === "paused" ? (
                    <button onClick={() => this.setState({ player: "stopped" })}>
                      Stop
                    </button>
                  ) : (
                    ""
                  )}
                </div>
                {this.state.player === "playing" || this.state.player === "paused" ? (
                  <div>
                    {currentTime} / {duration}
                  </div>
                ) : (
                  ""
                )}

                }
                 <div className="row">
                    {homepage.data.body.map(slice => slice.slice_type == "profile_card" && <ProfileCard profile={slice.primary} />)}              
                    {homepage.data.body.map(slice => slice.slice_type == "tracklist" && <TracksCard setTrack={this.setTrack} state={this} trackSource={slice.items} />)}  
                 </div>



                    <audio ref={ref => (this.player = ref)} />
                </div>
              ))}
        </DefaultLayout>
    )
  }
}


export default Index;