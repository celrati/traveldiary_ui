import { Button, Card, Icon, TabBar, WhiteSpace, WingBlank } from '@ant-design/react-native';
import React from 'react';
import { Text, View } from 'react-native';

interface Welcomeprops {

}

export function Welcome(props: Welcomeprops) {

    return (
        <View style={{ paddingTop: 30 }}>
            <WingBlank size="lg" style={{ marginBottom: 30}}>
                <Card>

                    <Card.Header
                        title="Welcome dear friends to TravelDiary"
                        thumbStyle={{ width: 70, height: 30 }}
                        extra=";)"
                    />
                    <Card.Body>
                        <View style={{ height: 100 }}>
                            <Text style={{ marginLeft: 16 }}>
                                You can store your travels or your ideas; or your ambitions
                                about traveling, or same place you want to visit sooner :)
                </Text>
                        </View>
                    </Card.Body>
                    <Card.Footer
                        content={<Button> enter </Button>}

                    />
                </Card>
                <Card style={{ marginBottom: 30 }}>

                    <Card.Header
                        title="Privacy"
                        thumbStyle={{ width: 70, height: 30 }}
                        extra=";)"
                    />
                    <Card.Body>
                        <View style={{ height: 100 }}>
                            <Text style={{ marginLeft: 16 }}>
                                All your data is inside your phone memory; so if you lost it,
                                its gone, we will implement the backup for the next version
                            </Text>
                        </View>
                    </Card.Body>
                    <Card.Footer
                        content={<Button type="primary"> settings </Button>}

                    />
                </Card>
            </WingBlank>
            <WhiteSpace size="lg" />

        </View>
    )
}