import React, {useEffect, useState} from 'react';
import './_main.scss';
import Card from "../card/card";
import {useArchiveUsers} from "../../hook/useArchiveUsers";
import {FetchSlice} from "../../fetch/fetch";

const Main = () => {

    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        FetchSlice(setUser, setIsLoading)
    }, []);

    const archiveUsers = useArchiveUsers()
    const activeUsers = user.filter(u => !archiveUsers.some(a => a.id === u.id))
    const deleteUser = (userId) => {
        setUser(prevUsers => prevUsers.filter(u => u.id !== userId)); // Удаляем пользователя по id
    };

    return (
        <main className='main'>
            <div className="main__inner container">
                <h1 className="main__title">
                    Активные
                </h1>
                <hr className='main__spacer'/>
                {isLoading
                    ?
                    <h1 className='preloader'> Загрузка...</h1>
                    :
                    <div className="main__card card">
                        {activeUsers && activeUsers.map((user, index) =>
                            <Card user={user} key={index} deleteUser={deleteUser}/>
                        )}
                    </div>
                }
                <section className="main__archive archive">
                    <h1 className="archive__title">
                        Архив
                    </h1>
                    <hr className="archive__spacer"/>
                    <div className="archive__users">
                        {archiveUsers && archiveUsers.map((user, index) =>
                            <Card user={user} key={index} deleteUser={deleteUser}/>
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Main;