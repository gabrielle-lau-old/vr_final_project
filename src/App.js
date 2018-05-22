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

} from 'react-vr';
import Easing from 'react-vr';
import TextScene from './TextScene';
import VideoScene from './VideoScene';

const AnimatedModel=Animated.createAnimatedComponent(Model);

export default class spaceman extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: 'space.jpg',
            balloonRotZ:new Animated.Value(0),
        }
    }
    componentDidMount(){
        this.state.satelliteRot.setValue(0);
        Animated.timing(
            this.state.balloonRotZ,
            {
                toValue:-3000,
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
                <Pano source={asset(this.state.background)}/>
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
                            { rotateY: this.state.balloonRotZ } 
                        ]
                    }}
                />

                <Model 
                    source={{
                        obj: asset('/house4/House4.obj'),
                        mtl: asset('/house4/House4.mtl')
                    }}
                    style={{
                        transform: [
                            { translate: [-1, -0.5, -0.75] },
                            { scale: 0.1 },
                            { rotateX: 0 },
                            { rotateY: -360 } 
                        ]
                    }}
                />
                <Model 
                    source={{
                        obj: asset('/house3/House3.obj'),
                        mtl: asset('/house3/House3.mtl')
                    }}
                    style={{
                        transform: [
                            { translate: [-1.5, -0.5, -0.5] },
                            { scale: 0.1 },
                            { rotateX: 0 },
                            { rotateY: -360 } 
                        ]
                    }}
                />
                <Model 
                    source={{
                        obj: asset('/Dog_model/Dog.obj'),
                        mtl: asset('/Dog_model/Dog.mtl')
                    }}
                    style={{
                        transform: [
                            { translate: [-1, -0.5, -0.3] },
                            // { translate: [-1.75, -0.5, -0.5] },
                            { scale: 0.07 },
                            { rotateY: 190 } 
                        ]
                    }}
                />
                    <Model 
                    source={{
                        obj: asset('/ladder/ladder.obj'),
                        mtl: asset('/ladder/ladder.mtl')
                    }}
                    style={{
                        transform: [
                            { translate: [0.5, -6, -2.5] },
                            // { translate: [-1.75, -0.5, -0.5] },
                            { scale: 2 },
                            { rotateY: 160 }, 
                            { rotateX: -20 }
                        ]
                    }}
                />
            </View>
        );
    }
};
