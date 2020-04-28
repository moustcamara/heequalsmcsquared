import Link from 'next/link';
import { getHomePageAPI, getBlogPostsAPI } from '../api';
// We create this in just a tick
import { linkResolver } from '../helpers';

import { RichText } from 'prismic-reactjs';

import MetaTags from 'react-meta-tags';


import React, { Component } from 'react'

import ProfileCard from '../components/ProfileCard.js';
import TracksCardAlt from '../components/TracksCardAlt.js';

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
                 <MetaTags>
                    <title>He = MC² | New Jersey Music Producer</title>
                    <meta name="description" content="Contact for music production inquiries." />
                    <meta property="og:title" content="He = MC² | New Jersey Music Producer" />
                    <meta property="og:image" content="https://cdn.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMTQ4NDU5L2ltYWdlL042ZmppbE11MWlXci9pMzZqdm1mZnQucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6bnVsbCwid2lkdGgiOjIwMCwiaGVpZ2h0IjoyMDB9fX0=" />
                    <link rel="icon" type="image/png" href="https://cdn.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMTQ4NDU5L2ltYWdlL042ZmppbE11MWlXci9pMzZqdm1mZnQucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6bnVsbCwid2lkdGgiOjIwMCwiaGVpZ2h0IjoyMDB9fX0=" sizes="32x32" />
                    <link rel="icon" type="image/png" href="hhttps://cdn.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMTQ4NDU5L2ltYWdlL042ZmppbE11MWlXci9pMzZqdm1mZnQucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6bnVsbCwid2lkdGgiOjIwMCwiaGVpZ2h0IjoyMDB9fX0=" sizes="16x16" />
                </MetaTags>
                 <div className="row mx-0">
                    {homepage.data.body.map(slice => slice.slice_type == "profile_card" && <ProfileCard profile={slice.primary} />)}              
                    {homepage.data.body.map(slice => slice.slice_type == "tracklist" && <TracksCardAlt />)}  
                 </div>



                    <audio ref={ref => (this.player = ref)} />
                </div>
              ))}
        </DefaultLayout>
    )
  }
}


export default Index;