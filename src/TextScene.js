import React from 'react';
import { Text, View, StyleSheet, asset, Sound, VrButton, Video, VideoPano} from 'react-vr';
    
// renderItems is in camel case!
export default class TextScene extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            video: false,
        };
    }
    startVideo(){
        this.setState=({
            video: true,
        });
    }
    // must be 3 ===
    renderItems(){
        if (this.state.video===false){
            return<Text
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
                            { translate: [1, 2, -5] },
                            { scale: 0.5 },
                            { rotateY: -20 }
                        ]
                    }}
                >Video</Text>
            } else{
                return<Video
                        source={{uri:'/static_assets/fireworks.mov'}}
                        style={{
                            height:4,
                            width:3,
                            transform:[
                                {translate:[1, 2, -5]},
                               
                            ]
                        }}
                />
                
                
            }
        }
    

    render () {
        return (
            <View>


                <VrButton onClick={this.startVideo.bind(this)}>
                    {this.renderItems()}
                    
                </VrButton>

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
                            { translate: [-2.5, 0.5, -3] },
                            { scale: 0.25 }
                        ]
                    }}
                >Look down</Text>
            </View>
        )
    }
}

// //Making the 360 video as background
// <VideoPano source={{
//   uri: 'file:///C:/Users/laumingyi/Documents/VR/vr_final_project/static_assets/edited_quad_low_res.webm',
// }} />