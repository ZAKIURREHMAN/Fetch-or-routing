import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Axios() {
  const [data, setData] = useState([]);

  const URL = "https://fakestoreapi.com/products";

  useEffect(()=>{
    axios.get(URL)
    .then((res)=>{
        console.log(res)
        setData(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  },[])


  
//   useEffect(() => {
//     const fetchData =  () => {
//         fetch(URL)
//         .then((res)=>{
//             return res.json()
//         })
//         .then((data)=>{
//             setData(data)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }
//     fetchData();
//   }, []);

  return (
    <>
    {
        data.map((item,index)=>(
            <div key={index} >
                  <p>ID: {item.id}</p>
            <p>Title: {item.title}</p>
            <p>Price: ${item.price}</p>
            <p>Description: {item.description}</p>
            <img src={item.image} alt={item.title} width="100" />
            </div>
        ))
    }
    <Link to='/' ><button>Home page </button></Link>
    </>
  )
}

export default Axios;
