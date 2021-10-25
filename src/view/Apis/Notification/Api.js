import "../../../../config";
import { AsyncStorage } from "react-native";


export default{


    getNotifications:async (user_id)=>{


        const req = await fetch(`${BASE_API}/notifications/get`,{

            method: 'POST',
            headers:{

                Accept: 'application/json',
                'Content-Type': 'application/json' 

            },

            body: JSON.stringify({user_id})

        });

        const json = await req.json();
    
     
        return json;
       
    },

    removeNotification:async(id_notification) =>{


        const token = await AsyncStorage.getItem('token');
       
        const req =  await fetch(`${BASE_API}/notifications/remove`,{
             
        method: 'POST',
        headers:{

            Accept: 'application/json',
            'Content-Type': 'application/json' 

        },

        body: JSON.stringify({token,id_notification})

        });
        
        const json = await req.json();
       
        return json;
        
    
    }

        


};