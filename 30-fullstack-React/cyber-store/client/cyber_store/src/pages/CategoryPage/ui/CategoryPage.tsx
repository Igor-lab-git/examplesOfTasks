import { useState, type JSX } from "react"
import { useGetAllDevicesQuery, useGetAllTypesQuery } from "../../../app/store/redusers/cyberStoreApi";

interface IDevices {
    id: number,
    name: string,
    price: number,
    rating: number,
    img: string,
    images: string[],
    typeId: number,
    brandId: number
}

const CategoryPage = (): JSX.Element => {
  const [deviceCategore, setDeviceCategore] = useState<IDevices[] | []>([]);

  const {data: dataType} = useGetAllTypesQuery();
  const {data: deviceData, isLoading, isError} = useGetAllDevicesQuery({count: 9});

  console.log(dataType, deviceData, isLoading, isError);
  
  const filteredDevice = () => {
    if(!deviceData.data || dataType?.data) return;
    const filtered = deviceData?.data.filter((device) => device.typeId === dataType?.data.id)
    setDeviceCategore(filtered)
  }

  return (
    <div>
      <h1>CategoryPage</h1>
    </div>
  )
}

export default CategoryPage;
