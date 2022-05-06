import React,{ useRef,useState} from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
// import { IconName } from "react-icons/bs";
export const Contact = () => {
  const [result, setResult] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rb7df4t', 'template_g2v3bxp', form.current, '9IVo5NzBobMJZd5ml')
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
//     <div> contact 
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//       { result ? <h1>msg envoyé</h1> : null}
//     </form>
//     </div> 
//   );
// };

  <section className="contact"> 
  <div className="content">
    
          
      <h2>CONTACTER NOUS</h2>
    </div>
    <div className="Containerr">
      <div className="ContactInfo">
          <div className="box">
             <div className="icon"></div>
             <div className="text">
             <h3>Address</h3>
             <p>Rue 1er Juin Kalaa Kebira, <br></br> Sousse-Tunisie <br></br>4060 </p>
             </div>
          </div>
             <div className="box">
             <div className="icon"></div>
             <div className="text">
             <h3>Phone</h3>
             <p>+216 94 786 207 </p>
             </div>
          </div>
          <div className="box">
             <div className="icon"></div>
             <div className="text">
             <h3>Email</h3>
             <p>atelier.med.concept@gmail.com </p>
             </div>
          </div>
        </div>
        <div className='contactForm'>
          <form ref={form} onSubmit={sendEmail}>
          <h2>Envoyer un message</h2>
          <div className='inputBox'>
               <input type="text" name="" required/> 
               <span>Nom et Prénom</span> 
          </div>  
          <div className='inputBox'>
               <input type="email" name="" required/> 
               <span>Email</span> 
          </div> 
          <div className='inputBox'>
               <textarea name="message" required></textarea> 
               <span>Ecrire un message...</span> 
          </div> 
          <div className='inputBox'>
          <input type="submit" value="Envoyer" />
            { result ? <h1>msg envoyé</h1> : null}
          </div>          
          </form>
       </div>
    </div>
 </section>
      
     
  
  );
};