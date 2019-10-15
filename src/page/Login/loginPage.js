
import React, { PureComponent, Component } from 'react';
import { View, Text, Button, ToastAndroid, StyleSheet, TextInput } from 'react-native';

export default class LoginPage extends Component {

    static navigationOptions = {
        headerTitle: "登录"
    };

    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = { name: "chentanrong", password: "123456" }
    }

    login = () => {

        fetch('http://192.168.22.32:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state),
            mode: 'cors',
            credentials: 'same-origin'
        })
            .then((response) =>
                response.json()
            )
            .then((responseJson) => {
                if (responseJson.success) {
                    ToastAndroid.show(responseJson.message, ToastAndroid.SHORT);
                }
                this.props.navigation.navigate('Main')
            })
            .catch((error) => {
                console.error(error);
            });

    }


    render() {
        return (<View          style={styles.vertical}>

            <TextInput
                style={styles.height}
                placeholder="用户名"
                textContentType="username"
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
            />
            <TextInput
                style={styles.height}
                placeholder="密码"
                textContentType="password"
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
            />

            <Button
                style={styles.height}
                title="登录"
                onPress={() => this.login()} />

            <View style={styles.row}>
                <Button
                    style={styles.button}
                    title="注册"
                    color="#841584"
                    onPress={() => this.props.navigation.navigate('Reg')} />

                <Button
                    style={styles.button}
                    title="密码找回"
                    color="#841584"
                    onPress={() => this.props.navigation.navigate('FindAccount')} />
            </View>
        </View >
        );
    }
}

const styles = StyleSheet.create({
    height: {
        height: 40,
        margin: 20
    },
    vertical:{
        flex: 1,
        flexDirection: 'column',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    button: {
        width: 80
    }
})
