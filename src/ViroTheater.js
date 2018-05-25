import React, { Component } from 'react';

/**
 * Pull in all imports required for the controls within this scene.
 */
import {
  AppRegistry,
  ViroScene,
  ViroVideo,
  ViroSceneNavigator,
  Viro360Image,
  ViroButton,
  ViroImage,
  ViroNode,
} from 'react-viro';

/**
 * Set all the image and asset references required in this scene.
 */
var buttonSize = 0.25;

/**
 * Several references to video sources (wether it be local or on AWS) stored in an array.
 */
var videos = [
  {uri:'https://s3-us-west-2.amazonaws.com/viro/Assets/Viro_Media_Video.mp4'},
  {uri:'https://s3-us-west-2.amazonaws.com/viro/Assets/ProductVideo.mp4'},
];


var ViroTheater = React.createClass({
  getInitialState() {
    return {
      videoPaused: false,
      videoIndex: 0,
    }
  },

  /**
   * Renders a scene that contains a 360 video and Video Controls.
   */
  render: function() {
    return (
        <ViroScene>
          <Viro360Image source={require('./res/dark_theatre.jpg')} />
          <ViroVideo source={videos[this.state.videoIndex]} 
                     position={[0, 3.9, -45]} scale={[44, 22, 1]}
            loop={true} paused={this.state.videoPaused} />
            {this._renderVideoControl()}
        </ViroScene>
    );
  },

  /**
   * Render a set of Video UI Controls. This includes (in the order displayed from left to right):
   *  Previous Video, Play/Pause, Next Video, and one to switch to 360 mode.
   */
  _renderVideoControl(){
    return(
        <ViroNode position={[0,-0.8,0]} opacity={1.0}>
            <ViroImage
                scale={[1.4, 1.2, 1]}
                position={[0, -0.27,-2.1]}
                source={require("./res/player_controls_container.png")}/>

            <ViroButton
                position={[-buttonSize-0.1,0,-2]}
                scale={[1, 1, 1]}
                width={buttonSize}
                height={buttonSize}
                source={require("./res/previous.png")}
                gazeSource={require("./res/previous_hover.png")}
                tapSource={require("./res/previous_hover.png")}
                onClick={this._playPreviousVideo}/>

            {this._renderPlayControl()}

            <ViroButton
                position={[buttonSize+0.1, 0,-2]}
                scale={[1, 1, 1]}
                width={buttonSize}
                height={buttonSize}
                source={require("./res/skip.png")}
                gazeSource={require("./res/skip_hover.png")}
                tapSource={require("./res/skip_hover.png")}
                onClick={this._playNextVideo}/>

          <ViroButton
              position={[0.0, -0.4 ,-2]}
              scale={[1, 1, 1]}
              width={0.5}
              height={0.5}
              source={require("./res/icon_360.png")}
              gazeSource={require("./res/icon_360_hover.png")}
              tapSource={require("./res/icon_360_hover.png")}
              onClick={this._launchTheatreScene} />
        </ViroNode>
    );
  },

  /**
   * Renders either the play or pause icon depending on video state.
   */
  _renderPlayControl(){
    if (this.state.videoPaused){
      return (
          <ViroButton
              position={[0,0,-2]}
              scale={[1, 1, 1]}
              width={buttonSize}
              height={buttonSize}
              source={require("./res/play.png")}
              gazeSource={require("./res/play_hover.png")}
              tapSource={require("./res/play_hover.png")}
              onClick={this._togglePauseVideo}/>
      );
    } else {
      return (
          <ViroButton
              position={[0,0,-2]}
              scale={[1, 1, 1]}
              width={buttonSize}
              height={buttonSize}
              source={require("./res/pause.png")}
              gazeSource={require("./res/pause_hover.png")}
              tapSource={require("./res/pause_hover.png")}
              onClick={this._togglePauseVideo}/>
      );
    }
  },

  _launchTheatreScene(){
    this.props.sceneNavigator.jump("Viro360Theater", {scene:require('./Viro360Theater')});
  },
  _togglePauseVideo() {
    this.setState({
      videoPaused: !this.state.videoPaused,
    })
  },

  /**
   * Play the previous video by setting the videoIndex.
   */
  _playPreviousVideo(){
    var currentVideo = this.state.videoIndex;
    if (currentVideo - 1 > -1){
      this.setState({
        videoIndex: (currentVideo - 1),
        videoPaused: false
      });
    }
  },

  /**
   * Play the next video by setting the videoIndex.
   */
  _playNextVideo(){
    var currentVideo = this.state.videoIndex;
    if (currentVideo + 1 < videos.length){
      this.setState({
        videoIndex: (currentVideo + 1),
        videoPaused: false
      });
    }
  },
});

module.exports = ViroTheater;