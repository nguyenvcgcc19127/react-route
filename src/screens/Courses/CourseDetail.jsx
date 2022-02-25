import React from 'react';
import { useParams } from 'react-router-dom';
import Data from './education.json';

export default function CourseDetail(){
    const params = useParams();
    const pid = params.id;
    
    return (
        <div className='container'>
            <div className="row">
                {
                    Data.course.map((val) => {
                        if(val.id ==  pid){
                            return(
                                <div className='row'>
                                    <div className="card2">
                                    <h1 className='h1'>Thông tin khóa học</h1>
                                        <div className="col-lg-6 column">
                                            <div>
                                                <h3>{ val.name }</h3>
                                                <img className="img" src={ val.image } />
                                                <div className="card-content">
                                                    <p>Ngày khai giảng: { val.startDate }</p>
                                                    <p>Trình độ: { val.level }</p> 
                                                    <p>Lịch học: { val.startDate }</p>
                                                    <p>Giờ học: { val.time }</p>
                                                    <p >Học phí: { val.price }VND</p> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 column">
                                            <div className="card-content">
                                                <div >
                                                    <h2>Giáo trình</h2>
                                                    <ul>
                                                        {val.details.map((e, index) => {
                                                            return (
                                                                <li>
                                                                    <p>Buổi { index + 1}: {e}  {" "}</p>
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>      
                                </div> 
                            )
                        }
                    })
                } 
            </div>         
       </div>
       
    );
}