import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewStudent = () => {
    const [user, setUser] = useState({
        email: "",
        displayName: "",
        batch: "",
        address: "",
        phone: ""
    });
    useEffect(() => {
        loadUser();
    },[]);
    const { id } = useParams();
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:5000/admin/${id}`);
        setUser(res.data);
    };
      
    return (
        <div className="container py-4">
            <ul className="list-group w-50">
                <li className="list-group-item text-dark">Email: {user.email}</li>
                <li className="list-group-item text-dark">Name: {user.displayName}</li>
                <li className="list-group-item text-dark">Batch: {user.batch}</li>
                <li className="list-group-item text-dark">Address: {user.address}</li>
                <li className="list-group-item text-dark">phone: {user.phone}</li>
            </ul>
        </div>
    );
};

export default ViewStudent;
