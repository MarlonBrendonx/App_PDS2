import "../../../../config";

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

    }

};