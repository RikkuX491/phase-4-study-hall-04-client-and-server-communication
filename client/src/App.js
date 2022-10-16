import { useState, useEffect } from 'react'
import Movies from './Movies'
import MovieForm from './MovieForm'
import './App.css';

function App() {

  const [movies, setMovies] = useState([])
  const [formData, setFormData] = useState({})

  console.log(formData)

  useEffect(() => {
    fetch("/movies")
    .then(response => response.json())
    .then(movies => setMovies([...movies]))
  }, [])

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault()

    fetch("/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => {

      if(response.ok){
        response.json().then(movie => setMovies([...movies, movie]))
      }
      else{
        response.json().then(errors => console.log(errors))
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <MovieForm updateFormData={updateFormData} handleSubmit={handleSubmit}/>
        <Movies movies={movies}/>
      </header>
    </div>
  );
}

export default App;
