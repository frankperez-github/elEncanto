import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import Link from 'next/link'

const Login = ()=> {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {user, dispatch} = useContext(UserContext)
    const router = useRouter()

    const handleLogin = async(e) => {
        e.preventDefault()
    
        const data = await fetch("https://elencanto-drf-api.herokuapp.com/user/login/", {method:"POST", headers:{'Content-Type':"application/json"}, body:JSON.stringify({username, password})})
        const userData = await data.json()
        
        if (userData.access){
        dispatch({ payload:userData})
        setUsername("")
        setPassword("")
        router.push("User")
        }
        else {alert("Wrong username or password")}
    }

   
    useEffect(()=>{
        if (user.username) {
            router.push("User")
        }
    }, [])

    return (
    <div onSubmit={handleLogin} className="user">
        <form action="POST" style={{display:"flex", flexDirection:"column", alignContent:"center"}} className="login">
            <input placeholder="email" type="text" value={username} onChange={e=>setUsername(e.target.value)}/>
            <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button style={{width:"70%",alignSelf:"center"}} className="buy_button" type="submit">
                Submit
            </button>

          <p>Don't have an account? Create one <a style={{color:"red"}}><Link  href="/Register">here</Link></a></p>  
            </form>
    </div>
    )
}

export default Login