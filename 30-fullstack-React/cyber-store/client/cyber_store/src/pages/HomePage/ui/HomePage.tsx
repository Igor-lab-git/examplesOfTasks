import "../../../app/styles/main.scss";
import {useGetAllDevicesQuery} from "../../../app/store/redusers/cyberStoreApi.ts";
import React, {type JSX, useState} from "react";

const HomePage = (): JSX.Element => {
    const [useCount, setUseCount] = useState<number>(3);


  const {data, isLoading, isError} = useGetAllDevicesQuery({count: useCount})

    console.log(data, isLoading, isError)
 
if(isLoading) return <div>Loading...</div>;
if(isError) return <div>Error :(</div>;


  return (
    <div className={`container-main`}>
        <select value={useCount} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setUseCount(Number(e.target.value))} >
            <option value="">все</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
        </select>
      <h1>HomePage</h1>
      <ul className={`list-reset`}>
        {data && data.data.map((device) => (
            <li key={device.id}>
                <img src={device.img} alt="" />
                <h2>{device.name}</h2>
                <span>{device.price}</span>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

