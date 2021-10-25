export const initialState = {
     
     id:'', 
     avatar:"",
     name:"",
     email:"",
     phone:"",

};


export const UserReducer = (state,action) => {


        switch(action.type){

                case 'setAvatar':
                    return { ...state, avatar: action.payload.avatar };
                break;

                case 'setName':
                    return { ...state, name: action.payload.name };
                break; 
                case 'setEmail':
                    return { ...state, email: action.payload.email };
                break;
                case 'setPhone':
                    return { ...state, phone: action.payload.phone };
                break;   

                case 'setID':
                    return { ...state, id: action.payload.id };
                break;

                default:
                    return state;

        }



};