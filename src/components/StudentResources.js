import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Studentpanel';
import UserContext from "../context/userContext";

function StudentResources() {
    const { userData } = useContext(UserContext);
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        if (userData.user.batch) {
            let result = await axios.get(`https://tution-website.herokuapp.com/files/${userData.user.batch}`);
            setUser(result.data.reverse());
        }
        else {
            let result = await axios.get(`https://tution-website.herokuapp.com/files/${userData.user.user.batch}`);
            setUser(result.data.reverse());
        }
        // setUser(result.data.reverse());
        // console.log(props.batch);
    };


    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    };

    return (
        <>
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
        </>
    )
}

export default StudentResources
