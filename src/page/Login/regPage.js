
import React, { PureComponent, Component } from 'react';
import { View, Text } from 'react-native';

export default class RegPage extends Component {

    static navigationOptions = {
        headerTitle: '注册'
    };

    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        return (<View>
            <Text style={{ fontSize: 36 }}>注册</Text>
        </View>);
    }
}