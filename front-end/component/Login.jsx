import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Lonig = ()=>{

    const [email, setEmail] =React.useState("");
    const [password, setPassword] =React.useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user')
        if(auth){
            navigate("/")
        }
    },[])
    const handleLogin = async()=>{
        
        let result = await fetch('http://localhost:5000/login',{
            method:"post",
            body:JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result= await result.json();
        console.warn(result);
        if(result.token){
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.token));
            navigate("/")
        }
        else{
            alert("please enter correct details");
        }
    }

    return(
        <div className="login">
            <h1>Login</h1>
            <form className="inlog">
           <input className="logfrm" type="text" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
           <input className="logfrm" type="password" placeholder="Enter password"  onChange={(e)=>setPassword(e.target.value)} value={password}/>
           <button onClick={handleLogin} className="log-btn" type="button"> login </button>
           </form>
        </div>
    )
}
export default Lonig;
