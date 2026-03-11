'use client'
import { useState, useEffect } from "react";


export default function MySQLPage() {

      const [data,setData]=useState<any>([]);
        useEffect(()=>{
            fetch('/api/users')
            .then(res=>res.json())
            .then(data=>{
                setData(data);
            })
            .catch(err=>{
                console.error('Error fetching data:', err);
            });
        },[]);

  return (
    <>
     <table className="table" style={{width:"80%",margin:"20px auto",border:"1px solid #ccc",borderRadius:"5px"}}>
        <thead style={{backgroundColor:"#e9a0a0"}}>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody style={{backgroundColor:"#e4c05d"}}>
            {data.map((item: any) => (
                <tr key={item.id}>
                    <td style={{textAlign:"center"}} >{item.id}</td>
                    <td  style={{textAlign:"center"}} >{item.name}</td>
                    <td  style={{textAlign:"center"}} >{item.email}</td>
                    <td  style={{textAlign:"center"}} >{item.phone}</td>
                    <td  style={{textAlign:"center"}} >{item.role}</td>
                </tr>
            ))}
        </tbody>
        </table>
    </>
  );
}