
import {useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {login as loginAction} from '../actions/userActions'
import { useEffect } from 'react';
import './Login.css'
import profilee from "./image/a.jpg"
import email from "./image/email.png"
import pass from "./image/password.png"

const Login = () => {
    const dispatch = useDispatch();
    const nav = useNavigate()
    const { register, handleSubmit} = useForm();
    const {errors} = useSelector((state) =>state.user)
    // useEffect(()=> {
    //   if (isAuth) nav ('/profile');
    // }, [isAuth, nav]);
    const loginUser = (data) =>{
        dispatch(loginAction(data, nav));
    };
    
  return (
    <div className="main">
	<div className="sub-main">
		<div>
			<div className='imgs'>
				<div className='container-image'> 
				<img src={profilee} alt='profile' className='profile'/>
			{/* <form className="login" onSubmit={handleSubmit(loginUser)} >
				
				<label>Email</label>
					<input required type='email' {...register('email')} placeholder="Email"/>
				
				
					<label>Mot de passe</label>
					<input required type='password' {...register('password')} placeholder="Mot de passe"/>
				
				{errors && <p>{errors} </p>}
				<button className="button login__submit">Connexion</button>	
        			
			</form> */}
		</div>
		</div>
		<form className="login" onSubmit={handleSubmit(loginUser)} >
		<div >
			<h4>Page de connexion</h4>
			<br></br>
			<div>
			<img src={email} alt='email' className='email'/>
			<input required type='email' {...register('email')} placeholder="Email" className='user'/>
		</div>
		<div className='second-input'>
		<img src={pass} alt='pass' className='email'/>
		<input required type='password' {...register('password')} placeholder="Mot de passe"className='user'/>
		</div>
		<div className='login-button'> 
		{errors && <p>{errors} </p>}
		
		<button className='button-connexion'>Connexion</button>	
		</div>
		 <br></br>
			<p className='link'>
				<a href="#"> Mot de passe oublié?</a> Ou <a>Enregistrer</a>
			</p>
		
		</div>
		</form>
		</div>
		
	</div>
</div>
  )
}

export default Login

