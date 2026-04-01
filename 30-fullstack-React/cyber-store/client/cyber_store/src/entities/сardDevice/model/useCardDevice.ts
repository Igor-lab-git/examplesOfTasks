import { useState } from "react";

const useCardDevice  = () => {
     const [isFavorite, setIsFavorite] = useState(false);

        return {
            isFavorite, 
            setIsFavorite, 
        }
};

export default useCardDevice;