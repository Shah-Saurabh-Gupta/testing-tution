import React, { useContext } from 'react';
import StudentResources from '../components/StudentResources';
import './Studentpanel.css';
import UserContext from "../context/userContext";


function Studentpanel() {
    const { userData } = useContext(UserContext);
    return (
        <div className="studentpanel">
            <div className="studentpanel__students">
                {userData.user.user ? (
                    <>
                        <div className="Studentpanel__students-name"><h3>Welcome {userData.user.user.displayName}</h3></div>
                        <div className="Studentpanel__students-batch"> <h3>Batch: {userData.user.user.batch}</h3></div>
                    </>
                ) : (
                        <>
                            <div className="Studentpanel__students-name"><h3>Welcome {userData.user.displayName}</h3></div>
                        <div className="Studentpanel__students-batch"> <h3>Batch: {userData.user.batch}</h3></div>
                        </>
                    )}
            </div>
            <div className="studentpanel__resources__notes">
            <StudentResources/>
            </div>
        </div>
    )
}

export default Studentpanel