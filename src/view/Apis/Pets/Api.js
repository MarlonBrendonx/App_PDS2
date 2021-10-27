import "../../../../config";
import { AsyncStorage } from "react-native";

export default{

    getPetsById:async (id_users) =>{

        const token = await AsyncStorage.getItem('token');
    
        const req = await fetch(`${BASE_API}/animals/get`,{

            method: 'POST',
            headers:{

                Accept: 'application/json',
                'Content-Type': 'application/json' 

            },

            body: JSON.stringify({token,id_users})

        });

        const json = await req.json();

      

        return json;

    },

    
};