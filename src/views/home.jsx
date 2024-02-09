import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

function Home (){
    const navigate =useNavigate()
    useEffect(()=> {
        const token =JSON.parse(sessionStorage.getItem('token'))

        if(!token){
            navigate('/login')
        }


    },[])
    return(
        <>
        <h1>
            Hola mundo mio 
        </h1>
            <Link to='/login' >Ir a login</Link>
        </>
    )
}
export default Home