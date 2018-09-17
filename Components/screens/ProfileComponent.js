import React, { Component } from "react";
import {
    View, TouchableWithoutFeedback, StatusBar, TextInput, 
    Text, SafeAreaView, Keyboard, TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions, Platform,
    FlatList, ScrollView
} from "react-native";

import { Container, Content, Header, Left, Body, Right, Segment, Button } from 'native-base';
var { height, width } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';

class ProfileComponent extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-person" style={{ color: tintColor }} />
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.profilePicWrap}>
                        <Image source={require('../../assets/images/avt.jpg')}  style={styles.profilePic}/>
                    </View>
                    <Text style={styles.name}>Tuấn AnhNguyễn</Text>
                    <Text>ID: 39083091</Text>
                </View>
                <View style={styles.bar}>
                    <View style={[styles.barItem, styles.barSeparator]}>
                        <Text style={styles.barTop}>
                            890
                        </Text>
                        <Text style={styles.barBottom}>
                            Coin
                        </Text>
                    </View>
                    <View style={styles.barItem}>
                        <Text style={styles.barTop}>
                            890
                        </Text>
                        <Text style={styles.barBottom}>
                            Điểm thưởng
                        </Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={styles.containerBtn}>
                        <Text style={styles.titleGr}>Tài khoản</Text>
                        <TouchableOpacity>
                            <View style={styles.button}>
                                <Text style={styles.buttonTextLeft}>
                                    <Icon name="ios-information-circle" size={24} color="#53d7e4" />
                                    <Text style={{paddingLeft: 10}}> Thông tin cá nhân</Text>
                                </Text>
                                <Text style={styles.buttonTextRight}>
                                    <Icon name="ios-arrow-forward" size={24} />
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.button}>
                                <Text style={styles.buttonTextLeft} >
                                    <Icon name="logo-usd" size={24} color="#fad68a"/>
                                    <Text >  Nạp thẻ</Text>
                                </Text>
                                <Text style={styles.buttonTextRight}>
                                    <Icon name="ios-arrow-forward" size={24} />
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.button}>
                                <Text style={styles.buttonTextLeft}>
                                    <Icon name="ios-compass" size={24} color="#faaaf3" />
                                    <Text> Ngôn ngữ</Text>
                                </Text>
                                <Text style={styles.buttonTextRight}>
                                    <Icon name="ios-arrow-forward" size={24} />
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.button}>
                                <Text style={styles.buttonTextLeft}>
                                    <Icon name="ios-log-out" size={24} color="#c5c5c5" />
                                    <Text > Đăng xuất</Text>
                                </Text>
                                <Text style={styles.buttonTextRight}>
                                    <Icon name="ios-arrow-forward" size={24} />
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}
export default ProfileComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        backgroundColor: '#4267b2',
    },
    profilePicWrap: {
        width: 180,
        height: 180,
        borderRadius: 90,
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 15,
    },
    profilePic:{
        width: 150,
        height: 150,
        alignSelf: 'stretch',
        borderRadius: 75,
        borderColor: '#fff',
        borderWidth: 4
    },
    name: {
        marginTop: 15,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    },
    bar: {
        borderTopColor: '#fff',
        borderTopWidth: 4,
        flexDirection: 'row',
        backgroundColor: 'mediumseagreen',
    },
    barSeparator: {
        borderRightWidth: 4,
    },
    barItem: {
        flex: 1,
        padding: 18,
        alignItems: 'center',
    },
    barTop: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    barBottom: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold'
    },
    titleGr:{
        backgroundColor: '#f5f5f5',
        padding: 10,
        fontSize: 16,
        color: '#6b6b6b',
        fontWeight: 'bold'
    }, 
    containerBtn:{
        borderTopColor: '#000',
        borderTopWidth: 1,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderBottomColor: '#f1f1f1',
        borderBottomWidth: 1,
    },
    buttonTextLeft: {
        color: '#000',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextRight:{
        color: '#d6d7d9',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
    }
});