import {Friend} from '../helpers/dbconnect.ts';

export const deleteFriend: any = async(context: any) => {
    try{
        let id :string = context.params.id;
        const result = await Friend.deleteOne({_id: {"$oid": id}});
        /*
        * result = 0 : data not found
        * result = 1 : data found and deleted
        */
        context.response.body = {result};
        context.response.status = 200;
    }

    catch(e){

    }
}