import React, { Component } from "react";
import {
    View,
    Text, Image,
    StyleSheet,
    ScrollView
} from "react-native";
import {
    StackNavigator
} from 'react-navigation';
import DetailBlogComponent from '../screens/DetailBlogComponent';

import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';
import CardComponent from '../CardComponent'
import { getBlogsFromServer } from '../../networking/Server';

class HomeTab extends Component {
    static navigationOptions = {
        header: null,
        headerBackTitle: 'Home'
    }
    constructor(props){
        super(props);
        this.state = {
            refreshing: false,
            blogsFromServer: [],
        };
    }
    componentDidMount(){
        getBlogsFromServer().then((blogs) => {
            this.setState({blogsFromServer: blogs});
        }).catch((error) => {
            this.setState({
                blogsFromServer: []
            });
        });
    }
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left><Icon name="ios-menu" style={{ paddingLeft: 10 }} /></Left>
                    <Body><Image source={require('../../assets/images/logo-slg.png')}/></Body>
                    <Right><Icon style={{ paddingRight: 10 }} name="ios-search" /></Right>
                </Header>
                <Content>
                    <View style={{ height: 100 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
                            <Text style={{ fontWeight: 'bold' }}>Games</Text>
                        </View>
                        <View style={{ flex: 3 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5
                                }}

                            >
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/images/games/45-45-DH.png')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/images/games/45-45-LV.jpg')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/images/games/45-45-OP.jpg')} />
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/images/games/45-45-TQTK.jpg')} />

                            </ScrollView>
                        </View>
                    </View>
                    {this.state.blogsFromServer.map(eachBlog => {
                        return <CardComponent key={eachBlog.id}
                            obj={eachBlog}
                            title={eachBlog.title}
                            imageSource={eachBlog.image}
                            created_at={eachBlog.date}
                            navigation={this.props.navigation}
                        />
                    })}
                </Content>
            </Container>
        );
    }
}
class HomeComponent extends Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )
    }
    render() {
        return (
            <BlogStackNavigator/>
        );
    }
}
export default HomeComponent;

const BlogStackNavigator = StackNavigator({
    Blogs: {
        screen: HomeTab,
    },
    Detail: {
        screen: DetailBlogComponent,
    }
})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});