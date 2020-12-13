import React, {} from 'react';
import s from '../styles/infoWindow.module.css'

const InfoWindow = ({vehicle}) => {

    return (
            <div className={s.comment}>
                ID: {vehicle._id}<br/>
                Type: {vehicle.type}<br/>
                Status: {vehicle.status}<br/>
                Location:<br/>
                &nbsp;&nbsp;lat: {vehicle.location.latitude}<br/>
                &nbsp;&nbsp;long: {vehicle.location.longitude}<br/>
            </div>
        )
}

export default InfoWindow;
