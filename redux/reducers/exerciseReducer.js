const initialState = {
    items:[],
    programs:[],
    meals:[],
    guides:[]
};

const exercises=(state = initialState, action)=>{
    if(action.type==="SET_EXERCISES"){
        return{
            ...state,
            items: action.payload,
        };
    }
    if(action.type==="SET_GUIDES"){
        return{
            ...state,
            guides: action.payload,
        };
    }
    if(action.type==="SET_PROGRAMS"){
        return{
            ...state,
            programs: action.payload,
        };
    }
    if(action.type==="SET_MEALS"){
        return{
            ...state,
            meals: action.payload,
        };
    }
    return state   
};
export default exercises;