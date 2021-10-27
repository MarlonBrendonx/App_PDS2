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

  

    SignUpPets:async (name,sex,information,users_id,age,species,breed) =>{

        const req = await fetch(`${BASE_API}/animals`,{

            method: 'POST',
            headers:{

                Accept: 'application/json',
                'Content-Type': 'application/json' 

            },

            body: JSON.stringify({name,sex,information,users_id,age,species,breed})

        });

        const json = await req.json();

        return json;

    },
    getPets:async () =>{

        const token = await AsyncStorage.getItem('token');
        //const id_users = await AsyncStorage.getItem('id');
        id_users = 2;
        const req =  await fetch(`${BASE_API}/animals/get`,{
        
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
    remove:async(id_animals) =>{

        const token = await AsyncStorage.getItem('token');
       
        const req =  await fetch(`${BASE_API}/animals/remove`,{
             
        method: 'POST',
        headers:{

            Accept: 'application/json',
            'Content-Type': 'application/json' 

        },

        body: JSON.stringify({token,id_animals})

        });
        
        const json = await req.json();
       
        return json;

    
    }

};