import React from "react";
// import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import './style.css';
import axios from "axios";
import ReactLoading from "react-loading";



export default function Notification()
{
    
   
    
    // const [id, setId] = useState(email);
   
    const [data,setData ] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // const [uid, setUid] = useState();

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

   
    



    if (loading){
    return (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ReactLoading type="spokes" color="#0000FF" height={500} width={250} />
    </div>);
   }
    
    
   

    return(
        <>
       
       <h3 className="title_card shadow m-3 p-3">All Your latest news will appear here</h3>
    <div className="d-flex align-content-around flex-wrap p-3">
                {data.length > 0 ?(data.map  ((task, index) => (
                   <div className="card title_card_2 shadow p-3  m-3 rounded" style={{width: '18rem'}}>
                   <div className="card-body">
                     <h5 className="card-title">Notification :- {index + 1}</h5>
                     <h6 className="card-subtitle mb-2 text-muted">{task.date}</h6>
                     <p className="card-text">{task.news}</p>
                     
                    
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