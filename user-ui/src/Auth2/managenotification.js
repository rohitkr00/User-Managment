import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import AuthUser from "./AuthUser";
import axios from "axios";
import ReactLoading from "react-loading";


export default function ManageNotification()
{
    
    const {user} = AuthUser();
    const currentdate = new Date();
   
    const id = user.email;
   
    const [data,setData ] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   

useEffect(()=> {
   
  const ShowTask =  () =>{


    const baseURL5 = "http://127.0.0.1:8000/Authapp/add_notification/";
    axios.get(baseURL5)
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

   

   



    const baseURL4 = "http://127.0.0.1:8000/Authapp/add_notification/";

    const [task, setTask] = useState('');
    const handleInputLogin = (e) => {
        const { value } = e.target;
        setTask({ ...task, value });
      };

    const taskperform = () =>{
        // const task = document.getElementsById('task').value;
        
        console.log(task);
    
        const taskinfo = {
            adminemail: id,
            date: currentdate,
            news: task.value
    
        }
        
        axios.post(baseURL4, taskinfo)
      .then((response) => {
        toast.success("Task added Successfully!!");
        console.log(response.data);
       
      })
      .catch((error) => {
        setLoading(false)
        toast.error("Something went wrong plz try again...");
        console.error(error);
      });

    };


    const Deletetask = (uid) =>{

      axios.post("http://127.0.0.1:8000/Authapp/delete_notification/",{id:uid})
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
    return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <ReactLoading type="spokes" color="#0000FF" height={500} width={250} />
  </div>);
   }
    
    
   

    return(
        <>
        <div className="card shadow p-3 mb-2 bg-white rounded">  
  
  <div className="card-body">
    <h5 className="card-title">Manage All Notification</h5>
    <p className="card-text">Describe the latest news and click on submit to display for all users.</p>
    {/* <button className="btn btn-primary"  >Show all Your Task</button><br /><br /> */}
   <form id="mytask"><textarea className="form-control shadow p-3 mb-3 bg-white rounded" onChange={handleInputLogin} id="task" placeholder="Describe Your Task" ></textarea>
    <input type="submit" className="btn btn-success shadow p-2 mb-2 bg-success rounded" onClick={taskperform} /></form>
  </div>
    </div>
  
    <div className="d-flex align-content-start flex-wrap">
                {data.map  ((task, index) => (
                  
                  <div className="card shadow p-3 m-3 bg-white rounded" style={{width: '18rem'}}>
                  <div className="card-body">
                    <h5 className="card-title">Notification :- {index + 1}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{task.date}</h6>
                    <p className="card-text">{task.news}</p>
                    <button className="btn btn-danger text-right" onClick={()=>Deletetask(task.id)} >Delete Notification</button>
   
                   
                  </div>
                </div>

    
                ))}
            </div> <br />
   




        </>
    )

}