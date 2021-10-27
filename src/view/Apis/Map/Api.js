import "../../../../config";
import { AsyncStorage } from "react-native";


export default{


    registerEvent:async (type,status,photos,latitude,longitude,information,animal_id,user_id)=>{

       
        const req = await fetch(`${BASE_API}/events`,{

            method: 'POST',
            headers:{

                Accept: 'application/json',
                'Content-Type': 'application/json' 

            },

            body: JSON.stringify({type,status,photos,latitude,longitude,information,animal_id,user_id})

        });

        const json = await req.json();
       
 
        return json;
       
    },

        

    UploadImageEvents:async (formData)=>{

        
             
        const req = await fetch(`${BASE_API}/events/uploadImage`,{

                method: 'POST',
                headers:{

                        Accept: 'application/json',
                        'Content-Type': 'multipart/form-data' 

                },

                    
                body: formData
                   
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

    },

        
    getEventsById:async () =>{

        const token = await AsyncStorage.getItem('token');
        const req =  await fetch(`${BASE_API}/events/getbyId`,{

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
    getEventsOptions:async (option,typeOption) =>{

        const token = await AsyncStorage.getItem('token');
        const req =  await fetch(`${BASE_API}/events/getOptions`,{
             
        method: 'POST',
        headers:{

            Accept: 'application/json',
            'Content-Type': 'application/json' 

        },

        body: JSON.stringify({token,option,typeOption})

        });
        
        const json = await req.json();
     
        return json;

    },
    removeEvent:async(id_event,user_id) =>{

        const token = await AsyncStorage.getItem('token');
       
        const req =  await fetch(`${BASE_API}/events/remove`,{
             
        method: 'POST',
        headers:{

            Accept: 'application/json',
            'Content-Type': 'application/json' 

        },

        body: JSON.stringify({token,id_event,user_id})

        });
        
        const json = await req.json();
       
        return json;

    
    },

    //********************************************************** */

    registerEventResolved:async(user_id,user_id_event,event_id,status,type) => {

        const token = await AsyncStorage.getItem('token');
        
        const req =  await fetch(`${BASE_API}/resolvedevents`,{
             
        method: 'POST',
        headers:{

            Accept: 'application/json',
            'Content-Type': 'application/json' 

        },

        body: JSON.stringify({token,user_id,user_id_event,event_id,status,type})

        });
        
        const json = await req.json();
       
        return json;

    },

    UpdateEvent:async(information,status,id_event,type,id_animal) =>{

        const token = await AsyncStorage.getItem('token');
       
        const req =  await fetch(`${BASE_API}/events/update`,{
             
        method: 'POST',
        headers:{

            Accept: 'application/json',
            'Content-Type': 'application/json' 

        },

        body: JSON.stringify({token,information,status,id_event,type,id_animal})

        });
        
        const json = await req.json();
       
        return json;

    
    },
    searchEvent:async(search) =>{

        const token = await AsyncStorage.getItem('token');
       
        const req =  await fetch(`${BASE_API}/events/searchEvent`,{
             
        method: 'POST',
        headers:{

            Accept: 'application/json',
            'Content-Type': 'application/json' 

        },

        body: JSON.stringify({token,search})

        });
        
        const json = await req.json();
       
        return json;

    
    },


};