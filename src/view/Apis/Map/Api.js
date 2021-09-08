import "../../../../config";
import { AsyncStorage } from "react-native";

export default{

    registerEvent:async (type,status,latitude,longitude,information,animal_id,user_id)=>{
       
       
        const req = await fetch(`${BASE_API}/events`,{

            method: 'POST',
            headers:{

                Accept: 'application/json',
                'Content-Type': 'application/json' 

            },

            body: JSON.stringify({type,status,latitude,longitude,information,animal_id,user_id})

        });

        const json = await req.json();
        

        return json;

    },

    getEvents:async () =>{

        const token = await AsyncStorage.getItem('token');
        const req =  await fetch(`${BASE_API}/events/get`,{

        method: 'POST',
        headers:{

            Accept: 'application/json',
            'Content-Type': 'application/json' 

        },

        body: JSON.stringify({token})

        });
        
        const json = await req.json();
       
        return json;

    }

};