import "./Movies.css"
import React, { useEffect, useState } from 'react';
import Movie from "../Movie/Movie";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setMovies(data))

    }, [])
    const [quantity, setQuantity] = useState(0) ;
    const [balance , setBalance] = useState(0) ;
    const handlePlayers = (balance, WatchTime) => {
        let getFromStorage = localStorage.getItem("time");
        if (getFromStorage) {
           let TotalTime = +getFromStorage + WatchTime;
            localStorage.setItem("time", TotalTime)
            setQuantity(TotalTime)
           
        }
        else {
            localStorage.setItem("time", WatchTime)
            setQuantity(WatchTime)
        }
        let balanceFromStorage = localStorage.getItem("balance");
        if(balanceFromStorage){
        let newBalance = +balanceFromStorage + +balance ;
        console.log(newBalance)
        localStorage.setItem("balance" , newBalance)
        setBalance(newBalance)
        }
        else{
            localStorage.setItem("balance", balance)
            setBalance(balance)
        }

    }
    useEffect( () => {
        let balanceFromStorage = localStorage.getItem("balance");
        setBalance (balanceFromStorage)
    } , [balance])

    useEffect( ()=> {
        let dataFromStorage = localStorage.getItem("time")
        setQuantity (dataFromStorage)
    }, [quantity])
    
    return (
        <div className="parentMovie">
            <div className="movieContainer">
                {
                    movies.map(movie => <Movie
                        handlePlayers={handlePlayers}
                        key={movie.id}
                        movie={movie}> </Movie>)
                }
            </div>
            <div >
                <div className="summeryCart">
                    <h2 className="summery">Summery</h2>
                    <p>Player Name : { }</p>
                    <p>Total WatchTime : {quantity}</p>
                    <p>Total Balance : {balance }</p>
                    <p>Total Balance : { }</p>
                    <p>Total Balance : { }</p>
                    <p>Total Balance : { }</p>
                </div>
            </div>
        </div>
    );
};

export default Movies;