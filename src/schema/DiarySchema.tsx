import Realm, { ObjectSchema } from 'realm'

export const DiarySchema = {

    name: 'Diary',
    properties: {
        title: 'string',
        content: 'string'
    },
};



export const addDiary = async ({ title, content }: { title: string, content: string }) => {
    try {
        const realm = await Realm.open({ schema: [DiarySchema] } as any)

        realm.write(() => {
            realm.create('Diary', { title, content });
        });
        console.log('Diary added!');

    } catch (e) {
        console.log(e);
    }

}

export const getDiaries = async () => {

    try {
        const realm = await Realm.open({ schema: [DiarySchema] } as any)
        return realm.objects('Diary');

    } catch (e) {
        console.log(e);
        return []

    }
}
