import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import './_singlePage.scss';
import Modal from "../modal/modal";

import Avatar from '../../styles/img/avatarX2.jpg'
import CheckBox from '../../styles/img/Checked-box.png'
import {useForm} from "react-hook-form";
import {FetchUserOne} from "../../fetch/fetch";
import {userInput} from "../config/config";
import Input from "../input/input";

const SinglePage = () => {

    const {id} = useParams();
    const [user, setUser] = useState(null);
    const [modal, setModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const {register, handleSubmit, formState: {errors}} = useForm();

    const submit = data => {
        console.log(data);
    }

    useEffect(() => {
        FetchUserOne(id, setUser, setIsLoading)
    }, [id]);

    const input = userInput(user)

    return (
        <>
            {isLoading
                ?
                <h1 className='preloader'>Загрузка...</h1>
                :
            user && (
                    <main className='main'>
                        <div className="main__inner container">
                            <div className="main__top">
                                <Link to="/" className="main__back">
                                    <i className='main__arrow'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 21 22"
                                             fill="none">
                                            <path d="M13.125 11H0.875" stroke="#595959"/>
                                            <path d="M7 17.125L0.875 11L7 4.875" stroke="#595959"/>
                                        </svg>
                                    </i>Назад
                                </Link>
                            </div>
                            <div className="main__data data">
                                <div className="data__left">
                                    <div className="data__left-avatar">
                                        <img src={Avatar} className='data__left-img'
                                             alt="Аватарка пользователя"
                                             loading='lazy'
                                             width='280'
                                             height='485'
                                        />
                                    </div>
                                    <div className="data__left-menu">
                                        <h4 className="data__left-title">
                                            Данные профиля
                                        </h4>
                                        <form className="data__left-form">
                                            <input type="text" className="data__left-input" placeholder='Рабочее пространство'/>
                                            <input type="text" className="data__left-input" placeholder='Приватность'/>
                                            <input type="text" className="data__left-input" placeholder='Безопасность'/>
                                        </form>
                                    </div>
                                </div>
                                <div className="data__right">
                                    <h1 className="data__right-title">
                                        Данные профиля
                                    </h1>
                                    <hr className="data__right-spacer"/>
                                    <form className="data__right-form" onSubmit={handleSubmit(submit)}>
                                        <Input input={input} setModal={setModal} modal={modal} register={register} errors={errors}/>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <Modal modal={modal} setModal={setModal}>
                            <button className="modal__close" onClick={() => setModal(!modal)}>
                                <i>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"
                                         fill="none">
                                        <path
                                            d="M18.7433 10.4937C19.085 10.152 19.085 9.59799 18.7433 9.25628C18.4016 8.91457 17.8476 8.91457 17.5059 9.25628L13.9998 12.7623L10.4937 9.25628C10.152 8.91457 9.598 8.91457 9.25629 9.25628C8.91458 9.59799 8.91458 10.152 9.25629 10.4937L12.7624 13.9998L9.25628 17.5059C8.91457 17.8476 8.91457 18.4016 9.25628 18.7433C9.59799 19.085 10.152 19.085 10.4937 18.7433L13.9998 15.2372L17.5059 18.7433C17.8476 19.085 18.4016 19.085 18.7433 18.7433C19.085 18.4016 19.085 17.8476 18.7433 17.5059L15.2372 13.9998L18.7433 10.4937Z"
                                            fill="#595959"/>
                                    </svg>
                                </i>
                            </button>
                            <div className="modal__bottom">
                                <img src={CheckBox}
                                     alt="Изображение галочки, которая показывает пользователю, что изменения были успешно выполнены"
                                     loading='lazy' width='84' height='84'/>
                                <h1 className='modal__title'>Изменения сохранены !</h1>
                            </div>
                        </Modal>
                    </main>
                )
            }
        </>
    );
};

export default SinglePage;