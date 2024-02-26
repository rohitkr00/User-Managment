import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useMemo } from "react";
import AuthUser from "./AuthUser";
import axios from "axios";


export default function AdminManageTask()
{
    const {user} = AuthUser();
    const navigate = useNavigate();
    const currentdate = new Date();
    const { state } = useLocation();
    const email = state && state.email;
    const [id, setId] = useState(email);
   
    const [data,setData ] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [uid, setUid] = useState();

useEffect(()=> {
   
  const ShowTask =  () =>{


    const baseURL5 = "http://127.0.0.1:8000/Authapp/fetch_task/";
    axios.post(baseURL5,{email: id})
      .then((response) => {
        // console.log(response.data);
        setData(response.data);
        console.log(data);
        setLoading(false);
        
       
       
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.error(error);
      });
    }

    ShowTask();
   

  }, [] );

   

   



    const baseURL4 = "http://127.0.0.1:8000/Authapp/task_view/";

    const [task, setTask] = useState('');
    const handleInputLogin = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, value });
      };

    const taskperform = () =>{
        // const task = document.getElementsById('task').value;
        
        console.log(task);
    
        const taskinfo = {
            useremail: id,
            date: currentdate,
            task: task.value
    
        }
        
        axios.post(baseURL4, taskinfo)
      .then((response) => {

        console.log(response.data);
       
      })
      .catch((error) => {
        setLoading(false)
        alert("something went wrong....");
        console.error(error);
      });

    };


    const Deletetask = (uid) =>{

      axios.post("http://127.0.0.1:8000/Authapp/delete_task/",{id:uid})
      .then((response) => {
    
        console.log(response.data);
        window.location.reload();

        
       
      })
      .catch((error) => { 
        setLoading(false);
        alert("something went wrong....");
        console.error(error);
      });

    }


    



    if (loading){
    return <div>Loading....</div>;
   }
    
    
   

    return(
        <>
       
  
    <div>
                {data.length > 0 ?(data.map  ((task, index) => (
                   <div className="card">
  <div className="card-header">
   Task {index + 1}
  </div>
  <div className="card-body">
    <h6 className="card-title">Date:-  {task.date}</h6>
    <p className="card-text">{task.task}</p>
    <button className="btn btn-danger text-right" onClick={()=>Deletetask(task.id)} >Delete Task</button>
  </div>
</div> 
                ))) : (
                    <h1>No data</h1>
                  )
            }
            </div>
   




        </>
    )

}