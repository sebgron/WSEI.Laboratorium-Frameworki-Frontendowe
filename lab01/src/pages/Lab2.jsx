import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/module-data';
import CarProfile from '../components/CarProfile';

const Lab2 = () => {
    const { id } = useParams();

    if (!id) {
        return <p>Brak identyfikatora samochodu.</p>;
    }

    const carId = parseInt(id, 10);
    const car = data.find(c => c.id === carId);

    if (!car) {
        return <p>Nie znaleziono samochodu o identyfikatorze {id}.</p>;
    }

    return (
        <div>
            <h1>Profil Samochodu</h1>
            <CarProfile car={car} />
        </div>
    );
};

export default Lab2;