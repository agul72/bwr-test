import React from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import s from '../styles/googleMap.module.css'

const REACT_APP_MAP_KEY = "AIzaSyB08Z2947_Sw3aql0Jrh30P3d4uVYH2GoE";

const GoogleMap = ({ children, ...props }) => (
    <div className={s.wrapper}>
        <GoogleMapReact
            bootstrapURLKeys={{
                key: REACT_APP_MAP_KEY,
            }}
            {...props}
        >
            {children}
        </GoogleMapReact>
    </div>
);

GoogleMap.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

GoogleMap.defaultProps = {
    children: null,
};

export default GoogleMap;
