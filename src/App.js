import { useState } from 'react';
import { data } from './data';
import { kids } from './kids';
import { winter } from './winter';
import { summer } from './summer';
import './App.css';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [activity, setActivity] = useState(data);

  return(<div>
    <div>
      <h1>Best things to do in and around Calgary</h1>
    </div>

    {activity.map((element => {
      const {id, name, image, description} = element;

      const removeActivity = (id) => {
        let newActivity = activity.filter(activity => activity.id !== id);
        setActivity(newActivity)
      }

      return(<div key={id}>
        <div className='container'>
          <h2>{id} - {name}</h2>
        </div>

        <div className='container'>
          <img src={image} width="500px" />
        </div>

        <div className='container'>
          <p>{description}</p>
        </div>

        <div className='container'>
          <button onClick={() => removeActivity(id)}>Delete</button>
        </div>
      </div>)
    }))}

    <div className='container'>
      <button onClick={() => setActivity([])}>Delete All</button>
    </div>
  </div>)

}

export default App;
