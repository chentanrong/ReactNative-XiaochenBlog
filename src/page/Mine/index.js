/**
 * mine/index.js
 */
import React, { PureComponent,Component } from 'react';
import { View, Text } from 'react-native';

export default class Mine extends Component {
    static navigationOptions = {
      // 设置 title
      tabBarLabel: "我的"
    };
  
    constructor(props) {
      super(props);
      this.navigation = props.navigation;
    }
  
    render() {
      return (<View>
        <Text style={{ fontSize: 36 }}>我的</Text>
    </View>);
    }
  }