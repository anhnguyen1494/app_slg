import React, { Component } from "react";
import {
    View,
    Text, Image,
    StyleSheet,
    ScrollView
} from "react-native";

import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base'
import CardComponent from '../CardComponent'

class HomeTab extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{ color: tintColor }} />
        )
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
                    <CardComponent title="[Sự Kiện] Khai Mở Máy Chủ S23 - Ân Thiên Chính  lúc 10h ngày 07/09" 
                        imageSource="https://store-slg.cdn.vccloud.vn/dauhiep/news/dh_s23_khaimo_6-9.jpg"
                        created_at="06/09/2018 16:37"
                    />
                    <CardComponent title="Chuỗi sự kiện tuần 1 tháng 09/2018" 
                        imageSource="https://store-slg.cdn.vccloud.vn/dauhiep/news/dh_skhot_1-8.jpg"
                        created_at="04/09/2018 15:55"
                    />
                    <CardComponent title="[Thông Báo] Lịch Gộp Server Đợt 3" 
                        imageSource="https://store-slg.cdn.vccloud.vn/dauhiep/news/dh_ghepsv_1-8.jpg"
                        created_at="04/09/2018 11:34"
                    />
                </Content>
            </Container>
        );
    }
}
export default HomeTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});