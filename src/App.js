import React from 'react';
import {
  asset,
  Pano,
  Text,
  View,
  AmbientLight,
  StyleSheet,
  Model,
} from 'react-vr';
import TextScene from './TextScene';

export default class spaceman extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background: 'space.jpg',
        }
    }

    render() {
        return (
            <View>
                <AmbientLight intensity={ 2.5 } />
                <Pano source={asset(this.state.background)}/>
                <TextScene />
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
                        obj: asset('/balloon/balloon.obj'),
                        mtl: asset('/balloon/balloon.mtl')
                    }}
                    style={{
                        transform: [
                            { translate: [6, 0, 10] },
                            { scale: 0.07 },
                            { rotateX: 0 },
                            { rotateY: 0 } 
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
            </View>
        );
    }
};
