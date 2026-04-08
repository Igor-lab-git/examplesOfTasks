import {type JSX} from "react";
import  {type IAllBrands} from "../../../app/store/redusers/cyberStoreApi.ts";
import style from "./BrandFilter.module.scss";
import type {IBrandCounts} from "../../../widgets/DeviceFilterAside/ui/FilterSidebar.tsx";

interface IBrandFilter {
    dataBrands?: IAllBrands;
    brandCounts: IBrandCounts
    handleSelectedBrands: (id: number, isChecked: boolean) => void;
};

const BrandFilter = ({ handleSelectedBrands, dataBrands, brandCounts}: IBrandFilter): JSX.Element => {

    return (
        <>
            {dataBrands?.data && dataBrands?.data.map(({id, name}) => (
                <div className={style.container_brand_filter} key={id}>
                    <label
                        className={style.label_brand_filter}
                        htmlFor={`${name}Brand`}>
                        <input
                            className={style.input_brand_filter}
                            value={id}
                            onChange={(e) => handleSelectedBrands(id, e.target.checked)}
                            id={`${name}Brand`}
                            name={name}
                            type="checkbox"/>
                        <span className={style.custom_checkbox}></span>
                        {name}
                        <span className={style.brand_counts_brand_filter}>{brandCounts[id] || 0}</span>
                    </label>
                </div>
            ))}
        </>
    )
};

export default BrandFilter;
