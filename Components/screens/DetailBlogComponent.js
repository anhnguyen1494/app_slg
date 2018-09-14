import React, { Component } from "react";
import { 
    View, Text, ScrollView, Image, WebView,
    Platform, Dimensions, TouchableOpacity,
    StyleSheet, Share
} from "react-native";
import { getBlogDetailFromServer } from "../../networking/Server";
import HTML from 'react-native-render-html';
import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body, Button } from 'native-base';

export default class DetailBlogComponent extends Component {
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            blogDetailFromServer: '',
            title: ''
        };
    }
    componentDidMount(){
        getBlogDetailFromServer(this.props.navigation.state.params.id).then((blog) => {
            this.setState({blogDetailFromServer: blog});
        }).catch((error) => {
            this.setState({
                blogDetailFromServer: `<h1>${error}</h1>`
            });
        });
    }
    onClick() {
        Share.share({
            message: this.props.navigation.state.params.title,
            url: this.props.navigation.state.params.content,
            title: this.props.navigation.state.params.title
        }, {
            // Android only:
            dialogTitle: 'Share BAM goodness',
            // iOS only:
            excludedActivityTypes: [
            'com.apple.UIKit.activity.PostToTwitter'
            ]
        })
    }
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate("Blogs");
                        }}>
                            <Icon name="ios-arrow-back" style={{ paddingLeft: 10 }} />
                        </TouchableOpacity>
                    </Left>
                    <Body>
                        <Text style={{width:250, alignText: 'center'}}>{this.props.navigation.state.params.title}</Text>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={()=>{
                            this.onClick();
                        }}>
                            <Icon style={{ paddingRight: 10 }} name="ios-share" />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <ScrollView>
                    <HTML html={this.state.blogDetailFromServer} imagesMaxWidth={Dimensions.get('window').width}
                    />
                </ScrollView>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});