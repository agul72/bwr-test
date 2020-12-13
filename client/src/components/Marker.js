import React from 'react';
import InfoWindow from "./InfoWindow";

import s from '../styles/marker.module.css'

const Marker = ({show, vehicle}) => {

    const getVehicleIcon = () => {
        switch (vehicle.type.toLowerCase()) {
            case 'drone':
                return '/images/drone.png';
            case 'tractor':
                return '/images/tractor.png';
            default:
                return
        }
    }

    const markerStyle = {
        borderRadius: '50%',
        height: 20,
        width: 20,
        backgroundColor: show ? 'red' : 'blue',
        cursor: 'pointer',
        zIndex: 10,
        position: 'absolute',
        left: -10,
        top: -10,
    };

    return (
        <div className={s.wrapper}>
            <div style={markerStyle}/>
            {show && <InfoWindow vehicle={vehicle}/>}
            <img src={getVehicleIcon()} alt={''}/>
        </div>
    );
}

export default Marker;
