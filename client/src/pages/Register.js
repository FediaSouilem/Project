
import {useNavigate} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {register as registerAction} from '../actions/userActions'
import './Register.css'
const Register = () => {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const { register, handleSubmit} = useForm();
    const {isAuth} = useSelector(state=>state.user.userInfo)
    // useEffect(()=> {
    //   if (isAuth) nav ('/login');
    // }, [isAuth, nav]);
    const registerNewUser = (data) =>{
        dispatch(registerAction(data, nav))
    };
    
  return (
//     <div className="base-container">
//         <form onSubmit={handleSubmit(registerNewUser)}>
//             <label>name</label>
//             <input required type='text' {...register('name')} />
//             <br />
//             <label>email</label>
//             <input required type='email' {...register('email')} />
//             <br />
//             <label>password</label>
//             <input required type='password' {...register('password')} />
//             <br />
//             <label>adress</label>
//             <input required type='text' {...register('adress')} />
//             <br />
//             <button>Register</button>
//         </form>
//     </div>
//   )
// }


// <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600' rel='stylesheet' type='text/css'>
// <link href="//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css" rel="stylesheet">

<div className="testbox">
  <h1>Se connecter</h1>

  <form className='alignform'onSubmit={handleSubmit(registerNewUser)}>
     
    <div className="accounttype">
      <input type="radio" value="None" id="radioOne" name="account" checked/>
      <label for="radioOne" className="radio" chec>Personal</label>
      <input type="radio" value="None" id="radioTwo" name="account" />
      <label for="radioTwo" className="radio">Company</label>
    </div>
  
  <label id="icon" for="name"><i className="icon-envelope "></i></label>
  <input type='email' {...register('email')} name="email" id="email" placeholder="Email" required/>
  <label id="icon" for="name"><i className="icon-user"></i></label>
  <input type='text' {...register('name')} name="name" id="name" placeholder="Name" required/>
  <label id="icon" for="name"><i className="icon-shield"></i></label>
  <input type='password' {...register('password')} name="password" id="password" placeholder="Password" required/>
  <label id="icon" for="name"><i className="icon-shield"></i></label>
  <input type='text' {...register('adress')} name="adress" id="adress" placeholder="adress" required/>
  <br></br>
  <div className="gender">
    <input type="radio" value="None" id="male" name="gender" checked/>
    <label for="male" className="radio" chec>Male</label>
    <input type="radio" value="None" id="female" name="gender" />
    <label for="female" className="radio">Female</label>
   </div> 
   <p>By clicking Register, you agree on our <a>terms and condition</a></p>
   <button className="button">Register</button>
   
  </form>
</div>
)
}
export default Register