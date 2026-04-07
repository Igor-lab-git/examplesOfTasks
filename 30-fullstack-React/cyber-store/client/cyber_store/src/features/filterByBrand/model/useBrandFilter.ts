import { useMemo, useState } from "react";
import { useGetAllBrandsQuery, useGetDevicesByTypeIdQuery } from "../../../app/store/redusers/cyberStoreApi";

const useBrandFilter = (typeId: number) => {
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  const { data: dataType, isLoading: loadDataType } = useGetDevicesByTypeIdQuery(typeId);
  const { data: dataBrands, isLoading: loadDataBrands } = useGetAllBrandsQuery();

  const handleSelectedBrands = (id: number, isChecked: boolean) => {
    if (isChecked) {
      setSelectedBrands([...selectedBrands, id]);
    } else {
      setSelectedBrands(selectedBrands.filter((item) => item !== id));
    }
  };

//   const filteredDevices = () => {
//     if(!dataType?.data || dataType?.data.length === 0) return [];
//     if(selectedBrands.length === 0) return dataType?.data;
//     return dataType?.data.filter((type) => selectedBrands.includes(type.brandId));
//   }

const dataFilteredBrands = useMemo(() => {

    const filteredBrands = dataType?.data.filter((type) => selectedBrands.includes(type.brandId));
    
    return filteredBrands?.length === 0 ? dataType?.data : filteredBrands;
}, [dataType?.data, selectedBrands]);




  console.log(dataFilteredBrands, "dataFilteredBrands");
  console.log(dataFilteredBrands, "filteredBrands");
  

  return {
    handleSelectedBrands,
    selectedBrands,
    setSelectedBrands,
    dataBrands,
    loadDataType,
    loadDataBrands,
    dataFilteredBrands
  };
};

export default useBrandFilter;
