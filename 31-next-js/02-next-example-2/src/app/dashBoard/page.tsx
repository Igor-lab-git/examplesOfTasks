"use client";
import React from 'react'

const DashBoardPage = () => {
    const [valueName, setValueName] = React.useState<string>('')

    return (
        <div>
            <h3>DashBoardPage</h3>
            <input
                value={valueName}
                onChange={(e) => setValueName(e.target.value)}
                type="text"
                placeholder="Enter DashBoardPage" />
            <span>{valueName}</span>
        </div>
    )
};

export default DashBoardPage;
