'use client';
import { useState, useEffect } from "react";

interface MongoUser {
    _id: string;
    First: string;
    Last: string;
    City: string;
}

export default function MongoDBPage() {
    const [data, setData] = useState<MongoUser[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/user')
            .then(res => res.json())
            .then(result => {
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
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>;

    return (
        <>
            <h2 style={{ textAlign: "center", margin: "20px" }}>MongoDB Users</h2>
            <table className="table" style={{ width: "80%", margin: "20px auto", border: "1px solid #ccc", borderRadius: "5px" }}>
                <thead style={{ backgroundColor: "#4a9c8c", color: "white" }}>
                    <tr>
                        <th scope="col" style={{ textAlign: "center", padding: "10px" }}>ID</th>
                        <th scope="col" style={{ textAlign: "center", padding: "10px" }}>First Name</th>
                        <th scope="col" style={{ textAlign: "center", padding: "10px" }}>Last Name</th>
                        <th scope="col" style={{ textAlign: "center", padding: "10px" }}>City</th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: "#e8f5e9" }}>
                    {data.map((item) => (
                        <tr key={item._id}>
                            <td style={{ textAlign: "center", padding: "8px" }}>{item._id}</td>
                            <td style={{ textAlign: "center", padding: "8px" }}>{item.First}</td>
                            <td style={{ textAlign: "center", padding: "8px" }}>{item.Last}</td>
                            <td style={{ textAlign: "center", padding: "8px" }}>{item.City}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
