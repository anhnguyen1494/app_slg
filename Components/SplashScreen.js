import React, { Component } from "react";
import { 
    View, Text, Image,
    Platform,
    StyleSheet
} from "react-native";

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                        source={require('../assets/images/logo.png')}
                    >
                    </Image>
                    <Text style={styles.textLogo}>SLG</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        width: 100,
        height: 100,
    },
    textLogo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#3763ae',
        opacity: 0.9
    }
});