import {Friend} from '../helpers/dbconnect.ts';

export const getFriend: any = async(context: any)=> {
    try{
        let id: string = context.params.id;

        const data :any = await Friend.findOne({_id: {"$oid": id}});    
        if(data){
            context.response.body = data;
            context.response.status = 200;    
        }
        
    }
    catch(e){

    }
}
