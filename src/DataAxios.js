import React, { useEffect, useState } from "react";
import axios from "axios";
import "./DataAxios.css";

const DataAxios=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
            setData(response.data)
        })
    },[])
    const data2=data.slice(0,10);
    return(
        <>
        <div className="container">
            <div className="main-heading">
                <h1>
                    Data Fetched using Axios
                </h1>
            </div>
        <div className="comments">
            {data2.map((items)=>{
                return(
                    <>
                <div className="card-main" key={items.id}>
                    <h1>{items.name.slice(0,10)}</h1>
                    <p>{items.body.slice(0,100)}</p>
                </div>
                </>
                )
            })}
            </div>
        </div>
        </>
    )
}

export default DataAxios;