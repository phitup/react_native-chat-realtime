import React , { Component } from 'react';
import { View , Text , ScrollView , StyleSheet ,ListView , TextInput ,TouchableOpacity,
  Image

} from 'react-native'; 

export default class Comment extends Component{

  constructor(props){
    super(props);
    mang = [];
    users = require('../images/imageUser.jpg');
    send = require('../../images/icon/send.png');
    plane = require('../../images/icon/sendMessage.png');
    this.state={
      dataSource: new ListView.DataSource({rowHasChanged:(r1 , r2) => r1 !== r2}) ,
      comment: '',      
    };
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.container1}>
        <ListView style={styles.listview}
          dataSource = {this.state.dataSource}
          renderRow = {(rowData) =>
            <View style={styles.imageText}>
              <Image source={users} style={styles.image} />
              <Text style={styles.lstviewView}>{rowData}</Text>
            </View>
          }
        />
        </View>
        <View style={styles.textinput}>
          <TextInput placeholder="..." underlineColorAndroid={'transparent'} style={styles.text} 
              onChangeText = {
                (comment) => this.setState({comment})
          } />
          <TouchableOpacity style={styles.submit} onPress={() => this.event()}>
              <Image source={send} style={{height:20 , width:20 , backgroundColor:'#fff', marginLeft:5, marginTop:5}} />
            </TouchableOpacity>
        </View>
      </View>
    );
  }

  event(){
    
    mang.push(this.state.comment);
    
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(mang)
    });
  }
  

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  container1:{
    backgroundColor:'#eff0f1',
  },
  listview:{
    flex:0.9,
    margin: 10,
    
  },
  lstviewView:{
    borderRadius:100,
    padding: 5,
    marginLeft: 5,
    backgroundColor:'#fff',
  },
  textinput:{
    flex:0.1,
    flexDirection: 'row',
    marginLeft:5
  },
  imageText:{
    flexDirection: 'row',
    marginTop: 5,
  },
  submit:{
    backgroundColor: '#fff',
  },
  text:{
    flex:0.8,
    height:30,
    borderWidth: 2.5,
    borderRadius: 100,
    borderColor: 'lightgray',
  },
  image:{
    height:30,
    width:30,
    borderRadius:100
  }
});