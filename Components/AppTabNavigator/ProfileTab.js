import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    FlatList
} from "react-native";

import { Container, Content, Icon, Header, Left, Body, Right, Segment, Button } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
var { height, width } = Dimensions.get('window');

import CardComponent from '../CardComponent'

var images = [
    require('../../assets/feed_images/1.jpg'),
    require('../../assets/feed_images/2.jpg'),
    require('../../assets/feed_images/3.png'),
    require('../../assets/feed_images/4.jpg'),
    require('../../assets/feed_images/5.jpg'),
    require('../../assets/feed_images/6.jpg'),
    require('../../assets/feed_images/7.jpg'),
    require('../../assets/feed_images/8.png'),
    require('../../assets/feed_images/9.jpg'),
    require('../../assets/feed_images/10.jpg'),
    require('../../assets/feed_images/11.jpg'),
    require('../../assets/feed_images/12.jpg'),
]

class ProfileTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-person" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={{ paddingLeft: 10, paddingLeft: 10 }}>
                    <Left>
                        <Icon name="md-person-add" />
                    </Left>
                    <Right>
                        <EntypoIcon name="back-in-time" style={{ fontSize: 32 }} />
                    </Right>
                </Header>
                <Content>
                    <Text>Profile</Text>
                </Content>
            </Container>
        );
    }
}
export default ProfileTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});