import { useEffect, useState, type JSX } from "react";
import "../../../app/styles/main.scss";

// interface IData {
//   id: number;
//   name: string;
//   price: number;
//   rating: number;
//   img: string;
//   images?: string[];
//   typeId?: number;
//   brandId?: number;
// }

interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  images?: string[];
  typeId?: number;
  brandId?: number;
}

const HomePage = (): JSX.Element => {
  const [devices, setDevices] = useState<IDevice[] | []>([]);
  const base_url = import.meta.env.VITE_API_URL;

 useEffect(() => {

      fetch(`${base_url}/api/device`)
      .then(resp => resp.json())
      .then(json => setDevices(json.data))
      .catch(e => console.log(e));

  }, []);
 

console.log(devices);

  return (
    <div className={`container-main`}>
      <h1>HomePage</h1>
      <ul className={`list-reset`}>
        {devices && devices.map((device) => (
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

// "message": "success",
//     "limit": 9,
//     "page": 1,
//     "data": {
//         "count": 6,
//         "rows": [
//             {
//                 "id": 2,
//                 "name": "Смарт часы",
//                 "price": 63000,
//                 "rating": 0,
//                 "img": "08e36b3c-1542-42f6-af79-92875fac5dfb.jpg",
//                 "images": [],
//                 "typeId": 6,
//                 "brandId": 2
//             },
//             {
//                 "id": 3,
//                 "name": "Холодильник ТК-2500",
//                 "price": 89600,
//                 "rating": 0,
//                 "img": "f54bf8bb-8f7d-48c0-82f9-318d50cb3a6b.jpg",
//                 "images": [],
//                 "typeId": 3,
//                 "brandId": 1
//             },
//             {
//                 "id": 4,
//                 "name": "Samsung  SVA-78950",
//                 "price": 369500,
//                 "rating": 0,
//                 "img": "ce1c4ab0-90e8-4afd-8e84-3570487a91b9.jpg",
//                 "images": [],
//                 "typeId": 4,
//                 "brandId": 5
//             },
//             {
//                 "id": 5,
//                 "name": "MacOs M5",
//                 "price": 350000,
//                 "rating": 0,
//                 "img": "5e0a2bcb-e8b9-4418-96cd-7699041bebb3.jpg",
//                 "images": [],
//                 "typeId": 5,
//                 "brandId": 2
//             },
//             {
//                 "id": 6,
//                 "name": "Apple 12 pro",
//                 "price": 12000,
//                 "rating": 0,
//                 "img": "77b3246c-53cb-4f50-b6c7-f4f1301a0a9f.jpg",
//                 "images": [],
//                 "typeId": 2,
//                 "brandId": 2
//             },
//             {
//                 "id": 7,
//                 "name": "Honor lab-850",
//                 "price": 175000,
//                 "rating": 0,
//                 "img": "dcfb623c-b528-43ef-9d92-0181777ade39.jpg",
//                 "images": [],
//                 "typeId": 1,
//                 "brandId": 3
//             }
//         ]
//     }
// }
