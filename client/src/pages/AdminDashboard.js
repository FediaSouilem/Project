import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProject,deleteProject } from '../actions/projectActions';
import ProjectModal from '../components/ProjectModal';
import { FaTrashAlt} from "react-icons/fa";
import ProjectModalUpdate from '../components/projectModalUpdate';

const AdminDashboard = () => {
const dispatch = useDispatch();
const {projectList, loading}= useSelector((state) => state.project)
useEffect(() =>{
    dispatch(getProject())
}, [dispatch])
const handleDeleteProject = (projectId) => {
  dispatch(deleteProject(projectId))
}
  return (
    <div>
        <ProjectModal/>
        {loading && <p>Loading...</p>}
        {projectList.map(el =>(
            <>
            <h4>{el.Title}</h4>
            <h6>{el.desc}</h6>
            <img src={el.image} alt="project img" />
            <button onClick={()=>handleDeleteProject(el._id)}>Delete</button>
            <ProjectModalUpdate project={el}/>
            </>
            
        ))}
        {/* <div style={{ display:'flex' ,justifyContent:'space-between'}}>
    <FaTrashAlt style={{cursor:'pointer'}}/>
    </div> */}
    </div>
    
  )
}

export default AdminDashboard