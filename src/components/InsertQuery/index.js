import React, { useState, useEffect } from 'react';
import Axios from 'axios';


export default function InsertData() {
    const [movieName, setMovieName] = useState('');
    const [review, setReview] = useState('');

    const [movieList, setMovieList] = useState([]);


    const submitReview= () => {
        Axios.post('http://localhost:3001/api/insert', {
            movieName: movieName, 
            movieReview: review,
        }).then(() => {
            alert('Successful Insert');
        })
    }

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response) => {
           setMovieList(response.data);
           console.log(response.data);
        }) 
    }, []);


    return (
     
        <div className='form'>
            <h1>Insert Data into MySql Database</h1>
            <div className='form'>
            <label>Movie Name:</label>
            <input type="text" name="movieName" onChange={(e) => {
                setMovieName(e.target.value)
            }}></input>
            <label>Review:</label>
            <input type="text" name="review" onChange={(e) => {
                setReview(e.target.value)
            }}></input>
            <button onClick={submitReview}>Submit</button>

            <ul>
            {movieList.map((val) => {
                return <li key={val.id}>
                    MovieName: {val.movie_name}
                    Movie Review: {val.movie_review}</li>
            })}
            </ul>
            

            </div>
        </div>    
    )
}
