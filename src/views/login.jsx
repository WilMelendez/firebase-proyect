import { google } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

export default function LoginViews () {
    const navigate = useNavigate()
    const handleGoogleLogin = async () =>{
        const infoUser =await google()
        const token = await infoUser.user.getIdToken(true)
        sessionStorage.setItem('token' ,JSON.stringify(token))
        navigate('/')

        console.log(await infoUser.user.getIdToken(true));
      }

    return(
        <>
        <h1>Bienvenidos</h1>
        <input type='text'></input>
        <button onClick={handleGoogleLogin}>Iniciar session con google</button>
        </>
      
    )
}