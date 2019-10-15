/**
 * home/index.js
 */
import React, { PureComponent, Component } from 'react';
import { View, Text, Button, FlatList, StyleSheet, RefreshControl,TouchableOpacity ,DeviceEventEmitter} from 'react-native';

export default class Home extends Component {
    // 自定义当前页面路由配置，后面介绍的TabNavigator也使用这个对象中的属性

    static navigationOptions = {
        tabBarLabel: '首页'
    };

    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.state = {
            page: 1,
            size: 5,
            isRefresh: false,
            wzList: [{ key: 'Devin' },
            { key: 'Dan' },
            { key: 'Dominic' }]
        }
    }
    componentDidMount() {
        this.queryWz();
    }
    queryWz = data => {
        this.setState({ isRefresh: true })
        fetch(`http://192.168.22.32:8080/queryArticleOrderByDate?page=${this.state.page}&size=${this.state.size}`, {
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
                responseJson.data.items.forEach(element => {
                    element.key = element.articleId
                });
                this.setState({ wzList: responseJson.data.items, isRefresh: false })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _onItemClick = (item) => {
        if (item) {   
            this.props.navigation.navigate('ArticleDetail',{'articleId': item.articleId})        
        }

    }
    _separator() {
        return <View style={{ height: 1, backgroundColor: '#999999' }} />;
    }
    /**
    * 创建头部布局
    */
    _createListHeader() {
        return (
            <View style={styles.headView}>
                <Text style={{ color: 'white' }}>
                    头部布局
                </Text>
            </View>
        )
    }

    render() {
        return (<View style={styles.main}>

            <FlatList
                style={styles.main}
                data={this.state.wzList}
                onPress={this.onPressItem}
                refreshing={this.state.isRefresh}
                ItemSeparatorComponent={this._separator}
                refreshControl={
                    <RefreshControl
                        title={'Loading'}
                        colors={['red']}
                        refreshing={this.state.isRefresh}
                        onRefresh={() => {
                            this.setState({ wzList: [] })
                            this.queryWz();
                        }}
                    />
                }
                renderItem={({ item }) => <TouchableOpacity activeOpacity={0.5} onPress={() => this._onItemClick(item)}>
                    <View >
                        <Text style={styles.item}>{item.articleTitle}</Text>
                        <Text style={styles.item}>{item.articleDate}</Text>
                    </View>
                </TouchableOpacity>
                }
            />
        </View>);
    }
}



const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10
    },
    item: {
        height: 40
    }
});