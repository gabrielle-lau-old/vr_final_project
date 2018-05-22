import React from 'react';
import { 
    asset,
    AppRegistry,
    View,
    VideoPano,
    VideoControl,
    MediaPlayerState, 
} from 'react-vr';


export default class VideoSample360 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        playerState: new MediaPlayerState({autoPlay: true, muted: true}), // init with muted, autoPlay
      };
    }
    render() {
      return (
        <View>
          <VideoPano
            playerState={this.state.playerState}
            source={[
              asset('video.mp4', {format: 'mp4', layout: 'SPHERE'}),
            //   asset('video.webm', {format: 'webm', layout: 'SPHERE'}),
            ]}
          />
          <VideoControl
            style={{
              height: 0.2,
              width: 4,
              layoutOrigin: [0.5, 0.5, 0],
              transform: [{translate: [0, 0, -4]}],
            }}
            playerState={this.state.playerState}
          />
        </View>
      );
    }
  }
  