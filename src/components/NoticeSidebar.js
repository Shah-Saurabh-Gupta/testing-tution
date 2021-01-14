import React from 'react';
import './NoticeSidebar.css';
import { Link } from 'react-router-dom';

function NoticeSidebar(props) {
    return (
        <>
        <Link to={`/notice/${props.id}`}>
        <div className="noticesidebar">
            <h3>{props.title}</h3>
        </div>
        </Link>
        </>
    )
}

export default NoticeSidebar
