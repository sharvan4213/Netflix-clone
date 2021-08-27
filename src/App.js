import React from 'react';
import './App.css';
import Row from './Row';
import  request from './request'
import Banner from './Banner';
import Navbar from './Navbar'
function App() {
  return (
    <div className="App">
    {/* navbar */}
    <Navbar/>
    {/* header poster */}
     <Banner />
     <Row title = "NETFLIX ORIGINALS"  fetchUrl ={request.fetchNetflixOriginal} isLarge/>
     <Row title = "Trending"  fetchUrl ={request.fetchTrending}/>
     <Row title = "Top Rated"  fetchUrl ={request.fetchTopRated}/>
     <Row title = "Actions"  fetchUrl ={request.fetchAction}/>
     <Row title = "Horrer"  fetchUrl ={request.fetchHorrer}/>
     <Row title = "Comedy"  fetchUrl ={request.fetchComedy}/>
     <Row title = "Romance"  fetchUrl ={request.fetchRomance}/>
     <Row title = "Documentries"  fetchUrl ={request.fetchDiscoveries}/>
    </div>
  );
}

export default App;
