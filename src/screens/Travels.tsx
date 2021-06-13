import { Button, Card, Icon, List, TabBar, WhiteSpace, WingBlank } from '@ant-design/react-native';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
interface Travelsprops {

}

const Item = List.Item;
const Brief = Item.Brief;

export function Travels(props: Travelsprops) {

    return (
        <View style={{ paddingTop: 30 }}>
            <ScrollView
                style={{ flex: 1, backgroundColor: '#f5f5f9' }}
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <List renderHeader={'basic'}>
                    <Item data-seed="logId">
                        标题文字点击无反馈，文字超长则隐藏，文字超长则隐藏
                    </Item>
                    <Item wrap>
                        文字超长折行文字超长折行文字超长折行文字超长折行文字超长折行
                    </Item>
                    <Item disabled extra="箭头向右" arrow="horizontal" onPress={() => { }}>
                        标题文字
                    </Item>
                </List>
            </ScrollView>
        </View>
    )
}