import React, { Component } from "react";
import {
    View, TouchableWithoutFeedback, StatusBar, TextInput, 
    Text, SafeAreaView, Keyboard, TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
    FlatList
} from "react-native";

import { Container, Content, Icon, Header, Left, Body, Right, Segment, Button } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
var { height, width } = Dimensions.get('window');

class ProfileComponent extends Component {

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
export default ProfileComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});