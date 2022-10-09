import React, {useState, useEffect} from "react";
import './App.css';
import Axios from 'axios';

function App() {
  const [movieName, setMovieName]= useState("");
  const [review, setReview]= useState("");
  const [movieReviewList, setMovieList]=useState([]);
  const [newReview, setNewReview]= useState("");
  const [moviesSorted,setMoviesListSorted]=useState([]);
  const [response,setresponse]=useState([]);


  useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieList(response.data);
	    setMoviesListSorted(response.data.map(x=>{return{...x}}).sort((x,y)=>x.movieName.localeCompare(y.movieName)));
      setresponse(response.data)
    });
  }, []);

	const getSortedList=()=>{setMovieList([...moviesSorted]);};

  const submitReview=()=>{Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,});
      setMovieList([...movieReviewList,
        { movieName: movieName, movieReview: review },
      ]);
 };

  const filterReviews=(movie)=>{
	 setMovieList(responseData.map(x => {
      return {...x}}));
   setMovieListSorted(response.map(x => {
            return {...x}}).sort((x, y) => x.movieName.localeCompare(y.movieName)));
        if (movie.length > 0) {
            setMovieList(response.map(x => {
                return {...x}}).filter(e => e.movieName.includes(movie)));
            setMovieListSorted(response.map(x => {
                return {...x}}).filter(e => e.movieName.includes(movie)).sort((x, y) => x.movieName.localeCompare(y.movieName)));
        }
        
 const deleteReview = (movie) => {
   Axios.delete(`http://localhost:3001/api/delete/${movie}`);
 };

 const updateReview = (movie) => {
   Axios.put("http://localhost:3001/api/update", {
     movieName: movie,
     movieReview: newReview,
   });
   setNewReview("")
 };

  return (
    <div className="App"><h1> Movie catalog and reviews </h1>
    <div className="form">
    <label>Movie Name:</label>
    <input type="text" name="movieName" onChange={(e)=>{
      setMovieName(e.target.value)
    }}/>
    <label>Review:</label>
    <input type="text" name="Review" onChange={(e)=>{
      setReview(e.target.value)
    }}/>

    <button onClick={submitReview}> Submit </button>
    
    <label>Filter:</label>
    <input type="text" name="filter" onChange={(p)=>{filterReviews(p.target.value)}}/>
    <button onClick={getSortedList}>Sort Movies</button>
    
    {movieReviewList.map((val)=>{
    
      return (
        <div className="card">
          <h1> {val.movieName} </h1>
          <p> {val.movieReview} </p>

          <button onClick={() => {deleteReview(val.movieName)}}>Delete</button>
          <input type="text" id="updateInput" onChange={(e) => {setNewReview(e.target.value)}}/>
          <button onClick={()=> {updateReview(val.movieName)}}>Update</button>
        </div>
      );
    })}
  </div>
</div>
);
}

export default App;
