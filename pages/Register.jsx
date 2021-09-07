import { useRouter } from "next/router"
import {useContext, useState} from "react"
import { UserContext } from "../context/UserContext"
import Link from 'next/link'

const Register = ()=> {
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const { dispatch} = useContext(UserContext)
    const router = useRouter()

    const handleRegister = async(e)=>{

        e.preventDefault()
        if (password==confirmPassword) {
            try {
            const data = await fetch("https://elencanto-drf-api.herokuapp.com/user/register/", {method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({email, "first_name":firstName, "last_name":lastName, password })})
            const user = await data.json()
            dispatch({payload:user})
            router.push("/")
            }
            catch {
                alert("User Already Exists")
            }
        }
        else alert("Passwords do not match")
    }

    return (
        <div className="shipping User container-shipping">

            <div className="Cart-title OrderTitle">
                <h2>New Account</h2>
            </div>

            <div className="user">
                <form  onSubmit={handleRegister}  action="POST" style={{display:"flex", flexDirection:"column", alignContent:"center"}} className="login">

                    <input placeholder="email" type="email" value={email} onChange={e=>setEmail(e.target.value)}/>

                    <input placeholder="First Name" type="text" value={firstName} onChange={e=>setFirstName(e.target.value)}/>

                    <input placeholder="Last Name" type="text" value={lastName} onChange={e=>setLastName(e.target.value)}/>

                    <input placeholder="password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

                    <input placeholder="Confirm Password" type="password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>

                    <p>Already have an account? Login <span style={{color:"red"}}><Link  href="/Login">here</Link></span></p>  

                    <button style={{width:"70%",alignSelf:"center"}} className="buy_button LogInButton" type="submit">
                        Create
                    </button>
                    
                </form>
            </div>
        </div>
    )
}

export default Register