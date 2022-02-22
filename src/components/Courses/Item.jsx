import React from 'react';
import Button from 'react-bootstrap/Button';
import Data from './education.json';
import "../../App.css";

export default function Item(){
    return (
        <div className='container'>
            <div className="row">              
                {
                    Data.course.map(val => {
                        return (
                            <div className="col-lg-4 column">
                                <div className="card">
                                    <img className="img" src={ val.image } /> 
                                    <div className="card-content">
                                        <h4>{ val.name }</h4>
                                        <p>Ngày khai giảng: { val.startDate }</p>
                                        <p>Trình độ: { val.level }</p> 
                                        <p>Lịch học: { val.startDate }</p>
                                        <p>Giờ học: { val.time }</p>
                                        <div>
                                            <Button className="button" href={ "course-detail/" + val.id + "/" + val.slug + ".html" }>Chi tiết</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}