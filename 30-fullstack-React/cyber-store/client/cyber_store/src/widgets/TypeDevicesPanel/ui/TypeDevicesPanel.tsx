import type { JSX } from "react"
import  CategoryLinks  from "./CategoryLinks";
import iconArrowPrev from "../../../shared/assets/icons/СategoryDevice/button-tab/arrow-tab-button-prev.svg";
import iconArrowNex from "../../../shared/assets/icons/СategoryDevice/button-tab/arrow-button-tab-next.svg";

const TypeDevicesPanel = (): JSX.Element => {
  return (
    <div>
        <div>
            <h2>Browse By Category</h2>
            <div>
                <button type="button">
                    <img src={iconArrowPrev} alt="" />
                </button>
                <button type="button">
                    <img src={iconArrowNex} alt="" />
                </button>
            </div>
        </div>
        <CategoryLinks />
    </div>
  )
}

export default TypeDevicesPanel;
