import React, { useEffect, useState } from 'react';
import './NoticeMain.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function NoticeMain() {
    const { noticeId } = useParams();
    // const [noticeName, setNoticeName] = useState("");
    const [content, setContent] = useState([]);
    //console.log(noticeId);
    useEffect(() => {
        (async () => {
            if (noticeId) {
                await axios.get(`http://localhost:5000/notice/${noticeId}`).then((res) => {
                    setContent(res.data);
                });
            }
        })();
    }, [noticeId]);
    console.log(content);
    return (
        <div className="noticemain">
           <div className="noticemain__heading">
               <h3>{content.title}</h3>
           </div>
           <div className="noticemain__content">
               <p>{content.content}</p>
               <br/>
               <h4>{content.author}</h4>
           </div>
        </div>
    )
}

export default NoticeMain
