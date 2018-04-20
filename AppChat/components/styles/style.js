import React , {Component} from 'React';
import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    head:{
        flex:1,
        backgroundColor:'pink',
        justifyContent: 'center',
        alignItems: 'center',
    },
    center:{
        flex:4,
        backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerBottom:{
        flex:1,
        backgroundColor:'gray',
        flexDirection:'row'
    },
    bottom:{
        flex:1,
        backgroundColor:'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerBottomView:{
        flex:1,
        borderRightColor:'black',
        borderRightWidth:1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    /*centerBottomView1:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },*/
    centerBottomText:{
        fontSize:80
    },
    text:{
        fontSize:40
    },
    textHead:{
        fontSize:20,
    },
    textCenter:{
        fontSize:200,
    },
});

export default styles;