import React, { useEffect, useState } from 'react';
import './AdminStudentReg.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AdminStudentReg() {

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:5000/admin/");
        setUser(result.data.reverse());
    };
    const deleteUser = async id => {
        await axios.delete(`http://localhost:5000/admin/${id}`);
        loadUsers();
    };
    console.log(users);

    return (
        <div className="adminstudent">
            <div className="table__body">
                <table className="table">
                    <thead className="thead">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="tbody">
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{user.displayName}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="btn btn-primary" to={`/admin/viewStudent/${user._id}`}>View</Link>
                                    <Link className="btn btn-warning text-white"  to={`/admin/editStudent/${user._id}`}>Edit</Link>
                                    <Link className="btn btn-danger" to="" onClick={() => deleteUser(user._id)}>Delete</Link>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
            <div className="table__footer">
                <Link className="adduser__banner text-white" to={`/admin/addStudent`}>ADD NEW STUDENT</Link>
            </div>
        </div>
    )
}

export default AdminStudentReg
