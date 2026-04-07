import {BrandFilter} from "../../../features/filterByBrand";
import type {IAllBrands} from "../../../app/store/redusers/cyberStoreApi.ts";
import {useState} from "react";
import FilterSection from "./FilterSection.tsx";

// import style from "./FilterSidebar.module.scss";

interface IFilterSidebar {
    dataBrands?: IAllBrands;
    handleSelectedBrands: (id: number, isChecked: boolean) => void;
}

const FilterSidebar = ({handleSelectedBrands, dataBrands}: IFilterSidebar) => {
    const [trigger, setTrigger] = useState<boolean>(false);

    return (
        <>
            <FilterSection
                title="Брэнд"
                trigger={trigger}
                onToggle={() => setTrigger(!trigger)}
            >
                <BrandFilter
                    handleSelectedBrands={handleSelectedBrands}
                    dataBrands={dataBrands}/>
            </FilterSection>
        </>
    )
};

export default FilterSidebar;