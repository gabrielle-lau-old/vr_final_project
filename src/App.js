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
                        obj: asset('/Loral-1300Com-obj/Loral-1300Com-main.obj'),
                        mtl: asset('/Loral-1300Com-obj/Loral-1300Com-main.mtl')
                    }}
                    style={{
                        transform: [
                            { translate: [3, 0, -10] },
                            { scale: 0.01 },
                            { rotateX: 30 },
                            { rotateY: -45 } 
                        ]
                    }}
                />
                <Model 
                    source={{
                        obj: asset('/house/Budynek_5.obj')
                        // mtl: asset('/baymax/Bigmax_White_OBJ.mtl')
                    }}
                    style={{
                        transform: [
                            { translate: [5, -1, -3] },
                            // { translate: [-1.75, -0.5, -0.5] },
                            { scale: 0.5 },
                            { rotateY: 180 } 
                        ]
                    }}
                />
            </View>
        );
    }
};
