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
        flex:1
    },
    logo:{
        width: 200,
        height:200 ,
        marginTop: 30,
        resizeMode:'contain'        
    },
    bottomContainer:{
        flex:1,
        width:330
    },
    bottomText:{
        borderWidth:1,
        height:40,
        color:'white',
        borderColor:'transparent',
        fontSize:12,
        backgroundColor:'rgba(0,0,0,0.3)',
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
        padding:5,
        backgroundColor:'rgba(226,39,44,0.5)',
    },
    buttonText:{
        fontSize:12,
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