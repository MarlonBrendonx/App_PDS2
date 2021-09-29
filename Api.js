const BASE_API='http://71e7-191-243-71-76.ngrok.io/api';

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

    signIn:async (email,password) =>{
        
        const req = await fetch(`${BASE_API}/users/login`,{

            method: 'POST',
            headers:{

                Accept: 'application/json',
                'Content-Type': 'application/json' 

            },

            body: JSON.stringify({email,password})

        });

        const json = await req.json();

        return json;

    },

    signUp:async (name,email,phone,password) =>{

     
        const req = await fetch(`${BASE_API}/users`,{

            method: 'POST',
            headers:{

                Accept: 'application/json',
                'Content-Type': 'application/json' 

            },

            body: JSON.stringify({name,email,phone,password})

        });

        const json = await req.json();

        return json;

    }

};