import React from 'react';
import logo from '../../styles/img/logo.jpg';
import avatar from '../../styles/img/avatar.jpg';
import './_header.scss';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className='header'>
            <div className="header__inner container">
                <div className="header__left">
                    <Link to="/" className="header__logo logo">
                        <img src={logo} alt="Логотип сайта"
                             className='logo__image'
                             loading='lazy'
                             width='124'
                             height='24'/>
                    </Link>
                </div>
                <div className="header__right">
                    <div className="header__notif">
                        <Link to='/' className="header__favorite">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                 fill="none">
                                <path
                                    d="M7.5428 3.85453L7.99961 4.39097L8.45642 3.85453C9.04386 3.16469 9.94768 2.72793 10.8796 2.72793C12.5194 2.72793 13.7996 4.0081 13.7996 5.64793C13.7996 6.66044 13.3497 7.62601 12.4352 8.74406C11.5138 9.87052 10.1846 11.0773 8.52456 12.5827L8.5237 12.5834L7.99808 13.0619L7.47513 12.5895C7.4749 12.5893 7.47468 12.5891 7.47445 12.5889C5.81456 11.0805 4.48556 9.87227 3.56417 8.74501C2.64956 7.62605 2.19961 6.66045 2.19961 5.64793C2.19961 4.0081 3.47978 2.72793 5.11961 2.72793C6.05154 2.72793 6.95535 3.16469 7.5428 3.85453Z"
                                    stroke="#595959"/>
                            </svg>
                        </Link>
                        <Link to='/' className="header__notification">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
                                 fill="none">
                                <path
                                    d="M6.73973 2.05002C6.84132 1.79893 7.01558 1.5839 7.24017 1.43249C7.46476 1.28108 7.72946 1.2002 8.00032 1.2002C8.27118 1.2002 8.53587 1.28108 8.76046 1.43249C8.98506 1.5839 9.15932 1.79893 9.26091 2.05002C10.2664 2.32654 11.1532 2.92547 11.7853 3.75483C12.4174 4.58419 12.7598 5.59812 12.7598 6.6409V9.83453L14.0054 11.703C14.0738 11.8054 14.113 11.9244 14.119 12.0473C14.1249 12.1703 14.0974 12.2926 14.0394 12.4011C13.9813 12.5096 13.8948 12.6004 13.7892 12.6636C13.6836 12.7269 13.5628 12.7603 13.4397 12.7603H10.3563C10.2744 13.3267 9.99119 13.8447 9.55851 14.2193C9.12583 14.594 8.57266 14.8002 8.00032 14.8002C7.42798 14.8002 6.8748 14.594 6.44212 14.2193C6.00944 13.8447 5.72623 13.3267 5.64437 12.7603H2.56089C2.43779 12.7603 2.317 12.7269 2.2114 12.6636C2.1058 12.6004 2.01935 12.5096 1.96128 12.4011C1.90321 12.2926 1.87569 12.1703 1.88166 12.0473C1.88763 11.9244 1.92687 11.8054 1.99519 11.703L3.24082 9.83453V6.6409C3.24082 4.44881 4.72306 2.60212 6.73973 2.05002ZM6.75729 12.7603C6.88715 13.1828 7.07457 13.4412 7.27674 13.5842C7.44899 13.7061 7.78965 13.7715 8.00066 13.7715C8.21167 13.7715 8.57686 13.7315 8.83507 13.5488C9.16274 13.317 9.24888 12.9592 9.3191 12.7603H6.75729ZM8.00032 2.85297C7.09868 2.85297 5.93666 3.28198 5.29911 3.91954C4.66155 4.5571 4.30337 5.73926 4.30337 6.6409V10.0405C4.3034 10.1749 4.26366 10.3062 4.18915 10.4179L3.24082 11.703H12.7598L11.8046 10.4179C11.7303 10.3061 11.6908 10.1748 11.6911 10.0405V6.6409C11.6911 5.73926 11.3329 4.5571 10.6953 3.91954C10.0578 3.28198 8.90196 2.85297 8.00032 2.85297Z"
                                    fill="#595959"/>
                            </svg>
                        </Link>
                    </div>
                    <div className="header__profile profile">
                        <img src={avatar} alt="Аватарка пользователя" className="profile__img"/>
                        <Link to='/user/1' className="profile__name">Leanne Graham</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;