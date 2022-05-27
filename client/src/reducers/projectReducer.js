import { GET_PROJECT_FAILED, GET_PROJECT_LOADING, GET_PROJECT_SUCCESS } from "../actions/projectTypes"
const initState = {
    projectList: [],
    loading: false,
    errors:null
}
const projectReducer = (state = initState, {type, payload}) =>{
    switch (type) {
        case  GET_PROJECT_LOADING: 
            return {...state, loading:true}
        case GET_PROJECT_SUCCESS: 
            return {...state, projectList: payload, loading: false, errors: false};
        case GET_PROJECT_FAILED:  
        return {...state, loading: false, errors: payload};    

        default:
            return state;
    }
}
export default projectReducer;