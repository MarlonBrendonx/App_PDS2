import "../../../../config";

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

        console.log(json);

        return json;

    },

};