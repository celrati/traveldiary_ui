
import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { getDiaries } from '../schema/DiarySchema';
interface Travelsprops {

}



export function Travels(props: Travelsprops) {

    const diaries = useState([])

    useEffect(() => {
        (async () => {
            const _diaries = await getDiaries()
            console.log(JSON.stringify(_diaries))
            }
        )()
    }, [])

    return (
        <View style={{ paddingTop: 30 }}>

        </View>
    )
}