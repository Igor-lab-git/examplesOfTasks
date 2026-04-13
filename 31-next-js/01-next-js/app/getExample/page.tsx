import React from 'react'
import ButtonGetExample from "@/src/components/ButtonGetExample";

const GetExample = async () => {

    const getResponse = async () => {
        const response = await fetch('http://localhost:3000/api/hello');
        return response.json()
    };

    const { message } = await getResponse();
    return (
        <>
            <div>GetExample</div>
            {message && (
                <h1>{message}</h1>
            )}
            <ButtonGetExample />
        </>

    )
};

export default GetExample;
