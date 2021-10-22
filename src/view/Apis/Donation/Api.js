import "../../../../config";
import { AsyncStorage } from "react-native";
export default{

    checkToken:async (token) =>{

        const req = await fetch(`${BASE_API}/users/checkToken`,{

            method: 'POST',
            headers:{

                Accept: 'application/json',
                'Content-Type': 'application/json' 

            },

            body: JSON.stringify({token})

        });

        const json = await req.json();

        console.log(json);

        return json;

    },

  

    Donation:async (sobre,users_id,link,title) =>{

        const req = await fetch(`${BASE_API}/doacaos`,{

            method: 'POST',
            headers:{

                Accept: 'application/json',
                'Content-Type': 'application/json' 

            },

            body: JSON.stringify({sobre,users_id,link,title})

        });

        const json = await req.json();

        return json;

    },
    getDonation:async () =>{

        const token = await AsyncStorage.getItem('token');
        //const id_users = await AsyncStorage.getItem('id');
        //id_users = 2;
        const req =  await fetch(`${BASE_API}/doacaos/get`,{
        
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