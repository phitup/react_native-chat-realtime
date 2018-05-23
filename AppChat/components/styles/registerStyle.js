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
    bottomContainer:{
        flex:1,
        width:330,
        marginTop: 150,
    },
    bottomText:{
        borderWidth:1,
        height:50,
        color:'rgba(17, 43, 43, 0.69)',
        borderColor:'transparent',
        fontSize:17,
        backgroundColor:'#ffffff',
        borderBottomWidth: 0.4,
        borderBottomColor: 'rgba(45, 240, 211, 0.27)',
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        padding:8,
        backgroundColor:'lightblue',
    },
    buttonText:{
        fontSize:18,
        color:'white'
    },
});

export default styles;