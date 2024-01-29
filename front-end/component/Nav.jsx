import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav = ()=>{
    const auth= localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
       localStorage.clear();
       navigate('/Signup')
    }
    return(
        <div>
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv5_M4LP4Fnp0zH8uUJ5IfJ6-q-wrLVJfiLs-qpK2QEePIPt1YAQoCOJh545VAwc1Yu80&usqp=CAU" alt=""  />
            
            {auth ?
            <ul className="nav">
                <li><Link to="/"> Products </Link></li>
                <li><Link to="/add">Add Products </Link></li>
            
                <li><Link to="/profile"> Profile </Link></li>
                <li><Link onClick= {logout} to="/Signup"> Logout ({JSON.parse(auth).name}) </Link> </li>
               

                

            </ul>
            :
            <ul className="nav">
                <li><Link to="/Signup" >Sign Up</Link></li>
                    <li><Link to="/login" >Login</Link></li>
            </ul>
            }
        </div>
    )
}
export default Nav;