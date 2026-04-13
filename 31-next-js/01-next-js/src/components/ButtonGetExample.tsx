'use client';
import React, {useEffect} from 'react';

const ButtonGetExample = () => {
    const [result, setResult] = React.useState(null);

    useEffect( () => {
        const getData = async () => {
            const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hello`);
            const resData = await  data.json();
            setResult(resData.message)
        }
        getData();
    }, []);


    return (
        <>
        <div>{result}</div>
            <button onClick={() => alert(result)}>Click my</button>
        </>

    )
};

export default ButtonGetExample;
