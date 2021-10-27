import "../../../../config";
import { AsyncStorage } from "react-native";

export default{

    Update:async (strfield,field,token) =>{

        const req = await fetch(`${BASE_API}/users/update`,{

            method: 'POST',
            headers:{

                Accept: 'application/json',
                'Content-Type': 'application/json' 

            },

            body: JSON.stringify({strfield,field,token})

        });

        const json = await req.json();

 

        return json;

    },

    Remove:async (passwd,email) =>{

     
        const req = await fetch(`${BASE_API}/users/remove`,{

            method: 'POST',
            headers:{

                Accept: 'application/json',
                'Content-Type': 'application/json' 

            },

            body: JSON.stringify({passwd,email})

        });

        const json = await req.json();

 

        return json;

    },

    UploadImagePerfil:async (formData) =>{

        const req = await fetch(`${BASE_API}/users/uploadImagePerfil`,{

                method: 'POST',
                headers:{

                        Accept: 'application/json',
                        'Content-Type': 'multipart/form-data' 

                },

                    
                body: formData
                
        });

        const json = await req.json();
        

        return json;

    }

};