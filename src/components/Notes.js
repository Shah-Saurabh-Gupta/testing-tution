import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Notes.css';

function Notes() {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("https://testing-tution.herokuapp.com/files/Free");
        setUser(result.data.reverse());
    };

    const openInNewTab = (url) =>{
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if(newWindow) newWindow.opener = null
    };

    return (
        <div className="getnotes">
            <div className="table__body">
                <table className="table">
                    <thead className="thead">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.filename}</td>
                                <td>
                                    <Link className="btn btn-danger" to="" 
                                    onClick={() => openInNewTab(`${user.avatar}`)}>Download</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Notes
