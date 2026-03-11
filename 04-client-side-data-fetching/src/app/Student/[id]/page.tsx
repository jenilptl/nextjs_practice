'use client';

import React, { useState, useEffect, use } from 'react';
import Link from 'next/link';

interface Student {
    id: string;
    StuName: string;
    avatar: string;
    City: string;
    Sem: string;
}

export default function StudentDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const resolvedParams = use(params);
    const [data, setData] = useState<Student | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://6881d9e866a7eb81224c42ff.mockapi.io/user/${resolvedParams.id}`);
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError("Failed to fetch student details");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [resolvedParams.id]);

    if (loading) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Loading...</h2>;
    if (error) return <h2 style={{ textAlign: 'center', color: 'red', marginTop: '50px' }}>{error}</h2>;
    if (!data) return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Student not found</h2>;

    return (
        <div style={{ padding: '30px', fontFamily: 'Arial', maxWidth: '500px', margin: '0 auto' }}>
            <Link href="/Student" style={{ color: '#0070f3', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
                ← Back to Student List
            </Link>
            <div style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '30px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                textAlign: 'center'
            }}>
                <img
                    src={data.avatar}
                    alt="avatar"
                    width="100"
                    style={{ borderRadius: '50%', marginBottom: '15px' }}
                />
                <h2>{data.StuName}</h2>
                <p><strong>ID:</strong> {data.id}</p>
                <p><strong>City:</strong> {data.City || "N/A"}</p>
                <p><strong>Semester:</strong> {data.Sem}</p>
            </div>
        </div>
    );
}
