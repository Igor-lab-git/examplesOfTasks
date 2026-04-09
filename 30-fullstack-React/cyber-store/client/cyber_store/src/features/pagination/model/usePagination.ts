import { useMemo } from "react";
import type { IAllDevices } from "../../../app/store/redusers/cyberStoreApi";

const usePagination = (deviceData?: IAllDevices) => {
    const totalDevice = deviceData?.totalCount || 0;
    const limitDevice = deviceData?.limit || 9;
   
    const totalPages = Math.ceil(totalDevice / limitDevice);

    const buttonArray  = useMemo(() => {
         return Array.from({length: totalPages}, (_, index) => {
            return index + 1;
          });
        }, [totalPages]);

    return {
        totalPages,
        buttonArray,
    }
};

export default usePagination;