import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import CategoryList from './components/CategoryList';

function App() {

  const [category, setCategory] = useState([]) 

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
  return (
    <div className="App">
        <h1>Django and reatctg</h1>
        <br/>
        <br/>
        
        <CategoryList category = {category}/>
    </div>
  );
}

export default App;
