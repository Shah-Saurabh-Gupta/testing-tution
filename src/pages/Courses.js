import React from 'react';
import Quote from '../components/Quote';
import './Courses.css'

function Courses() {
    return (
        <div className="course">
            <div className="course__left">
                <div className="course__lefttop">
                    <div className="course__lefttop__1">
                        <div className="card1">
                            <div className="card1__front"><div className="frontclass">7th</div></div>
                            <div className="card1__back"><div className="backclass">All Subjects</div></div>
                        </div>
                    </div>
                    <div className="course__lefttop__2">
                        <div className="card2">
                            <div className="card2__front"><div className="frontclass">8th</div></div>
                            <div className="card2__back"><div className="backclass">All Subjects</div></div>
                        </div>
                    </div>
                </div>
                <div className="course__leftmiddle">
                    <div className="coursebanner">Address</div>
                    <div className="coursecontent"></div>
                </div>
                <div className="course__leftbottom">
                    <div className="course__leftbottom__1">
                        <div className="card4">
                            <div className="card4__front"><div className="frontclass">10th</div></div>
                            <div className="card4__back"><div className="backclass">English<br />science<br />Math</div></div>
                        </div>
                    </div>
                    <div className="course__leftbottom__2">
                        <div className="card5">
                            <div className="card5__front"><div className="frontclass">9th</div></div>
                            <div className="card5__back"><div className="backclass">English<br />science<br />Math</div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="course__right">
                <div className="course__righttop">
                    <div className="coursebanner">Qoute of the day</div>
                    <div className="coursecontent"><Quote/></div>
                </div>
                <div className="course__rightmiddle">
                    <div className="course__rightmiddle__1">
                        <div className="card7">
                            <div className="card7__front"><div className="frontclass">+1 Science</div></div>
                            <div className="card7__back"><div className="backclass">Physics<br />chemistry<br /> maths</div></div>
                        </div>
                    </div>
                    <div className="course__rightmiddle__2">
                        <div className="card8">
                            <div className="card8__front"><div className="frontclass">+2 Commerce</div></div>
                            <div className="card8__back"><div className="backclass">account<br />economics<br />b.st</div></div>
                        </div>
                    </div>
                    <div className="course__rightmiddle__3">
                        <div className="card9">
                            <div className="card9__front"><div className="frontclass">+1 Commerce</div></div>
                            <div className="card9__back"><div className="backclass">account<br />economics<br />b.st</div></div>
                        </div>
                    </div>
                </div>
                <div className="course__rightbottom">
                    <div className="course__rightbottom__1">
                        <div className="coursebanner"></div>
                        <div className="coursecontent">Maths Diploma</div>
                    </div>
                    <div className="course__rightbottom__2">
                        <div className="course__rightbottom__21">
                            <div className="card13">
                                <div className="card13__front"><div className="frontclass">+2 Science</div></div>
                                <div className="card13__back"><div className="backclass">Physics<br />chemistry<br /> maths</div></div>
                            </div>
                        </div>
                        <div className="course__rightbottom__22">
                            <div className="card12">
                                <div className="card12__front"><div className="frontclass">6th</div></div>
                                <div className="card12__back"><div className="backclass">All Subjects</div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
