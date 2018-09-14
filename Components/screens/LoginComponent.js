import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';

export default class LoginComponent extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behavior='padding' style={styles.container}>
                    <TouchableWithoutFeedback style={styles.container} 
                            onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.infoContainer}>
                                <View style={styles.logoContainer}>
                                    <Image style={styles.logo}
                                        source={require('../../assets/images/logo-slg.png')}>
                                    </Image>
                                </View>
                                <TextInput style={styles.input}
                                    placeholder="Email hoặc Tên người dùng"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={()=> this.refs.txtPassword.focus()}
                                />
                                <TextInput style={styles.input} 
                                    placeholder="Mật khẩu"
                                    placeholderTextColor='rgba(255,255,255,0.8)'
                                    returnKeyType='go'
                                    secureTextEntry
                                    autoCorrect={false}
                                    ref={"txtPassword"}
                                />
                                <TouchableOpacity style={styles.buttLogin}>
                                    <Text style={styles.buttonText}>Đăng nhập</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttLoginFB}>
                                    <Text style={styles.buttonText}>Đăng nhập với Facebook</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttLoginGG}>
                                    <Text style={styles.buttonText}>Đăng nhập với Google</Text>
                                </TouchableOpacity>
                                <View style={styles.register}>
                                    <Text style={styles.recomText}>Bạn chưa có tài khoản?</Text>
                                    <TouchableOpacity>
                                        <Text style={styles.buttonTextRegister}>Đăng kí tại đây</Text>
                                    </TouchableOpacity>
                                </View>
                                
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'rgb(32, 53, 70)',
        backgroundColor: '#333232',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        // backgroundColor: 'red'
    },
    logo: {
        width: 123,
        height: 61,
        marginBottom: 25,
    },
    title: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 5,
        opacity: 0.9,
        marginBottom: 30,
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        // height: 325,
        padding: 15,
        // backgroundColor: 'red'
    },
    input: {
        height: 40,
        backgroundColor: '#4e4d4d',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    buttLogin: {
        backgroundColor: '#519a31',
        paddingVertical: 15,
        marginBottom: 5,
    },
    buttLoginFB: {
        backgroundColor: '#3b5998',
        paddingVertical: 15,
        marginBottom: 5,
    },
    buttLoginGG: {
        backgroundColor: '#dd4b39',
        paddingVertical: 15,
        marginBottom: 5,
    },
    buttonText: {
        textAlign: 'center',
        color :'#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    buttonTextRegister: {
        textAlign: 'center',
        color :'#fff',
        fontWeight: 'bold',
    },
    register:{
        flexDirection: 'row',
        fontSize: 14,
        marginTop: 5,
    },
    recomText: {
        color: '#b1b1b1'
    }
})