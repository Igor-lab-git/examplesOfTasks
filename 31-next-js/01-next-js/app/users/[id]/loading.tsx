import React from 'react'

export default function Loading() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            color: "blue",
            background: "yellow"
        }}>
            <h2>Загрузка user...</h2>
        </div>
    )
};