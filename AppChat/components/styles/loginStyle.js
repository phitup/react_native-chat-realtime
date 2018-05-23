import React , {Component} from 'React';
import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:null,
        height:null,
        alignItems:'center',
        justifyContent:'center',
        resizeMode:'stretch'
    },
    topContainer:{
        flex:0.3
    },
    logo:{
        width:170,
        height:170,
        resizeMode:'contain',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: -80,
        right: 0,
    },
    bottomContainer:{
        flex:0.7,
        width:330
    },
    bottomText:{
        borderWidth:1,
        height:40,
        color:'rgba(17, 43, 43, 0.69)',
        borderColor:'transparent',
        fontSize:12,
        backgroundColor:'#ffffff',
        borderBottomWidth: 0.4,
        borderBottomColor: 'rgba(45, 240, 211, 0.27)',
    },
    register:{
         fontStyle:'italic',
         fontSize:12,
         alignSelf:'flex-end',
         margin:5,
         backgroundColor:'transparent'
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        padding:8,
        backgroundColor:'lightblue',
    },
    buttonText:{
        fontSize:17,
        color:'white'
    },
    connect:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:5
    },
    connectLine:{
        height:2,
        backgroundColor:'rgba(0,0,0,0.3)',
        flex:1
    },
    connectText:{
        backgroundColor:'transparent',
        fontSize:12,
        padding:5
    },
    connects:{
        flex:1,
        backgroundColor:'rgba(0,0,0,0.6)',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        padding:5,
        margin:5
    },
    connectImage:{
        width:12,
        height:12,
        resizeMode:'contain'
    },
    connectsText:{
        color:'white',
        fontSize:12,
        paddingLeft:5
    },
});

export default styles;