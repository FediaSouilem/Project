import { useEffect }  from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const nav = useNavigate();
    const {isAuth} = useSelector((state) =>state.user);
    //   useEffect(()=> {
    //   if (!isAuth) nav ('/login');
    // }, [isAuth, nav]);
  return (
    <div>Profile</div>
  )
}

export default Profile
