import {type JSX} from "react";
import type {IAllBrands} from "../../../app/store/redusers/cyberStoreApi.ts";

interface IBrandFilter {
    dataBrands?: IAllBrands;
    handleSelectedBrands: (id: number, isChecked: boolean) => void;
};

const BrandFilter = ({ handleSelectedBrands, dataBrands}: IBrandFilter): JSX.Element => {

    return (
        <>
            {dataBrands?.data && dataBrands?.data.map(({id, name}) => (
                <div key={id}>
                    <label htmlFor={`${name}Brand`}>
                        <input
                            value={id}
                            onChange={(e) => handleSelectedBrands(id, e.target.checked)}
                            id={`${name}Brand`}
                            name={name}
                            type="checkbox"/>
                        {name}
                    </label>
                </div>
            ))}
        </>
    )
}

export default BrandFilter;
