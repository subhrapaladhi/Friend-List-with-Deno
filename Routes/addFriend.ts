import {Friend} from '../helpers/dbconnect.ts';

export const addFriend = async(context: any) => {
    try{
        let body: any = await context.request.body()
        const {name, pno, email} = body.value;

        const id = await Friend.insertOne({
            name: name,
            pno: pno,
            email: email
        });
        context.response.body = id;
        context.response.status = 200;
    } catch(e) {
        console.log(e);
    }
}