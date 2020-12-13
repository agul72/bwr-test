import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList} from '@fortawesome/free-solid-svg-icons';

import s from '../styles/navbar.module.css';

export const NavBar = () => {

    return (
        <nav className={s.container}>
            <div className={s.menu}>
                <FontAwesomeIcon icon={faList} size={'lg'}/>
            </div>
            <div className={s.title}>Vehicles: O'coffee Brazil</div>
            <img className={s.logo} src={'/images/bwr-logo.png'} alt={''}/>

        </nav>
    )
}
