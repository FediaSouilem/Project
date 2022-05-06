import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProjects } from "../actions/projectActions";

function ProjectModal() {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset} = useForm();
  const [file, setFile] = useState()
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addNewProject = (data) =>{
     dispatch(addProjects({...data,file}));
     reset();
     handleClose();
   
  };
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Ajouter un projet
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <form onSubmit={handleSubmit(addNewProject)}>
            <label htmlFor="title">Titre</label>
            <input id='title' type='text' {...register('title')} required/> <br/>
            <label htmlFor="description">Description</label>
            <input id='description' type='text' {...register('desc')}  required/> <br/>
            <label htmlFor="image">Image</label>
            <input id='image' type='file' accept='image/*' onChange={(e)=>setFile(e.target.files[0])}  required/>
            <button>Ajouter</button>
          </form>
        </Modal>
      </>
    );
  }
  
  export default ProjectModal