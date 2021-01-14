import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NoticeMain from '../components/NoticeMain';
import NoticeSidebar from '../components/NoticeSidebar';
import './Notice.css';

function Notice() {

    const [rooms, setRooms] = useState([]);
    useEffect(() => {
        (async () => {
            await axios.get("https://testing-tution.herokuapp.com/notice/").then((res) => {
                setRooms(res.data.reverse());
                // console.log(res.data);
            });
        })();
    }, []);

    return (
        <div className="notice">
            <div className="notice__sidebar">
                <h3 className="notice__banner">NOTICE</h3>
                <div className="notice__sidebarlist">
                    {rooms.map((room) => (
                        <NoticeSidebar
                            key={room._id}
                            id={room._id}
                            title={room.title}
                            content={room.content}
                            author={room.author}
                        />
                    ))}
                </div>
            </div>
            <div className="notice__main">
                <h3 className="notice__banner">NOTICE CONTENTS</h3>
                <div className="notice__maincontent">
                    <NoticeMain />
                </div>
            </div>
        </div>
    )
}

export default Notice;


// key={room.id} id={room.id} title={room.data.title}
