import React, { Component } from "react";
import {
    View,
    Text, Image,
    StyleSheet,
    ScrollView, Linking, TouchableOpacity
} from "react-native";
import {
    StackNavigator
} from 'react-navigation';
import DetailBlogComponent from '../screens/DetailBlogComponent';

import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';
import CardComponent from '../CardComponent'
import { getBlogsFromServer } from '../../networking/Server';
import Swiper from 'react-native-swiper';

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
                                <TouchableOpacity onPress={()=>{
                                        Linking.openURL('https://dauhiep.slg.vn/');
                                    }}>
                                    <Thumbnail 
                                        style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                        source={require('../../assets/images/games/45-45-DH.png')} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{
                                        Linking.openURL('http://linhvuong.slg.vn/home/');
                                    }}>
                                    <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/images/games/45-45-LV.jpg')} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{
                                        Linking.openURL('http://op.slg.vn/home/');
                                    }}>
                                    <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/images/games/45-45-OP.jpg')} />
                                </TouchableOpacity>
                                
                                <TouchableOpacity onPress={()=>{
                                    Linking.openURL('http://tamquoctruyenky.vn/');
                                }}>
                                    <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('../../assets/images/games/45-45-TQTK.jpg')} />
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </View>
                <Content>
                    <Swiper style={swiperStyles.wrapper} showsButtons={true} autoplay dotStyle={{backgroundColor: '#fff'}}>
                        <View style={swiperStyles.slide}>
                            <Image style={swiperStyles.slideImage} source={require('../../assets/images/slider/All.jpg')}/>
                        </View>
                        <View style={swiperStyles.slide}>
                            <Image style={swiperStyles.slideImage} source={require('../../assets/images/slider/Dauhiep.jpg')}/>
                        </View>
                        <View style={swiperStyles.slide}>
                            <Image style={swiperStyles.slideImage} source={require('../../assets/images/slider/LV.jpg')}/>
                        </View>
                        <View style={swiperStyles.slide}>
                            <Image style={swiperStyles.slideImage} source={require('../../assets/images/slider/Op.jpg')}/>
                        </View>
                        <View style={swiperStyles.slide}>
                            <Image style={swiperStyles.slideImage} source={require('../../assets/images/slider/TQ.jpg')}/>
                        </View>
                    </Swiper>
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
const swiperStyles = StyleSheet.create({
    wrapper: {
        height: 210
    },
    slide: {
        flex: 1,
    },
    slideImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
})