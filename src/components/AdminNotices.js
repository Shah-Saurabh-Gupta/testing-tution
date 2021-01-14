import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AdminNotices() {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("https://testing-tution.herokuapp.com/notice/");
        setUser(result.data.reverse());
    };
    const deleteUser = async id => {
        await axios.delete(`https://testing-tution.herokuapp.com/notice/${id}`);
        loadUsers();
    };
    //console.log(users);

    return (
        <div className="adminnotice">
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
                                <td>{user.title}</td>
                                <td>
                                    <Link className="btn btn-danger" to="" onClick={() => deleteUser(user._id)}>Delete</Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <div className="table__footer">
                <Link className="adduser__banner text-white" to={`/admin/addNotice`}>ADD NEW NOTICE</Link>
            </div>
        </div>
    )
}

export default AdminNotices
