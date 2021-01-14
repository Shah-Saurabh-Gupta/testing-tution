import React from 'react';
import AdminNotices from '../components/AdminNotices';
import AdminResources from '../components/AdminResources';
import AdminStudentReg from '../components/AdminStudentReg';
import './Adminpanel.css';

function Adminpanel() {
    return (
        <div className="adminpanel">
            <div className="adminpanel__students"><AdminStudentReg /></div>
            <div className="adminpanel__notices"><AdminNotices /></div>
            <div className="adminpanel__resources"><AdminResources /></div>
        </div>
    )
}
export default Adminpanel
