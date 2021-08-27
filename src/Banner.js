import React, {useState, useEffect} from 'react'
import axios from './axios'
import request from './request'
import './Banner.css'
function Banner() {
    const [movie, setmovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get(request.fetchNetflixOriginal)
            setmovie(req.data.results[Math.floor(Math.random()* req.data.results.length-1)-1])
        }
        fetchData();
    }, [])
    function trim(str,n){
        return (str?.length > n?str.substr(0,n-1)+"...":str)
    } 
    console.log(movie)
    return (
        <header className = "Banner" style ={
            {backgroundImage:`url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
             backgroundPosition:"center center",
             backgroundSize : "cover"
           }}>
            <div className =" Banner-content">
            {/*heading  */}
            <h1 className ="Banner_title">{movie?.name || movie?.original_name || movie?.titile}</h1>
            {/* Banner btn */}
            <div className ="Banner_btns">
                <button className ="btns">Play</button>
                <button className ="btns">Views</button>
            </div>
            {/* Banner des */}
            <h2 className ="Banner_des">{trim(movie?.overview,150)}</h2>
            </div>
            <div className="Banner-fade"></div>
        </header>
    )
}
export default Banner
