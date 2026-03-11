'use client';

import React from 'react';
import Link from 'next/link';

interface Student {
    id: string;
    StuName: string;
    avatar: string;
    City: string;
    Sem: string;
}

export default function Page() {
    const [data, setData] = React.useState<Student[]>([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://6881d9e866a7eb81224c42ff.mockapi.io/user');
            const result = await response.json();
            console.log(result);
            setData(result);
        } catch (err) {
            setError("Failed to fetch data");
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <h2 style={{ textAlign: 'center' }}>Loading...</h2>;
    if (error) return <h2 style={{ textAlign: 'center', color: 'red' }}>{error}</h2>;

    
    return (
        <div style={{ padding: '30px', fontFamily: 'Arial' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Student List</h2>

            <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
                <thead style={{ backgroundColor: '#222', color: 'white' }}>
                    <tr>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Avatar</th>
                        <th style={thStyle}>City</th>
                        <th style={thStyle}>Sem</th>
                        <th style={thStyle}>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} style={{ textAlign: 'center' }}>
                            <td style={tdStyle}>{item.id}</td>
                            <td style={tdStyle}>{item.StuName}</td>
                            <td style={tdStyle}>
                                <img
                                    src={item.avatar}
                                    alt="avatar"
                                    width="50"
                                    style={{ borderRadius: '50%' }}
                                />
                            </td>
                            <td style={tdStyle}>
                                {item.City ? item.City : "N/A"}
                            </td>
                            <td style={tdStyle}>{item.Sem}</td>
                            <td style={tdStyle}>
                                <Link
                                    href={`/Student/${item.id}`}
                                    style={buttonStyle}
                                >
                                    View Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

const thStyle = {
    padding: '12px',
    borderBottom: '1px solid #ddd'
};

const tdStyle = {
    padding: '10px',
    borderBottom: '1px solid #ddd'
};

const buttonStyle = {
    padding: '6px 12px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block'
};

