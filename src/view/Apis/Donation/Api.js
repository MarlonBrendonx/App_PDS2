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

  

    Donation:async (title,sobre,users_id,link) =>{

        const req = await fetch(`${BASE_API}/donation`,{

            method: 'POST',
            headers:{

                Accept: 'application/json',
                'Content-Type': 'application/json' 

            },

            body: JSON.stringify({title,sobre,users_id,link})

        });

        const json = await req.json();

        return json;

    }

};