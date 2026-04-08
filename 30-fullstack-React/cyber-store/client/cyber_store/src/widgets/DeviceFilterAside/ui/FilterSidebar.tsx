import {BrandFilter} from "../../../features/filterByBrand";
import type {IAllBrands} from "../../../app/store/redusers/cyberStoreApi.ts";
import {useState} from "react";
import FilterSection from "./FilterSection.tsx";

export interface IBrandCounts  {
    [brandId: number]: number;
}

interface IFilterSidebar {
    dataBrands?: IAllBrands;
    brandCounts: IBrandCounts
    handleSelectedBrands: (id: number, isChecked: boolean) => void;
};

const FilterSidebar = ({handleSelectedBrands, dataBrands, brandCounts}: IFilterSidebar) => {
    const [trigger, setTrigger] = useState<boolean>(false);

    return (
        <>
            <FilterSection
                title="Брэнд"
                trigger={trigger}
                onToggle={() => setTrigger(!trigger)}
            >
                <BrandFilter
                    brandCounts={brandCounts}
                    handleSelectedBrands={handleSelectedBrands}
                    dataBrands={dataBrands}/>
            </FilterSection>
        </>
    )
};

export default FilterSidebar;