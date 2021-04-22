import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import CategoryList from './components/CategoryList';
import Ads from './components/Ads';

function App() {

  const [category, setCategory] = useState([])
  const [ads, setAds] = useState([]) 


  useEffect(() => {
    fetch('http://127.0.0.1:8000/categories/', {
      'method': 'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 72b9a8e77184b9428066b323856d67470e3f0f1e'
      }
    })
    .then(resp => resp.json())
    .then(resp => setCategory(resp))
    .catch(error => console.log(error))

  }, [])

  useEffect(() => {
    fetch('http://127.0.0.1:8000/ads/', {
      'method': 'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization':'Token 72b9a8e77184b9428066b323856d67470e3f0f1e'
      }
    })
    .then(resp => resp.json())
    .then(resp => setAds(resp))
    .catch(error => console.log(error))

  }, [])
  return (
    <div className="App">
        <h1>Django and reatctg</h1>
        <br/>
        <br/>
        
        <CategoryList category = {category}/>
        <Ads ads = {ads}/>
    </div>
  );
}

export default App;
