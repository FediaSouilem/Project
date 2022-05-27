import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, } from "react-redux";
import { updateProject as updateProjectAction } from "../actions/projectActions";
import './ProjectModal.css'

function ProjectModalUpdate({project}) {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset} = useForm({defaultValues:{ ...project}});
  const [file, setFile] = useState()
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateProject = (data) =>{
     dispatch(updateProjectAction({...data,file}));
     reset();
     handleClose();
   
  };
  
    return (
      <> 
      < div className="container-modal">
        <Button className='ajouter-button' variant="primary" onClick={handleShow}>
          Modifier
        </Button>
        <div className="body"></div>
        <Modal show={show} onHide={handleClose}>
          <form id='formContainer' onSubmit={handleSubmit(updateProject)}>
            <label htmlFor="Title">Titre</label>
            <input className='form-controle' id='Title' type='text' {...register('Title')} required/> <br/>
            <label htmlFor="description">Description</label>
            <input className='form-controle'id='description' type='text' {...register('desc')}  required/> <br/>
            <label htmlFor="image">Image</label>
            <input id='image' type='file'multiple accept='image/*' onChange={(e)=>setFile(e.target.files[0])}  required/>
            <button type="submit" className='ajouter'>Ajouter</button>
          </form>
          
        </Modal>
      </div>
      </>
    );
  }
  
  export default ProjectModalUpdate