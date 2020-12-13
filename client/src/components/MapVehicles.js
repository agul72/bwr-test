import React, { useEffect, useState } from "react";
import isEmpty from 'lodash.isempty';
import GoogleMap from '../components/GoogleMap';

import s from '../styles/mapVehicles.module.css';
import {useHttp} from "../hooks/http.hook";
import Marker from "./Marker";

function MapVehicles() {

    let defaultCenter = {
        lat: 32.00,
        lng: 35.00
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            defaultCenter = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        })
    }

    const initVehicles = async () => {
        const vehicles = await request('/api/vehicles/all', 'GET');
        vehicles.forEach(vehicle => vehicle.show = false);
        return vehicles;
    };

    const [vehicles, setVehicles] = useState([]);
    const {request} = useHttp();

    useEffect(() => {
        initVehicles().then(vehicles => setVehicles(vehicles));
    }, []);

    const onChildClickCallback = (key) => {
        setVehicles((vehicles) => {
            const index = vehicles.findIndex((e) => e._id === key);
            vehicles[index].show = !vehicles[index].show; // eslint-disable-line no-param-reassign
            return [...vehicles];
        });
    };

    return (
        <div className={s.mapBox}>
            <GoogleMap
                defaultCenter={defaultCenter}
                defaultZoom={10}
                onChildClick={onChildClickCallback}

            >
                {!isEmpty(vehicles) &&
                vehicles.map((vehicle) => (
                    <Marker
                        key={vehicle._id}
                        lat={vehicle.location.latitude}
                        lng={vehicle.location.longitude}
                        show={vehicle.show}
                        vehicle={vehicle}
                    />
                ))
                }

            </GoogleMap>
        </div>
    )
}

export default MapVehicles;
