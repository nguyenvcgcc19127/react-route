import React from 'react';
import Button from 'react-bootstrap/Button';
import Data from './education.json'
import { useState, useEffect } from 'react';
import "../../App.css";

export default function Item(){

    const [fav, setFav] = useState([]);

    useEffect(async ()=>{
        const savedFavCourse = localStorage.getItem('id');
        savedFavCourse === null ? setFav([]) : setFav(JSON.parse(savedFavCourse))
    }, [])

    const addToFavCourse = (favCourse) => {
        localStorage.setItem('id', JSON.stringify(favCourse))
        setFav(favCourse)
    }

    const handleClick = (id) =>{
        const temp = [...fav];
        const position = temp.indexOf(id);
        
        position === -1 ? temp.push(id) : temp.splice(position, 1)

        addToFavCourse(temp)
    }
    
    return (
        <div className='container'>
            <div className="row">              
                {
                    Data.course.map((val, index) => {
                        console.log( fav)
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
                                            <Button href={ "course-detail/" + val.id + "/" + val.slug + ".html" }>Chi tiết</Button>
                                            {
                                                fav?.length === null ?
                                                    <Button onClick={() => handleClick(val.id)}>Add to favorite</Button> :
                                                fav?.includes(val.id) ?
                                                    <Button onClick={() => handleClick(val.id)} style={{color: "red"}}>Unfavorite </Button> : 
                                                <Button onClick={() => handleClick(val.id)}>Add to favorite </Button>
                                            }
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