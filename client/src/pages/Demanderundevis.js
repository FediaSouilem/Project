import React,{ useRef,useState} from 'react'
import emailjs from '@emailjs/browser';
import './Demanderundevis.css'

export const Demanderundevis = () => {
  const [result, setResult] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rb7df4t', 'template_kg0qcwh', form.current, '9IVo5NzBobMJZd5ml')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setResult(true)
      e.target.reset()
      setTimeout(()=>setResult(false),3000)
  };
  return (


  <section className="contact"> 
  <div className="content">
    
          
    </div>
    <div className="Containerrdevis">
      <div className="ContactInfodevis">
         
            
          <div className="boxdevis">
            
             <div className="textdevis">
             
             </div>
          </div>
        </div>
        <div className='contactFormdevis'>
          <form ref={form} onSubmit={sendEmail}>
          <h2>Demander un devis</h2> <br></br>
          <div className='inputBoxdevis'>
               <input type="text" name="user_name" required/> 
               <span>Votre nom</span> 
          </div>  
          <div className='inputBoxdevis'>
               <input type="email" name="user_email" required/> 
               <span>Votre e-mail</span> 
          </div> 
          <div className='inputBoxdevis'>
               <input type="text" name="user_telephone" required/> 
               <span>Votre téléphone</span> 
          </div>
          <div className='inputBoxdevis'>
               <textarea name="message" required></textarea> 
               <span>Description de votre projet...</span> 
          </div> 
          <div className='inputBoxdevis'>
          <input type="submit" value="Envoyer" />
            { result ? <h1>msg envoyé</h1> : null}
          </div>          
          </form>
       </div>
    </div>
 </section>
      
     
  
  );
};