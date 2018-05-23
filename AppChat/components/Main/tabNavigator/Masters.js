import React , { Component } from 'react';
import {View , Text , ListView ,Image ,TouchableOpacity} from 'react-native';
import styles from '../../styles/MastersStyle';
// import { SearchBar } from 'react-native-elements'

export default class Masters extends Component {

  constructor(props) {
    super(props);
    imageSource = require("../../images/imageUser.jpg");
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: ds.cloneWithRows(['Masters 1', 'Masters 2' , 'Masters 3' ,'Masters 4', 'Masters 5' , 'Masters 6' ,'Masters 7', 'Masters 8' , 'Masters 9']),
    };
  }

  onPress(data){
        alert("Chatting with " + data);
    }

  render(){
  
    return(
      // <SearchBar
      //     showLoading
      //     platform="android"
      //     placeholder='Search' />
        <ListView
          dataSource={this.state.dataSource}
          renderRow={data => (
            <TouchableOpacity style={styles.container} onPress={()=>{this.onPress(data)}}>
              <Image source={imageSource} style={styles.img} />
              <Text style={styles.name}>{data}</Text>
            </TouchableOpacity> 
            )}
      />
    );
  }
}

