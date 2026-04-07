import {useMemo, useState} from "react";
import {useGetAllBrandsQuery, useGetDevicesByTypeIdQuery} from "../../../app/store/redusers/cyberStoreApi";

const useBrandFilter = (typeId: number) => {
    const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
    const {data: dataType, isLoading: loadDataType} = useGetDevicesByTypeIdQuery(typeId);
    const {data: dataBrands, isLoading: loadDataBrands} = useGetAllBrandsQuery();

    const handleSelectedBrands = (id: number, isChecked: boolean) => {
        if (isChecked) {
            setSelectedBrands([...selectedBrands, id]);
        } else {
            setSelectedBrands(selectedBrands.filter((item) => item !== id));
        }
    };

    const dataFilteredBrands = useMemo(() => {
        if(!dataType?.data) return [];
        if(selectedBrands.length === 0) return dataType?.data;

        return dataType?.data.filter((type) => selectedBrands.includes(type.brandId));
    }, [dataType?.data, selectedBrands]);

    return {
        handleSelectedBrands,
        setSelectedBrands,
        selectedBrands,
        dataBrands,
        loadDataType,
        loadDataBrands,
        dataFilteredBrands
    };
};

export default useBrandFilter;
