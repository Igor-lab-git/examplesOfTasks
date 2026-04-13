import React from 'react'
import ButtonGetExample from "@/src/components/ButtonGetExample";

const PostExample = async () => {

    const getResponse = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hello`, {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
            },
            body: JSON.stringify({name: "JENNA"})
        });
        return response.json()
    };

    const { message } = await getResponse();
    return (
        <>
            <h2>PostExample</h2>
            {message && (
                <h1>{message}</h1>
            )}

            <ButtonGetExample />
        </>

    )
};

export default PostExample;
