import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch, } from "react-redux";
import { addProject } from "../actions/projectActions";
import './ProjectModal.css'

function ProjectModal() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset} = useForm();
  const [file, setFile] = useState()
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addNewProject = (data) =>{
     dispatch(addProject({...data,file}));
     reset();
     handleClose();
   
  };
  
  
    return (
      <> 
      < div className="container-modal">
        <Button className='ajouter-button' variant="primary" onClick={handleShow}>
          Ajouter un projet
        </Button>
        <div className="body"></div>
        <Modal show={show} onHide={handleClose}>
          <form id='formContainer' onSubmit={handleSubmit(addNewProject)}>
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
  
  export default ProjectModal