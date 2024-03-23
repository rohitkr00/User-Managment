import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AuthUser(){
    const navigate = useNavigate();

    
    const getToken = () =>{
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }

    const getUser = () =>{
        const userString = localStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
    }

    


    const [token,setToken] = useState(getToken());
    const [user,setUser] = useState(getUser());

    const saveToken = (user,token) =>{
        localStorage.setItem('token',JSON.stringify(token));
        localStorage.setItem('user',JSON.stringify(user));

        setToken(token);
        setUser(user);
        navigate('/', { state: { num: "0" } });
        
        window.location.reload();
        // toast.success("Login Successfull!");
    }

    const logout = () => {
        localStorage.clear();
        
        // navigate('/login',{ state: { num: "0" } });
        navigate('/login');
        toast.warning("Logout Successfull!!!");
        window.location.reload();
        
    }

   
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        logout
    }
}