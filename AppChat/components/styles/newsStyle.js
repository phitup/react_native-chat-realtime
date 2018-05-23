import React , {Component} from 'React';
import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'lightgray',
    },
    topScreen:{
        flex:0.2,
        backgroundColor:'white',
        paddingBottom: 8,
    },
    mediumScreen:{
        flex:0.7,
        marginTop: 20,
        backgroundColor: 'white',
    },
    bottomScreen:{
        flex:0.1,
        height:10,
        backgroundColor:'#fff'
    },
    imageName:{
        flex:0.2,
    },
    nameUser:{
        flex:0.8,
        justifyContent:'center',
    },
    nameText:{
        flexWrap: 'wrap',
        fontSize: 20,        
    },
    status:{
        flex:0.3,
    },
    topScreen1:{
        flex:0.7,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
    topScreen2:{
        flex:0.1,
        marginTop: 3,
        flexDirection: 'row',
    },
    mediumScreen2:{
        flex:0.9,
        marginTop: 20,
        backgroundColor: 'white',
    },
    imageUSer:{
        height:50,
        width:50,
        marginTop: 7,
        borderWidth: 1,
        borderRadius: 100,
    },
    imageUSer1:{
        height:50,
        width:50,
        borderWidth: 1,
        borderRadius: 100,
    },
    functionStatus:{
        flex:1,
        flexDirection: 'row',
        paddingTop: 3,
    },
    textfunctionStatus:{
        height:32,
        width:100,        
        backgroundColor:'#f6f7f9',
        paddingLeft: 10,
        paddingTop: 6,
        borderRadius: 100,
    },
    imageIcons:{
        marginTop: 6,
        marginLeft: 21,
        height:20,
        width:20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextStatus:{
        height:32,
        width:100,        
        paddingLeft: 10,
        paddingTop: 6,
    },
    contentPost:{
        flex:0.2,
        flexWrap: 'wrap',
        paddingLeft: 4,
        paddingRight: 3,
    },
    imagePost:{
        flex:0.5,
        alignItems: 'center',
    },
    LikeandCmt:{
        flex:0.2,
        flexDirection: 'row',
        backgroundColor:'#f6f7f9',
    },
    Comment:{
        flex:0.1
    },
    ImageandText:{
        flex:1,
        marginLeft: 5,
        flexDirection: 'row',
        backgroundColor:'#f6f7f9',
        borderRadius: 100,
    },
    ImageandText1:{
        flex:1,
        marginLeft: 5,
        flexDirection: 'row',
        backgroundColor:'#f6f7f9',
        borderRadius: 100,
    },
    imageLike:{
        marginTop: 6,
        marginLeft: 21,
        height:20,
        width:20,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default styles;