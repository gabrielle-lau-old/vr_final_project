import React from 'react';
import { Text, View, StyleSheet, asset, Sound, VrButton} from 'react-vr';
    

export default class TextScene extends React.Component {


    render () {
        return (
            <View>
                <VrButton
                onClickSound={{ wav: asset('MONO-036.wav') }}
                >
                    <Text
                        style={{
                            backgroundColor: '#A482DF',
                            borderRadius: 0.3,
                            fontSize: 0.5,
                            fontWeight: '400',
                            paddingLeft: 0.2,
                            paddingRight: 0.2,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            transform: [
                                { translate: [-4, 1, -1] },
                                { scale: 0.5 },
                                { rotateY: 90 } 
                            ]
                        }}
                    >Click here for music
                    </Text>
                </VrButton>                
                <Text
                    style={{
                        backgroundColor: '#A482DF',
                        borderRadius: 0.3,
                        fontSize: 0.5,
                        fontWeight: '400',
                        paddingLeft: 0.2,
                        paddingRight: 0.2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [
                            { translate: [1, 2.5, -5] },
                            { scale: 0.5 }
                        ]
                    }}
                >Video</Text>
                <Text
                    style={{
                        backgroundColor: '#A482DF',
                        borderRadius: 0.3,
                        fontSize: 0.5,
                        fontWeight: '400',
                        paddingLeft: 0.2,
                        paddingRight: 0.2,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [
                            { translate: [-2.5, 0.5, -3] },
                            { scale: 0.25 }
                        ]
                    }}
                >Look down</Text>
            </View>
        )
    }
}