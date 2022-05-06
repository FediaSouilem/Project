import axios from 'axios';
import { ADD_PROJECT_FAILED, GET_PROJECT_FAILED, GET_PROJECT_LOADING, GET_PROJECT_SUCCESS } from './projectTypes';

export const getProjects = ()=> async (dispatch)=> {
try {
    dispatch({type: GET_PROJECT_LOADING})
    const res = await axios.get('/api/project');
    dispatch({type: GET_PROJECT_SUCCESS, payload: res.data });
} catch (error) {
    dispatch({type: GET_PROJECT_FAILED, payload: error})
    
}
};

export const addProjects = (projectInfo)=> async (dispatch)=> {
    try {

        const form= new FormData();
        form.append("file",projectInfo.file);
        form.append("upload_preset","xngwpbxp");
        console.log(form)
       const res = await axios.post("https://api.cloudinary.com/v1_1/deuxk4xyl/image/upload",form)
       projectInfo.image = res.data.secure_url;
        await axios.post('/api/project', projectInfo);
        dispatch(getProjects());
    } catch (error) {
        dispatch({type: ADD_PROJECT_FAILED, payload: error})
        
    }
    };