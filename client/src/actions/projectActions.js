import axios from 'axios';
import { ADD_PROJECT_FAILED, GET_PROJECT_FAILED, GET_PROJECT_LOADING, GET_PROJECT_SUCCESS } from './projectTypes';


export const getProject = ()=> async (dispatch)=> {
try {
    dispatch({type: GET_PROJECT_LOADING})
    const res = await axios.get('/api/project');
    dispatch({type: GET_PROJECT_SUCCESS, payload: res.data });
} catch (error) {
    dispatch({type: GET_PROJECT_FAILED, payload: error})
    
}
};

export const addProject = (projectInfo)=> async (dispatch)=> {
    try {
        const fileData = projectInfo.file
        const form= new FormData();
        form.append("project",{...afileData});
        // form.append("upload_preset","fediasouilem");
        console.log(projectInfo)
       const res = await axios.post("/api/project/upload",form)
       projectInfo.image = res.data;
        await axios.post('/api/project', projectInfo);
        dispatch(getProject());
    } catch (error) {
        dispatch({type: ADD_PROJECT_FAILED, payload: error}) 
    }
    };

    export const updateProject = (projectInfo)=> async (dispatch)=> {
        try {
            const form= new FormData();
        form.append("file",projectInfo.file);
        form.append("upload_preset","fediasouilem");
       const res = await axios.post("https://api.cloudinary.com/v1_1/deuxk4xyl/upload",form)
       projectInfo.image = res.data.secure_url;
    
            await axios.put(`/api/project/${projectInfo._id}`, projectInfo);
            dispatch(getProject());
        } catch (error) {
            dispatch({type: ADD_PROJECT_FAILED, payload: error}) 
        }
        };

        export const deleteProject = (projectId)=> async (dispatch)=> {
            try {
                await axios.delete(`/api/project/${projectId}`);
                dispatch(getProject());
            } catch (error) {
                dispatch({type: ADD_PROJECT_FAILED, payload: error}) 
            }
            };
        
    



