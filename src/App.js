import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  AmbientLight,
  StyleSheet,
  Model,
  Animated,
  VideoPano,
} from 'react-vr';
import Easing from 'react-vr';
import TextScene from './TextScene';
// import VideoScene from './VideoScene';

const AnimatedModel=Animated.createAnimatedComponent(Model);

export default class spaceman extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: 'edited_quad_low_res.webm',
            balloonRotZ:new Animated.Value(0),
        }
    }
    componentDidMount(){
        this.state.satelliteRot.setValue(0);
        Animated.timing(
            this.state.balloonRotZ,
            {
                toValue:-300,
                duration:10000,
                delay:2000,
                easing: Easing.inOut,
            }
        ).start();
    }
    render() {
        return (
            <View>
                <AmbientLight intensity={ 2.5 } />
                <VideoPano source={asset(this.state.background)}/>
                <TextScene />
                
                <AnimatedModel 
                    source={{
                        obj: asset('/balloon/balloon.obj'),
                        mtl: asset('/balloon/balloon.mtl')
                    }}
                    style={{
                        transform: [
                            // { translate: [6, 0, 10] },
                            {translateX:1},
                            {translateY:0},
                            {translateZ:1},
                            { scale: 0.01 },
                            { rotateX: 0 },
                            { rotateZ: this.state.balloonRotZ } 
                        ]
                    }}
                />


            </View>
        );
    }
};
