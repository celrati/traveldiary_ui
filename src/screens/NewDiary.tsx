import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button, Icon, Layout, Spinner, Input } from '@ui-kitten/components';
import { addDiary } from '../schema/DiarySchema';
interface NewDiaryProps {

}

const useInputState = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
};
const StarIcon = (props: any) => (
    <Icon {...props} name='star' />
);


export function NewDiary(props: NewDiaryProps) {

    const largeInputState = useInputState();
    const multilineInputState = useInputState();


    return (
        <View style={{ paddingTop: 30 }}>
            <Input
                style={styles.input}
                size='large'
                placeholder='enter a title..'
                {...largeInputState}
            />

            <Input
                multiline={true}
                style={styles.multiInput}
                textStyle={{ minHeight: 64, height: 400 }}
                placeholder='type your diary here :)'
                {...multilineInputState}
            />
            <Button style={styles.button} status='success'  onPress={  async () =>  await  addDiary({ title: 'hu', content: 'j' })} >
                add this travel to my diaries
            </Button>


        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 2,
    },
    multiInput: {
        marginVertical: 2,
        height: 400
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    button: {
        margin: 2,
    },
    indicator: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
