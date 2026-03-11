'use client';

import { useState, useEffect, use } from "react";

export default function PostgreSQLDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);   // unwrap Promise
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/postgres-users/${resolvedParams.id}`)
      .then(res => res.json())
      .then(result => {
        setData(result);
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setData(null);
      });
  }, [resolvedParams.id]);

  if (!data) {
    return <div style={{ textAlign: "center", marginTop: "50px" }}>Loading...</div>;
  }

  return (
    <div style={{ width: "60%", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>User Details</h2>
      <p><strong>ID:</strong> {data.id}</p>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone:</strong> {data.phone}</p>
      <p><strong>Role:</strong> {data.role}</p>
    </div>
  );
}
