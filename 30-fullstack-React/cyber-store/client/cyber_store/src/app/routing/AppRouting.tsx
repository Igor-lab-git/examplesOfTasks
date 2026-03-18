import type {JSX} from "react";
import { Route, Routes} from "react-router-dom";
import {HomePage} from "../../pages/HomePage";
import {DetailadPage} from "../../pages/DetailadPage";



const AppRouting = (): JSX.Element => {
    return (
        <>
                <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/detailed" element={<DetailadPage />} />
                </Routes>
        </>
    )

}

export default AppRouting;