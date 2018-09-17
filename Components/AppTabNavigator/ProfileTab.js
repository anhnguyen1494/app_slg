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
import ProfileComponent from '../screens/ProfileComponent';
import LoginComponent from '../screens/LoginComponent';
import RegisterComponent from '../screens/RegisterComponent';
import { createStackNavigator } from 'react-navigation';

class ProfileTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-person" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <ProfileNavigation/>
        );
    }
}
export default ProfileTab;

const ProfileNavigation = createStackNavigator({
    Login: {
        screen: LoginComponent,
        navigationOptions: {
            header: null
        }
    },
    Register: {
        screen: RegisterComponent,
        navigationOptions: {
            header: null
        }
    },
    Profile: {
        screen: ProfileComponent,
        navigationOptions: {
            header: null
        }
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});