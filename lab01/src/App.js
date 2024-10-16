import React from 'react';
import { data } from './data/module-data.js';
import CarProfile from './components/CarProfile';

function App() {
  return (
    <div>
        <h1>Lista Samochodów</h1>
        {data.map((car) => (
            <CarProfile key={car.id} car={car} />
        ))}
    </div>
);
}

export default App;
