import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminResources.css';
import ProgressBar from './ProgressBar';

function AdminResources() {
    const [fileData, setFileData] = useState();
    const [files, setFile] = useState("");
    const [filename, setFileName] = useState("");
    const [batch, setBatch] = useState("");
    const [message, setMessage] = useState("");
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("https://testing-tution.herokuapp.com/files/");
        setUser(result.data.reverse());
    };
    const deleteUser = async id => {
        await axios.delete(`https://testing-tution.herokuapp.com/files/${id}`);
        loadUsers();
    };

    const handleFileChange = ({ target }) => {
        setFileData(target.files[0]);
        setFile(target.value);
        //console.log(target.files[0]);
        //console.log(files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("filename", filename);
        formData.append("batch", batch);
        formData.append("file", fileData);


        await axios.post("https://testing-tution.herokuapp.com/files", formData,
            {
                onUploadProgress: ProgressEvent => {
                    setUploadPercentage(parseInt(Math.round((ProgressEvent.loaded * 100) /
                        ProgressEvent.total)))
                    setTimeout(() => setUploadPercentage(0), 10000);
                }
            })
            .then((res) => console.log("res", res.data))
            .catch((error) => console.error(error));

        setFileName("");
        setBatch("");
        setFile("");
        setMessage("File Uploaded");
    };

    return (
        <div className="adminresources">
            <div className="uploadform">
                {message ? <p>{message}</p> : null}
                <form onSubmit={handleSubmit}>
                    <input type="text" value={filename} name="filename" onChange={(e) => setFileName(e.target.value)} placeholder="Enter File Name" />
                    <input type="text" value={batch} name="batch" onChange={(e) => setBatch(e.target.value)} placeholder="Enter Batch Name" />
                    <input type="file" value={files} name="file" onChange={handleFileChange} placeholder="Upload File" />
                    <button type="submit">UPLOAD FILE</button>
                    <ProgressBar percentage={uploadPercentage} />
                </form>
            </div>
           
            <div className="getfiles">
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
                                    <div className="btn btn-danger" onClick={() => deleteUser(user._id)}>Delete</div>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AdminResources
