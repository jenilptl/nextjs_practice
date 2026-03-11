'use client';
import { useState, useEffect } from "react";

export default function PostgreSQLPage() {
const [data, setData] = useState<any[]>([]);   
    useEffect(() => {
  fetch('/api/postgres-users')
    .then(res => res.json())
    .then(result => {
      console.log("API RESPONSE:", result);
      if (Array.isArray(result)) {
        setData(result);
      } else {
        console.error("Expected array, got:", result);
        setData([]);
      }
    })
    .catch(err => {
      console.error('Error fetching data:', err);
      setData([]);
    });
}, []);

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
                    <td style={{textAlign:"center"}} ><a href={`/postgrese/${item.id}`} style={{color:"#333",textDecoration:"none"}}>View</a>
                    </td>   
                </tr>
            ))}     
        </tbody>
        </table>
    </>
  );
}
