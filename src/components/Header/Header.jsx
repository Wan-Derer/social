import React from "react";
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';


const Header = (props) => {
    return <header className={s.header}>
        <img src='https://api.freelogodesign.org/assets/thumb/logo/332556_400.png' alt=''/>

        <div className={s.loginBlock}>
            {props.isAuth ? props.login :
            <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>;
}

export default Header;


