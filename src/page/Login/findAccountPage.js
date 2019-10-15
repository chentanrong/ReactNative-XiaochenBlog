
import React, { PureComponent,Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class FindAccountPage extends Component {

    static navigationOptions = {
        headerTitle: '密码找回'
    };

    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }

    render() {
        return (<View>
            <Text style={{ fontSize: 36 }}>密码找回</Text>
        </View>);
    }
}