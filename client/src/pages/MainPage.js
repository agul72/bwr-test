import React, {} from "react";
import MapVehicles from "../components/MapVehicles";

import s from "./mainpage.module.css";

export const MainPage = () => {

    return (
        <div className={s.container}>
            <MapVehicles/>
        </div>
    )
}
