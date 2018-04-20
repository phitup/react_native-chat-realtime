import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View , ListView ,ScrollView , TouchableOpacity ,TextInput
} from 'react-native';
import io from 'socket.io-client/dist/socket.io.js';



export default class App extends Component {

  constructor(props){
    super(props);
    this.socket = io("http://192.168.1.10:3000" , {jsonp:false});
    this.state={
      dataSource: new ListView.DataSource({rowHasChanged:(r1 , r2) => r1 !== r2}) ,
      text: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView style={styles.listview}
          dataSource = {this.state.dataSource}
          renderRow = {(rowData) =>
            <View>
              <Text>{rowData}</Text>
            </View>
          }
        />
        <View style={styles.container2}>
          <TextInput
            underlineColorAndroid = "rgba(0,0,0,0)"
            placeholder = "Messenger ..."
            style={styles.words}
            onChangeText = {
              (text) => this.setState({text})
            }
          />
          <TouchableOpacity style={styles.submit} onPress={() =>{
            this.socket.emit("Client-send-data" , this.state.text)
          }}>
            <Text>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  componentDidMount(){
    mang = [];
    
    this.socket.on("Server-send-data" ,(data) => {
      mang.push(data);
    
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(mang)
    });
  })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  container2: {
    flex: 0.05,
    backgroundColor: '#F5FCFF',
    flexDirection: 'row', 
  },
  listview: {
    flex:1,
    borderWidth:1,
  },
  words: {
    flex:5,
    height:30,
    padding: 3,
    borderWidth:1,
    marginLeft:2
  },
  submit: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    color: 'white',
  },
});
