
import React, { PureComponent, Component } from 'react';
import { View, Text, Button, DeviceEventEmitter, StyleSheet, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import HTML from 'react-native-render-html'
import HTMLView from 'react-native-htmlview';
export default class ArticleDetail extends Component {

    static navigationOptions = {
        headerTitle: 'blog详情'
    };

    constructor(props) {
        super(props);
        const { navigation } = this.props;
        let id= navigation.getParam('articleId', '')
        this.state = {
            id,
            detail: {},
            loading: false
        }
    }

    componentDidMount() {
        this.queryData(this.state.id);
    }

    componentWillUnmount() {
      
    }

    queryData = (articleId) => {
        this.state.loading = true
        fetch(`http://192.168.22.32:8080//queryArticleById?id=${articleId}`, {
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
                if (responseJson.data) {
                    this.setState({ detail: responseJson.data })
                }
                this.state.loading = false

            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        let detail = this.state.detail;
        if (!this.state.loading) {
            return <Text>查询中...</Text>
        }
        return (<ScrollView style={styles.vertical}>

            <Text>  {detail.articleTitle}   </Text>
            <Text>  {detail.articleViews}   </Text>
            <Text>  {detail.articleDate}   </Text>
            {/* <WebView
                originWhitelist={['*']}
                source={ {html: detail.articleContent }}
            /> */}
            {/* <HTMLView value={detail.articleContent}/> */}
            <HTML
                html={detail.articleContent}
                tagsStyles
            />

        </ScrollView>);

    }
}


const styles = StyleSheet.create({

    vertical: {
        flex: 1,
        flexDirection: 'column',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    }
})
