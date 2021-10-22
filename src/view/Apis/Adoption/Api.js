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

  

    Adoption:async (name,sex,animals_id,age,species,breed) =>{

        const req = await fetch(`${BASE_API}/adocaos`,{

            method: 'POST',
            headers:{

                Accept: 'application/json',
                'Content-Type': 'application/json' 

            },

            body: JSON.stringify({name,sex,animals_id,age,species,breed})

        });

        const json = await req.json();

        return json;

    },
    
    getAdoption:async () =>{

        const token = await AsyncStorage.getItem('token');
        //const id_users = await AsyncStorage.getItem('id');
        //id_users = 2;
        const req =  await fetch(`${BASE_API}/adocaos/get`,{
        
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