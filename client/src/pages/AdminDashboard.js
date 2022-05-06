import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProjects } from '../actions/projectActions';
import ProjectModal from '../components/ProjectModal';

const AdminDashboard = () => {
const dispatch = useDispatch();
const {projectList, loading}= useSelector((state) => state.project)
useEffect(() =>{
    dispatch(getProjects())
}, [dispatch])
  return (
    <div>
        <ProjectModal/>
        {loading && <p>Loading...</p>}
        {projectList.map(el =>(
            <>
            <h4>{el.title}</h4>
            <h6>{el.desc}</h6>
            <img src={el.image} alt="project img" />
            </>
        ))}
    </div>
  )
}

export default AdminDashboard