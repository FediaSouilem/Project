
import {useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {login as loginAction} from '../actions/userActions'
import { useEffect } from 'react';
import './Login.css'

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
    <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={handleSubmit(loginUser)} >
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input required type='email' {...register('email')} placeholder="Email"/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input required type='password' {...register('password')} placeholder="Mot de passe"/>
				</div>
				<button className="button login__submit">
					<span className="button__text">Connexion</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>	
        {errors && <p>{errors} </p>}			
			</form>
			<div className="social-login">
        <br/>
				
				<div className="social-icons">
					<a href="#" className="social-login__icon fab fa-instagram"></a>
					<a href="#" className="social-login__icon fab fa-facebook"></a>
					<a href="#" className="social-login__icon fab fa-twitter"></a>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
  )
}

export default Login

