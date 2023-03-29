import React from 'react';
import "./Movie.css"

const Movie = ({ movie , handlePlayers}) => {
    const { id, name, WatchTime, balance, picture } = movie;
    return (
        <div>
            <div className='movie'>
                <h6 className='img'><img  src={picture} alt="" /></h6>
                <h5>Name : {name} </h5>
                <p>Watch Time : {WatchTime} </p>
                <p>Balance : {balance}</p>
                <button onClick={()=> handlePlayers(balance , WatchTime)}>Hire</button>
            </div>
            

        </div>
    );
};

export default Movie;