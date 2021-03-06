import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class CardComponent extends Component {

    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Body>
                            <Text style={{fontWeight: '800'}}>{this.props.title} </Text>
                            <Text note>{this.props.created_at}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{uri: this.props.imageSource}} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
            </Card>
        );
    }
}
export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});