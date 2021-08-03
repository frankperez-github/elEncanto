import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"

const User = ()=> {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {dispatch} = useContext(UserContext)

    const handleSubmit = async(e) => {
        e.preventDefault()
        console.log(JSON.stringify({username, password}))
        const data = await fetch("https://elencanto-drf-api.herokuapp.com/user/login/", {method:"POST", headers:{'Content-Type':"application/json"}, body:JSON.stringify({username, password})})
        const user = await data.json()
        console.log(user)
        dispatch({ payload:user})
        setUsername("")
        setPassword("")

    }

    return (
    <div onSubmit={handleSubmit} className="user">
        <form action="POST" style={{display:"flex", flexDirection:"column", alignContent:"center"}} className="login">
            <input placeholder="username" type="text" value={username} onChange={e=>setUsername(e.target.value)}/>
            <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button style={{width:"70%",alignSelf:"center"}} className="buy_button" type="submit">
                Submit
            </button>
            </form>
    </div>
    )
}

export default User