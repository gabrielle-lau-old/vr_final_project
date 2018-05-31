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
                >Click here for video</Text>
            } else{
                return<Video
                        source={{uri:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                        style={{
                            height:3,
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
                                { translate: [-1.75, 2.5, -5] },
                                { scale: 0.5 },
                                { rotateY: 0 } 
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
                            { translate: [-4.5, 3.25, -5] },
                            { scale: 0.5 },
                            {rotateY:20}
                        ]
                    }}
                >Out-of-body Meditation</Text>
            </View>
        )
    }
}

// //Making the 360 video as background
// <VideoPano source={{
//   uri: 'file:///C:/Users/laumingyi/Documents/VR/vr_final_project/static_assets/edited_quad_low_res.webm',
// }} />