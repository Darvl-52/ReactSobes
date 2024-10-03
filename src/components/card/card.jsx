import React, {useState} from 'react';
import avatar from "../../styles/img/avatar.jpg";
import './_card.scss';
import {Link} from "react-router-dom";
import {UseActions} from "../../hook/useActions";
import {useArchiveUsers} from "../../hook/useArchiveUsers";

const Card = ({user, deleteUser}) => {

    const [dropDown, setDropDown] = useState(false);

    const archiveUser = useArchiveUsers();
    const {ToggleToArchive} = UseActions();
    const isExists = archiveUser.some(a => a.id === user.id);

    return (
        <article className="card__content">
            <Link to={`/user/${user.id}`} className="card__content-link">
                <img src={avatar} alt="Аватарка пользователя"
                     className="card__content-img"
                     loading='lazy'
                     width='112'
                     height='120'/>
            </Link>
            <div className="card__right">
                <div className="card__firts">
                        <h2 className="card__title">
                            {user.name}
                        </h2>
                <button className="card__dropdown" type='submit' onClick={() => setDropDown(!dropDown)}>
                        <i className='card__points'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25"
                                 viewBox="0 0 24 25"
                                 fill="none">
                                <g>
                                    <path
                                        d="M10 18.5C10 19.6 10.9 20.5 12 20.5C13.1 20.5 14 19.6 14 18.5C14 17.4 13.1 16.5 12 16.5C10.9 16.5 10 17.4 10 18.5ZM10 6.5C10 7.6 10.9 8.5 12 8.5C13.1 8.5 14 7.6 14 6.5C14 5.4 13.1 4.5 12 4.5C10.9 4.5 10 5.4 10 6.5ZM10 12.5C10 13.6 10.9 14.5 12 14.5C13.1 14.5 14 13.6 14 12.5C14 11.4 13.1 10.5 12 10.5C10.9 10.5 10 11.4 10 12.5Z"
                                        fill="#161616"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_120_682">
                                        <rect width="24" height="24" fill="white"
                                              transform="translate(0 0.5)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </i>
                    </button>
                </div>
                <p className="card__company">
                    {user.company.name}
                </p>
                <p className="card__city">{user.address.city}</p>
            </div>
            <div className={dropDown ? 'dropdown active' : 'dropdown'}>
                <Link to={`/user/${user.id}`} className="dropdown__btn">Редактировать</Link>
                <button className="dropdown__btn" onClick={() => ToggleToArchive(user) && setDropDown(!dropDown)}> {isExists ? 'Активировать' : 'Архивировать'} </button>
                <button className="dropdown__btn" onClick={() =>  {
                    deleteUser(user.id);
                    setDropDown(!dropDown)
                }}>Скрыть</button>
            </div>
        </article>
    );
};

export default Card;