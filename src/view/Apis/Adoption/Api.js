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

    },
    getAdoptiona:async (id_animals) =>{

        const token = await AsyncStorage.getItem('token');
        //const id_users = await AsyncStorage.getItem('id');
        //id_users = 2;
        const req =  await fetch(`${BASE_API}/adocaos/getp`,{
        
        method: 'POST',
        headers:{

            Accept: 'application/json',
            'Content-Type': 'application/json' 

        },

        body: JSON.stringify({id_animals})

        });
        
        const json = await req.json();
        
        return json;

    },
    getAdoptionu:async (id_users) =>{

        const token = await AsyncStorage.getItem('token');
        //const id_users = await AsyncStorage.getItem('id');
        //id_users = 2;
        const req =  await fetch(`${BASE_API}/adocaos/getu`,{
        
        method: 'POST',
        headers:{

            Accept: 'application/json',
            'Content-Type': 'application/json' 

        },

        body: JSON.stringify({id_users})

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

    
    },
    removea:async(id_adoption) =>{

        const token = await AsyncStorage.getItem('token');
       
        const req =  await fetch(`${BASE_API}/adocaos/remove`,{
             
        method: 'POST',
        headers:{

            Accept: 'application/json',
            'Content-Type': 'application/json' 

        },

        body: JSON.stringify({token,id_adoption})

        });
        
        const json = await req.json();
       
        return json;

    
    }

};